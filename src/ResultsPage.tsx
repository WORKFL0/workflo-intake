import React, { useMemo } from 'react'

interface ResultsPageProps {
    clientName: string;
    formData: Record<string, any>;
    onReset: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ clientName, formData, onReset }) => {
    const { score, goodPoints, attentionPoints } = useMemo(() => {
        let currentScore = 100;
        const good: string[] = [];
        const attention: string[] = [];

        // Analyze Security
        if (formData['q_admin1']?.includes('Geen Local Admin')) {
            good.push("Veilig Apparaatbeheer: Gebruikers hebben geen admin rechten, top voor security.");
        } else if (formData['q_admin1']) {
            currentScore -= 15;
            attention.push("Local Admin Rechten: Dit geeft gebruikers veel vrijheid, maar aanzienlijk meer risico op malware en herstelkosten buiten scope.");
        }

        if (formData['q25']?.includes('100% mee eens')) {
            good.push("Identiteit & Toegang: MFA is verplicht voor iedereen.");
        }

        // Analyze Backup
        if (formData['q37']?.includes('Cloud Backup is vitaal')) {
            good.push("Data Veiligheid: Cloud Backup is direct gekozen voor maximale zekerheid.");
        } else if (formData['q37']) {
            currentScore -= 20;
            attention.push("Data Veiligheid (Kritiek): Er is gekozen om géén Cloud Backup te nemen. Enkel de prullenbak van Microsoft/Google is aanwezig.");
        }

        // Analyze Hardware / Purchasing
        if (formData['q9']?.includes('alles via Workflo te bestellen')) {
            good.push("Standaardisatie Hardware: Apparaten worden direct beheerd geleverd (Zero Touch) zonder extra uren.");
        } else if (formData['q9']?.includes('We accepteren de extra handelingstijd')) {
            currentScore -= 5;
            attention.push("Eigen Hardware Aanschaf: Houd rekening met een kleine opslag voor het handmatig koppelen van apparaten die elders zijn gekocht.");
        }

        if (formData['q11']?.includes('3 jaar') || formData['q11']?.includes('4 jaar')) {
            good.push("Hardware Lifecycle: Er is een duidelijke hardware afschrijving gekozen (3 tot 4 jaar).");
        } else if (formData['q11']) {
            currentScore -= 10;
            attention.push("Hardware Lifecycle: Pas vervangen bij defecten verhoogt risico op acute downtime. Niet gedekt in fixed fee als toestel End-of-Life was.");
        }

        // Analyze Networking
        if (formData['q39']?.includes('alles onder één warm dak')) {
            good.push("Kantoor Netwerk: Beheer van lokale netwerk-hardware is ondergebracht bij Workflo voor end-to-end support.");
        }

        // Cap score between 0 and 100
        const finalScore = Math.max(0, Math.min(100, currentScore));

        return { score: finalScore, goodPoints: good, attentionPoints: attention };
    }, [formData]);

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
                <h2 className="section-title">Wat is de volgende stap?</h2>
                <p className="section-desc">
                    We gebruiken deze inzichten om de basis in te richten. Mochten er rode vlaggen in de aandachtspunten staan,
                    dan plannen wij (Workflo) nog een kort gesprek in om te zorgen dat de risico's daadwerkelijk door de directie lokaal worden geaccepteerd
                    of dat we hier toch nog beleid op zetten.
                </p>
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <button className="submit-btn" onClick={onReset}>
                        Gereed en Sluiten
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ResultsPage
