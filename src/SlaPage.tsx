import React from 'react'
import './index.css'

interface SlaPageProps {
    onNavigateHome: () => void;
}

const SlaPage: React.FC<SlaPageProps> = ({ onNavigateHome }) => {
    return (
        <div className="container">
            <div className="header">
                <h1>SLA & Voorwaarden</h1>
                <p>Helderheid over onze service en wat je van Workflo kunt verwachten.</p>
                <button className="submit-btn" style={{ marginTop: '20px', minWidth: 'auto', padding: '10px 20px', fontSize: '1rem' }} onClick={onNavigateHome}>
                    &larr; Terug naar het Intake Formulier
                </button>
            </div>

            <div className="section-card">
                <h2 className="section-title">1. Service Level Agreement (SLA) Prioriteiten</h2>
                <p className="section-desc">Hoe wij bepalen wat écht urgent is, en wat even kan wachten.</p>

                <div className="priority-grid">
                    <div className="form-group" style={{ marginBottom: '30px', padding: '20px', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ef4444', marginBottom: '10px' }}>P1 - Kritiek (Prioriteit 1)</h3>
                        <p className="question-desc" style={{ color: '#f8fafc', marginBottom: '8px' }}><strong>Situatie:</strong> Het hele bedrijf, of een vitale afdeling, ligt volledig stil. Er is geen workaround mogelijk (bijv. server down, bedrijfswijd netwerk uitgevallen).</p>
                        <p className="question-desc"><strong>Responstijd:</strong> Binnen 1 uur<br /><strong>Doelstelling Oplossing:</strong> Zo snel als menselijk mogelijk (hoogste prioriteit op alle afdelingen).</p>
                    </div>

                    <div className="form-group" style={{ marginBottom: '30px', padding: '20px', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderLeft: '4px solid #f97316', borderRadius: '8px' }}>
                        <h3 style={{ color: '#f97316', marginBottom: '10px' }}>P2 - Hoog (Prioriteit 2)</h3>
                        <p className="question-desc" style={{ color: '#f8fafc', marginBottom: '8px' }}><strong>Situatie:</strong> Impact op meerdere gebruikers of een belangrijk systeem hapert, maar het werk ligt niet globaal 100% stil (bijv. specifieke cloud server traag, printer netwerk offline).</p>
                        <p className="question-desc"><strong>Responstijd:</strong> Binnen 4 uur<br /><strong>Doelstelling Oplossing:</strong> Dezelfde werkdag of maximaal 24 uur afhankelijk van hardware afhankelijkheid.</p>
                    </div>

                    <div className="form-group" style={{ padding: '20px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', borderRadius: '8px' }}>
                        <h3 style={{ color: '#3b82f6', marginBottom: '10px' }}>P3 - Normaal / Serviceverzoek (Prioriteit 3)</h3>
                        <p className="question-desc" style={{ color: '#f8fafc', marginBottom: '8px' }}><strong>Situatie:</strong> Een incident voor één gebruiker of een reguliere aanvraag (bijv. nieuwe muis nodig, wachtwoord reset, rechten wijziging, "hoe werkt Word?").</p>
                        <p className="question-desc"><strong>Responstijd:</strong> Binnen 8 uur (volgende werkdag)<br /><strong>Doelstelling Oplossing:</strong> In overleg, doorgaans 1 tot 3 werkdagen.</p>
                    </div>
                </div>
            </div>

            <div className="section-card">
                <h2 className="section-title">2. Scope: Wat is inbegrepen in de Fixed Fee?</h2>
                <p className="section-desc">Onze All-in fee dekt het beheer en support om de dagelijkse werkzaamheden soepel te laten draaien, maar dekt niet 'alles wat een stekker heeft'.</p>

                <div className="form-group">
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <span style={{ color: '#10b981', fontSize: '1.2rem' }}>✓</span>
                            <div>
                                <strong>Inbegrepen (Remote Support):</strong> Hulp bij bestaande, door ons geleverde en beheerde hardware en software. Storingen en vragen over Microsoft 365, netwerk op kantoor en OS (Windows/Mac) problemen t.b.v zakelijk functioneren.
                            </div>
                        </li>
                        <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <span style={{ color: '#ef4444', fontSize: '1.2rem' }}>✗</span>
                            <div>
                                <strong>Buiten Scope (Billable):</strong> Support op privéapparatuur, particuliere software, printers bij mensen thuis óf het ontwerpen van geheel nieuwe infrastructuren (projecten/migraties).
                            </div>
                        </li>
                        <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <span style={{ color: '#ef4444', fontSize: '1.2rem' }}>✗</span>
                            <div>
                                <strong>Buiten Scope (Fysieke Schade & Grof Nalatigheid):</strong> Mocht iemand koffie over een laptop gooien of moedwillig de beveiliging deactiveren. Onderzoek of herstel hiervan vallen onder ons standaard uurtarief.
                            </div>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <span style={{ color: '#fcd34d', fontSize: '1.2rem' }}>!</span>
                            <div>
                                <strong>Fair Use:</strong> Wij sturen niet op een teller, mits de balans redelijk is. Loopt iemand stelselmatig vast op basistaken (bijv. het gebruik van Excel), dan adviseren (en factureren) wij liever een training dan dat dit de support-lijnen structureel belast.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section-card">
                <h2 className="section-title">3. Verantwoordelijkheden (Samenwerking)</h2>
                <p className="section-desc">Wij zijn jullie vangnet, maar IT-veiligheid is een gedeelde inzet.</p>

                <div className="form-group">
                    <label className="question-label" style={{ color: '#fcd34d' }}>Lokale Administrator & Beheer</label>
                    <p className="question-desc" style={{ color: '#f8fafc' }}>
                        Workflo adviseert om geen lokale admin rechten aan gebruikers te geven ter voorkoming van malware en verstoringen. Indien hiervan wordt afgeweken op verzoek van de klant, is de klant zelf verantwoordelijk voor eventuele extra uren benodigd voor herstel.
                    </p>
                </div>

                <div className="form-group">
                    <label className="question-label" style={{ color: '#fcd34d' }}>Tijdigheid</label>
                    <p className="question-desc" style={{ color: '#f8fafc' }}>
                        Wijzigingen zoals onboarding en uitdiensttreding moeten voldoende tijdig (bijv. 5 werkdagen) worden doorgegeven, om accounts veilig af te sluiten of klaar te zetten. De klant (jullie) draagt de kosten voor licenties die niet tijdig doorgegeven zijn ter opzegging.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default SlaPage
