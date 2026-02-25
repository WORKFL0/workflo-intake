import React, { useMemo } from 'react'
import { calculateScore, generateTXT, generatePDF } from './utils'

interface ResultsPageProps {
    clientName: string;
    formData: Record<string, any>;
    onReset: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ clientName, formData, onReset }) => {
    const { score, goodPoints, attentionPoints } = useMemo(() => {
        return calculateScore(formData);
    }, [formData]);

    const handleDownload = () => {
        generateTXT(clientName, formData, score);
    };

    const handleDownloadPDF = async () => {
        await generatePDF(clientName, formData, score);
    };

    const getScoreColor = (s: number) => {
        if (s >= 80) return '#10b981'; // Green
        if (s >= 60) return '#f59e0b'; // Yellow/Orange
        return '#ef4444'; // Red
    };

    return (
        <div className="container" style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="header" style={{ borderColor: getScoreColor(score) }}>
                <h1>IT Intake Scorecard</h1>
                <p>Gefeliciteerd {clientName}, de afspraken zijn opgeslagen!</p>
                <p className="header-subtitle">Bekijk hieronder direct de bevindingen over jullie beleidskuzes.</p>

                <div style={{ marginTop: '30px', padding: '20px', borderRadius: '12px', backgroundColor: 'rgba(11, 17, 32, 0.4)', display: 'inline-block' }}>
                    <div style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '5px' }}>Jullie Workflo IT Alignment Score:</div>
                    <div style={{ fontSize: '4rem', fontWeight: 800, color: getScoreColor(score), lineHeight: '1' }}>
                        {score}<span style={{ fontSize: '1.5rem', opacity: 0.6 }}>/100</span>
                    </div>
                </div>
            </div>

            <div className="form-row">
                <div className="section-card half-width" style={{ borderTop: '4px solid #10b981' }}>
                    <h2 className="section-title" style={{ color: '#10b981', fontSize: '1.4rem' }}>
                        <span style={{ marginRight: '8px' }}>✓</span> Volledig Aligned
                    </h2>
                    <p className="section-desc">Deze beslissingen zorgen voor een vlekkeloze en veilige IT omgeving:</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {goodPoints.length > 0 ? (
                            goodPoints.map((pt, i) => (
                                <li key={i} style={{ marginBottom: '15px', color: '#f8fafc', fontSize: '0.95rem' }}>
                                    <span style={{ color: '#10b981', marginRight: '8px' }}>•</span>{pt}
                                </li>
                            ))
                        ) : (
                            <li style={{ color: '#94a3b8', fontStyle: 'italic' }}>Geen sterke best-practices aangevinkt.</li>
                        )}
                    </ul>
                </div>

                <div className="section-card half-width" style={{ borderTop: '4px solid #f97316' }}>
                    <h2 className="section-title" style={{ color: '#f97316', fontSize: '1.4rem' }}>
                        <span style={{ marginRight: '8px' }}>!</span> Aandachtspunten
                    </h2>
                    <p className="section-desc">Deze keuzes brengen (lokale) risico's of verhoogde kosten met zich mee:</p>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        {attentionPoints.length > 0 ? (
                            attentionPoints.map((pt, i) => (
                                <li key={i} style={{ marginBottom: '15px', color: '#f8fafc', fontSize: '0.95rem' }}>
                                    <span style={{ color: '#f97316', marginRight: '8px' }}>•</span>{pt}
                                </li>
                            ))
                        ) : (
                            <li style={{ color: '#10b981', fontStyle: 'italic', fontWeight: 'bold' }}>Smetteloos beleid! Geen bekende risico's.</li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="section-card">
                <h2 className="section-title">Maatwerk Voorbeeld: Onboarding Formulier</h2>
                <p className="section-desc">
                    Op basis van jullie antwoorden (Minimale opzegtermijn: {formData['q6'] || 'Niet ingevuld'}) hebben we dit standaard aanvraagformulier voor jullie nieuwe medewerkers opgesteld. Deel deze eisen intern met HR/Management.
                </p>
                <div style={{ background: 'rgba(11, 17, 32, 0.6)', padding: '25px', borderRadius: '8px', border: '1px solid #334155' }}>
                    <h3 style={{ color: '#fcd34d', marginBottom: '15px' }}>Nieuwe Medewerker Aanmelden</h3>
                    <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginBottom: '20px' }}>
                        Vul de onderstaande verplichte velden in en schiet ze in via ons portals/ticketsysteem.
                    </p>
                    {Array.isArray(formData['q_onb1']) && formData['q_onb1'].length > 0 ? (
                        <ul style={{ listStyleType: 'square', paddingLeft: '20px', color: '#f8fafc', fontSize: '0.95rem' }}>
                            {formData['q_onb1'].map((veld: string, idx: number) => (
                                <li key={idx} style={{ marginBottom: '8px' }}>{veld}</li>
                            ))}
                        </ul>
                    ) : (
                        <p style={{ color: '#ef4444', fontStyle: 'italic' }}>Jullie hebben hier nog geen datavelden voor gekozen in de intake.</p>
                    )}
                </div>
            </div>

            <div className="section-card">
                <h2 className="section-title">IT Overeenkomst (PDF) Opslaan</h2>
                <p className="section-desc">
                    Nu we alle policies en inzichten hebben, kunnen jullie deze direct als PDF Overeenkomst ("Service Agreement") opslaan ter ondertekening of als document in het klantdossier.
                </p>

                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px' }}>
                    <button
                        className="submit-btn"
                        onClick={handleDownloadPDF}
                        style={{ background: '#10b981', border: 'none', color: '#fff', minWidth: 'auto', padding: '12px 24px', fontSize: '1rem', boxShadow: '0 4px 14px 0 rgba(16, 185, 129, 0.39)' }}
                    >
                        📄 Download PDF Overeenkomst
                    </button>
                    <button
                        className="submit-btn"
                        onClick={handleDownload}
                        style={{ background: 'transparent', border: '2px solid var(--accent-yellow)', color: 'var(--accent-yellow)', minWidth: 'auto', padding: '12px 24px', fontSize: '1rem' }}
                    >
                        💾 Ruwe TXT Data opslaan
                    </button>
                </div>

                <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                    <button className="submit-btn" onClick={onReset} style={{ minWidth: 'auto' }}>
                        Gereed en Nieuw formulier
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ResultsPage
