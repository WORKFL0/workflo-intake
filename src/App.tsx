import { useState } from 'react'
import { formSections } from './data'

function App() {
    const [formData, setFormData] = useState<Record<string, string>>({})

    const handleChange = (id: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Formulier data ingediend:", formData)
        alert("Formulier succesvol ingediend! We nemen zo snel mogelijk contact op.")
    }

    return (
        <div className="container">
            <div className="header">
                <h1>Workflo IT Intake & Policy Agreement</h1>
                <p>Samen maken we glasheldere afspraken, zodat IT soepel voor jullie werkt zonder verrassingen.</p>
            </div>

            <form onSubmit={handleSubmit}>
                {formSections.map((section, idx) => (
                    <div key={idx} className="section-card">
                        <h2 className="section-title">{section.title}</h2>

                        {section.questions.map((q) => (
                            <div key={q.id} className="form-group">
                                <label className="question-label" htmlFor={q.id}>{q.label}</label>
                                <span className="question-desc">{q.desc}</span>

                                {q.type === 'text' && (
                                    <input
                                        type="text"
                                        id={q.id}
                                        className="input-text"
                                        placeholder="Uw antwoord..."
                                        value={formData[q.id] || ''}
                                        onChange={(e) => handleChange(q.id, e.target.value)}
                                    />
                                )}

                                {q.type === 'textarea' && (
                                    <textarea
                                        id={q.id}
                                        className="input-textarea"
                                        placeholder="Uw toelichting..."
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
                            </div>
                        ))}
                    </div>
                ))}

                <button type="submit" className="submit-btn">Intake Formulier Verzenden</button>
            </form>
        </div>
    )
}

export default App
