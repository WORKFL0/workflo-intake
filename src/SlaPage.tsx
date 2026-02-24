import React from 'react'
import './index.css'

interface SlaPageProps {
    onNavigateHome: () => void;
}

const SlaPage: React.FC<SlaPageProps> = ({ onNavigateHome }) => {
    return (
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="header">
                <h1>Onze Spelregels (SLA & Voorwaarden)</h1>
                <p>Helderheid over onze service zonder saaie IT-taal. Wat kun je van Workflo verwachten?</p>
                <button className="submit-btn" style={{ marginTop: '20px', minWidth: 'auto', padding: '10px 20px', fontSize: '1rem' }} onClick={onNavigateHome}>
                    &larr; Terug naar het Intake Formulier
                </button>
            </div>

            <div className="section-card">
                <h2 className="section-title">1. Prioriteiten: Hoe snel komen we in actie?</h2>
                <p className="section-desc">Net als bij de dokter hebben we een triagesysteem. Bij een schaafwond word je geholpen, maar een hartstilstand gaat natuurlijk altijd voor. Zo doen wij dat ook:</p>

                <div className="priority-grid">
                    <div className="form-group" style={{ marginBottom: '30px', padding: '20px', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ef4444', marginBottom: '10px' }}>P1 - Het Hele Bedrijf Ligt Stil (Kritiek)</h3>
                        <p className="question-desc" style={{ color: '#f8fafc', marginBottom: '8px' }}>
                            <strong>Wat is er aan de hand?</strong> Echt een noodsituatie. Niemand kan meer e-mailen, jullie belangrijkste bedrijfssoftware is gecrasht, of het hele kantoor zit zonder internet.
                        </p>
                        <p className="question-desc"><strong>Wanneer reageren we?</strong> Binnen 1 uur laten we alles vallen om jullie te helpen.</p>
                    </div>

                    <div className="form-group" style={{ marginBottom: '30px', padding: '20px', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderLeft: '4px solid #f97316', borderRadius: '8px' }}>
                        <h3 style={{ color: '#f97316', marginBottom: '10px' }}>P2 - Een Groep Mensen Heeft Problemen (Hoog)</h3>
                        <p className="question-desc" style={{ color: '#f8fafc', marginBottom: '8px' }}>
                            <strong>Wat is er aan de hand?</strong> Een specifieke afdeling kan niet werken, of een belangrijk systeem hapert flink (zoals de printer van afdeling sales), maar de rest van het bedrijf kan wel nog gewoon doorwerken.
                        </p>
                        <p className="question-desc"><strong>Wanneer reageren we?</strong> Binnen 4 uur. We pakken dit dezelfde dag nog grondig voor je op.</p>
                    </div>

                    <div className="form-group" style={{ padding: '20px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', borderRadius: '8px' }}>
                        <h3 style={{ color: '#3b82f6', marginBottom: '10px' }}>P3 - Standaard Verzoekjes (Normaal)</h3>
                        <p className="question-desc" style={{ color: '#f8fafc', marginBottom: '8px' }}>
                            <strong>Wat is er aan de hand?</strong> Dingen die handig zijn, maar geen brandmelding. "Ik wil graag een nieuwe draadloze muis", "Hoe maak ik een nieuwe handtekening aan in Outlook?", of "Kees krijgt volgende maand een nieuwe rol, en heeft vast de map 'Directie' nodig".
                        </p>
                        <p className="question-desc"><strong>Wanneer reageren we?</strong> Binnen 8 uur. Afhankelijk van de wens plannen we dit relaxed met jullie in (doorgaans gefixt in 1 tot 3 werkdagen).</p>
                    </div>
                </div>
            </div>

            <div className="section-card">
                <h2 className="section-title">2. Wat betekent "All-in(begrepen)"?</h2>
                <p className="section-desc">Simpel gezegd dekken we in onze vaste prijs alles wat nodig is om jullie <strong>bestaande, zakelijke systemen</strong> draaiende te houden. Wel zitten er logische grenzen aan onze toverkracht:</p>

                <div className="form-group">
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                            <span style={{ color: '#10b981', fontSize: '1.5rem', lineHeight: '1.2' }}>✓</span>
                            <div>
                                <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>Inbegrepen: Het zakelijke fundament</strong>
                                <span className="question-desc" style={{ color: '#f8fafc' }}>Vragen, storingen of support op de door ons geleverde laptops, Microsoft/Google accounts en kantoor-netwerken pakken we fluitend (en zonder extra factuur) voor je op via ons ticket systeem.</span>
                            </div>
                        </li>

                        <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                            <span style={{ color: '#ef4444', fontSize: '1.5rem', lineHeight: '1.2' }}>✗</span>
                            <div>
                                <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>Niet inbegrepen: Privé apparatuur & Zelf gecreëerde chaos</strong>
                                <span className="question-desc" style={{ color: '#f8fafc' }}>Werkt die privé Nintendo niet meer goed op jullie netwerk? Of heeft een medewerker na de de VrijMiBo de kantoorlaptop als onderzetter voor een mok koffie gebruikt en moeten we de data redden? Dan doen we ons best, maar brengen we wel de uren achteraf bij jullie in rekening.</span>
                            </div>
                        </li>

                        <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                            <span style={{ color: '#ef4444', fontSize: '1.5rem', lineHeight: '1.2' }}>✗</span>
                            <div>
                                <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>Niet inbegrepen: Nieuwe Grote Projecten</strong>
                                <span className="question-desc" style={{ color: '#f8fafc' }}>Verhuizen jullie naar een kantoor wat 3x zo groot is, of willen jullie alle data naar een totaal nieuw systeem migreren? Supertof! Maar dit kost meer uren en project-aandacht dan dagelijks beheer dekt. (Maken we apart een projectplan voor op).</span>
                            </div>
                        </li>

                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                            <span style={{ color: '#fcd34d', fontSize: '1.5rem', lineHeight: '1.2' }}>⚖️</span>
                            <div>
                                <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '4px' }}>De 'Fair Use' Policy</strong>
                                <span className="question-desc" style={{ color: '#f8fafc' }}>Wij tellen geen tickets. Of je collega nu 3x of 7x per maand een legitieme IT-vraag heeft, all-in is all-in. Maar als een specifieke medewerker wekelijks onzeker is "hoe hij Excel moet openen", plannen we liever even een gesprek in voor een (betaalde) basistraining dan dat hij oneindig gered moet worden. In de basis verwachten we dat iedereen met computers om kán gaan.</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section-card">
                <h2 className="section-title">3. Wat we van jullie mogen verwachten</h2>
                <p className="section-desc">Wij fixen de IT, jullie blijven in de lead van het bedrijf. Wat vragen we van jullie?</p>

                <div className="form-group">
                    <label className="question-label" style={{ color: '#fcd34d', fontSize: '1.15rem' }}>De 'Lokale Administrator' gevarenzone</label>
                    <p className="question-desc" style={{ color: '#f8fafc', fontSize: '1rem', marginTop: '6px' }}>
                        Wij raden altijd aan: *Medewerkers mogen niet zomaar zelf alles installeren op hun zakelijke laptop*. Doen ze dit wel, is de kans groot dat ze per ongeluk foute software ("malware") en virussen installeren.
                        Willen jullie medewerkers (of de baas) deze installatie-rechten (Local Admin) wél hebben om lokaal flexibel te zijn? Geen probleem! Echter zijn eventuele herstel-uren om de schade van de zelf ontstane computercrash dan wel rechtstreeks <strong>voor eigen rekening</strong>.
                    </p>
                </div>

                <div className="form-group" style={{ marginTop: '25px' }}>
                    <label className="question-label" style={{ color: '#fcd34d', fontSize: '1.15rem' }}>Tijdig Doorgeven (Anders betaal je voor lucht)</label>
                    <p className="question-desc" style={{ color: '#f8fafc', fontSize: '1rem', marginTop: '6px' }}>
                        Gaat er iemand uit dienst? Laat het tijdig weten (minstens 5 werkdagen)! Licenties voor software stoppen niet automatisch zodra iemand zijn laatste werkdag heeft gehad. Geven jullie dit niet (uit jezelf) door, dan betalen jullie onnodig licentiekosten en valt de verantwoordelijkheid hiervoor lokaal. Geef wijzigingen dus door via het ticket systeem!
                    </p>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button className="submit-btn" onClick={onNavigateHome}>
                    Ik snap het, terug naar het Intake Formulier
                </button>
            </div>
        </div>
    )
}

export default SlaPage
