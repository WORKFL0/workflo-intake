import { useState } from 'react'
import { formSections } from './data'
import { supabase } from './supabaseClient'
import SlaPage from './SlaPage'

function App() {
    const [currentPage, setCurrentPage] = useState<'form' | 'sla'>('form')
    const [clientData, setClientData] = useState({
        name: '',
        address: '',
        city: ''
    })
    const [formData, setFormData] = useState<Record<string, any>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleClientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setClientData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleChange = (id: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleCheckboxChange = (id: string, value: string, checked: boolean) => {
        setFormData(prev => {
            const arr = Array.isArray(prev[id]) ? [...prev[id]] : []
            if (checked) {
                if (!arr.includes(value)) arr.push(value)
            } else {
                const index = arr.indexOf(value)
                if (index > -1) arr.splice(index, 1)
            }
            return {
                ...prev,
                [id]: arr
            }
        })
    }

    const renderDesc = (desc: string) => {
        if (!desc.includes('{{SLA}}')) return desc;
        const parts = desc.split('{{SLA}}');
        return (
            <>
                {parts[0]}
                <button
                    type="button"
                    onClick={() => {
                        setCurrentPage('sla')
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                    }}
                    style={{ background: 'none', border: 'none', padding: 0, color: 'var(--accent-yellow)', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
                >
                    onze SLA en Voorwaarden
                </button>
                {parts[1]}
            </>
        )
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const { error } = await supabase
                .from('intakes')
                .insert([
                    {
                        client_name: clientData.name,
                        client_address: clientData.address,
                        client_city: clientData.city,
                        answers: formData
                    }
                ])

            if (error) {
                console.error('Fout bij opslaan:', error)
                alert('Er is helaas iets misgegaan bij het opslaan. Probeer het opnieuw of neem contact op.')
            } else {
                setIsSuccess(true)
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        } catch (err) {
            console.error('Onverwachte fout:', err)
            alert('Er is een onverwachte fout opgetreden.')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (currentPage === 'sla') {
        return <SlaPage onNavigateHome={() => {
            setCurrentPage('form')
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }} />
    }

    if (isSuccess) {
        return (
            <div className="container success-container">
                <div className="success-message section-card">
                    <h2>Bedankt voor de samenwerking, {clientData.name}!</h2>
                    <p>We hebben de ingevulde policies en antwoorden veilig opgeslagen in ons systeem.</p>
                    <p>We zullen dit document gebruiken als leidraad en fundering voor onze support. Welkom bij Workflo!</p>
                    <button className="submit-btn" onClick={() => window.location.reload()}>Nieuw formulier invullen</button>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Workflo IT Intake & Policy Agreement</h1>
                <p>Samen maken we warme, heldere afspraken, zodat IT soepel voor jullie werkt zonder verrassingen.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', marginTop: '15px' }}>
                    <p className="header-subtitle">Vul dit document samen in om onze samenwerking de best mogelijke start te geven.</p>
                    <button
                        type="button"
                        onClick={() => {
                            setCurrentPage('sla')
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        style={{ background: 'transparent', border: '1px solid var(--accent-yellow)', color: 'var(--accent-yellow)', padding: '8px 16px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.9rem', transition: 'all 0.2s' }}
                    >
                        Lees onze SLA & Fixed Fee Voorwaarden
                    </button>
                </div>
            </div>

            <form onSubmit={handleSubmit}>

                {/* NAW Gegevens Sectie */}
                <div className="section-card client-info-card">
                    <h2 className="section-title">Klantgegevens</h2>
                    <p className="section-desc">Voor welk bedrijf leggen we deze afspraken vast?</p>

                    <div className="form-group">
                        <label className="question-label" htmlFor="clientName">Bedrijfsnaam</label>
                        <input
                            type="text"
                            id="clientName"
                            name="name"
                            required
                            className="input-text"
                            placeholder="Bijv. Acme Corp B.V."
                            value={clientData.name}
                            onChange={handleClientChange}
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group half-width">
                            <label className="question-label" htmlFor="clientAddress">Adres</label>
                            <input
                                type="text"
                                id="clientAddress"
                                name="address"
                                className="input-text"
                                placeholder="Straat en huisnummer"
                                value={clientData.address}
                                onChange={handleClientChange}
                            />
                        </div>
                        <div className="form-group half-width">
                            <label className="question-label" htmlFor="clientCity">Plaats</label>
                            <input
                                type="text"
                                id="clientCity"
                                name="city"
                                className="input-text"
                                placeholder="Woonplaats/Vestiging"
                                value={clientData.city}
                                onChange={handleClientChange}
                            />
                        </div>
                    </div>
                </div>

                {/* Vragen Secties */}
                {formSections.map((section, idx) => (
                    <div key={idx} className="section-card">
                        <h2 className="section-title">{section.title}</h2>
                        {section.description && <p className="section-desc">{section.description}</p>}

                        {section.questions.map((q) => (
                            <div key={q.id} className="form-group">
                                <label className="question-label" htmlFor={q.id}>{q.label}</label>
                                <span className="question-desc">{renderDesc(q.desc)}</span>

                                {q.type === 'text' && (
                                    <input
                                        type="text"
                                        id={q.id}
                                        className="input-text"
                                        placeholder="Jullie reactie of beleid..."
                                        value={formData[q.id] || ''}
                                        onChange={(e) => handleChange(q.id, e.target.value)}
                                    />
                                )}

                                {q.type === 'textarea' && (
                                    <textarea
                                        id={q.id}
                                        className="input-textarea"
                                        placeholder="We denken hier graag in mee. Wat is jullie visie hierop?"
                                        value={formData[q.id] || ''}
                                        onChange={(e) => handleChange(q.id, e.target.value)}
                                    />
                                )}

                                {(q.type === 'radio' && q.options) && (
                                    <div className="radio-group">
                                        {q.options.map((opt, optIdx) => (
                                            <label key={optIdx} className="radio-label">
                                                <input
                                                    type="radio"
                                                    name={q.id}
                                                    value={opt}
                                                    checked={formData[q.id] === opt}
                                                    onChange={(e) => handleChange(q.id, e.target.value)}
                                                />
                                                {opt}
                                            </label>
                                        ))}
                                    </div>
                                )}

                                {(q.type === 'checkbox' && q.options) && (
                                    <div className="checkbox-group">
                                        {q.options.map((opt, optIdx) => {
                                            const checked = Array.isArray(formData[q.id]) && formData[q.id].includes(opt)
                                            return (
                                                <label key={optIdx} className="checkbox-label">
                                                    <input
                                                        type="checkbox"
                                                        name={q.id}
                                                        value={opt}
                                                        checked={checked}
                                                        onChange={(e) => handleCheckboxChange(q.id, opt, e.target.checked)}
                                                    />
                                                    {opt}
                                                </label>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}

                <div className="submit-section">
                    <p className="submit-note">Door op verzenden te klikken, worden deze antwoorden veilig opgeslagen in onze database en gekoppeld aan jullie klantdossier. Zo kunnen we direct met de juiste context support leveren.</p>
                    <button type="submit" className="submit-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Bezig met opslaan...' : 'Intake Formulier Opslaan & Verzenden'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default App
