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
                <h2 className="section-title">1. Onze Filosofie (Waarom Workflo werkt)</h2>
                <p className="question-desc" style={{ color: '#f8fafc', marginBottom: '15px' }}>
                    Bij traditionele systeembeheerders of strippenkaarten geldt vaak: <em>meer problemen = meer uren = hogere kosten</em>. Er is weinig prikkel om structureel te automatiseren of te verbeteren.<br /><br />
                    Bij ons is dat precies andersom. Wij verdienen ons geld niet aan het maken van uren, maar aan het voorkomen van problemen. Wij investeren vooraf in:
                </p>
                <ul style={{ color: '#10b981', fontWeight: 'bold', lineHeight: '1.8', marginLeft: '20px', marginBottom: '15px' }}>
                    <li>Standaardisatie</li>
                    <li>Automatisering</li>
                    <li>Preventie</li>
                </ul>
                <p className="section-desc">
                    Zodat jullie IT vooral saai en stabiel is — en dat is precies wat je wilt. Hoe minder problemen jullie hebben, hoe beter dit model werkt: voor jullie én voor ons.
                </p>
            </div>

            <div className="section-card">
                <h2 className="section-title">2. De Vaste Fee (All-in)</h2>
                <p className="section-desc">
                    Workflo werkt met een vaste maandprijs van <strong>€ 55,- per medewerker per maand</strong>. In die fee zit alles wat nodig is om de dagelijkse IT gewoon goed, veilig en voorspelbaar te laten draaien.
                </p>

                <div className="form-group" style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: '#10b981', marginBottom: '15px' }}>Wat zit er wél in de vaste fee?</h3>
                    <ul style={{ color: '#f8fafc', lineHeight: '1.8', marginLeft: '20px' }}>
                        <li><strong>Dagelijkse Support:</strong> Hulp bij problemen met laptops, desktops, e-mail, Office, printers en netwerk (wifi).</li>
                        <li><strong>Ondersteuning op afstand:</strong> Waar mogelijk lossen we problemen direct op met minimale downtime.</li>
                        <li><strong>Ondersteuning op locatie:</strong> Wanneer nodig zijn we binnen 4 uur ter plaatse.</li>
                        <li><strong>Proactief beheer:</strong> Updates, monitoring en onderhoud op de achtergrond.</li>
                        <li><strong>Beveiliging:</strong> Inclusief antivirus en security monitoring.</li>
                        <li><strong>Automatisering:</strong> We automatiseren waar mogelijk om repeterende problemen te voorkomen.</li>
                    </ul>
                </div>

                <div className="form-group">
                    <h3 style={{ color: '#ef4444', marginBottom: '15px' }}>Wat zit er níet in?</h3>
                    <p className="question-desc" style={{ color: '#94a3b8', marginBottom: '10px' }}>
                        Niet alles is logisch om in een vaste maandprijs op te nemen. Zaken die hopelijk weinig voorkomen (maar wél veel tijd kosten), vallen hierbuiten. Denk aan:
                    </p>
                    <ul style={{ color: '#f8fafc', lineHeight: '1.8', marginLeft: '20px', marginBottom: '15px' }}>
                        <li>Herstel na calamiteiten (brand, diefstal, volledige uitval, ransomware of grove nalatigheid gebruiker).</li>
                        <li>Grote projecten, zoals netwerkvervanging of grote migraties.</li>
                        <li>Uitzonderlijke klussen die losstaan van dagelijkse support.</li>
                    </ul>
                    <p className="question-desc" style={{ color: '#fcd34d', backgroundColor: 'rgba(252, 211, 77, 0.1)', padding: '15px', borderRadius: '8px' }}>
                        Dit soort werkzaamheden doen we uiteraard wel, maar <strong>altijd apart, vooraf afgestemd en geoffreerd</strong>. Hiervoor geldt een project-uurtarief van <strong>€ 85,50</strong>. Daarmee krijgen jullie een korting van 10% t.o.v. ons reguliere ad-hoc tarief.
                    </p>
                </div>
            </div>

            <div className="section-card">
                <h2 className="section-title">3. SLAs (Prioriteiten van Support)</h2>
                <p className="section-desc">Net als bij de dokter hebben we een triagesysteem. Bij een schaafwond word je geholpen, maar een hartstilstand gaat natuurlijk altijd voor. Zo doen wij dat ook aan de hand van onze inbegrepen support-uren:</p>

                <div className="priority-grid">
                    <div className="form-group" style={{ marginBottom: '15px', padding: '15px', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ef4444', marginBottom: '5px', fontSize: '1.1rem' }}>P1 - Kritiek (Binnen 1 uur)</h3>
                        <p className="question-desc" style={{ color: '#f8fafc', margin: 0 }}>
                            Echt een noodsituatie. Het netwerk of hoofdsysteem (mail/server) ligt plat voor het hele bedrijf.
                        </p>
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px', padding: '15px', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderLeft: '4px solid #f97316', borderRadius: '8px' }}>
                        <h3 style={{ color: '#f97316', marginBottom: '5px', fontSize: '1.1rem' }}>P2 - Hoog (Binnen 4 uur, op locatie indien nodig)</h3>
                        <p className="question-desc" style={{ color: '#f8fafc', margin: 0 }}>
                            Een specifieke afdeling, meeting room of kritisch individu ligt stil en kan niet werken.
                        </p>
                    </div>

                    <div className="form-group" style={{ padding: '15px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', borderRadius: '8px' }}>
                        <h3 style={{ color: '#3b82f6', marginBottom: '5px', fontSize: '1.1rem' }}>P3/P4 - Normaal (Binnen 8 uur reactie)</h3>
                        <p className="question-desc" style={{ color: '#f8fafc', margin: 0 }}>
                            "Ik wil een account aanvragen voor Kees", of "Hoe stel ik afwezigheid in?".
                        </p>
                    </div>
                </div>
            </div>

            <div className="section-card">
                <h2 className="section-title">4. Hardware (Flexibel & Transparant)</h2>
                <p className="section-desc">Hardware kán via ons aangeschaft worden (Zero-Touch ingericht), maar is geen verplichting.</p>

                <div className="form-group" style={{ marginBottom: '25px' }}>
                    <h3 style={{ color: '#3b82f6', marginBottom: '10px' }}>Kies je hardware via Workflo, dan geldt:</h3>
                    <ul style={{ color: '#f8fafc', lineHeight: '1.8', marginLeft: '20px' }}>
                        <li>Wij hanteren <strong>exact dezelfde prijzen</strong> als de originele fabrikant (bijv. apple.nl).</li>
                        <li>Géén opslag, géén verborgen marges.</li>
                        <li>Wij verzorgen de <strong>volledige garantie-afhandeling</strong> naadloos binnen de fixed fee.</li>
                    </ul>
                </div>

                <div className="form-group">
                    <h3 style={{ color: '#f97316', marginBottom: '10px' }}>Reparaties buiten fabrieksgarantie (Val/stootschade):</h3>
                    <ul style={{ color: '#f8fafc', lineHeight: '1.8', marginLeft: '20px' }}>
                        <li>Gaan altijd via onze vaste betrouwbare repairpartners.</li>
                        <li>Worden vooraf besproken en netjes voorgelegd voor offerte-goedkeuring.</li>
                    </ul>
                </div>
            </div>

            <div className="section-card">
                <h2 className="section-title">5. Communicatiebeleid</h2>
                <p className="section-desc">Geen verrassingen en korte lijntjes. Dat is wel zo prettig samenwerken.</p>

                <ul style={{ color: '#f8fafc', lineHeight: '1.8', marginLeft: '20px' }}>
                    <li><strong>Medewerkers Contact:</strong> Medewerkers hebben direct contact met onze support via de online Support Portal voor minimale downtime.</li>
                    <li><strong>Eén vast aanspreekpunt (IT Hero):</strong> Vragen we op de werkvloer voor efficiënte kostenafstemming, advies en structureel overleg op aan.</li>
                    <li><strong>Kosten overleg:</strong> Werkzaamheden en kosten die buiten de eventuele vaste fee vallen, worden altijd <em>vooraf</em> overlegd met jullie eigen hoofdcontactpersoon.</li>
                    <li><strong>Rapportage:</strong> Jullie ontvangen een helder maandelijks overzicht van uitgevoerde werkzaamheden door ons team.</li>
                </ul>
            </div>

            <div className="section-card">
                <h2 className="section-title">6. Duur van de Overeenkomst (Try & Commit)</h2>
                <p className="question-desc" style={{ color: '#f8fafc', marginBottom: '15px' }}>
                    We gaan in de basis een overeenkomst aan voor <strong>12 maanden</strong>.
                </p>
                <p className="question-desc" style={{ color: '#f8fafc' }}>
                    Omdat we rotsvast in ons model geloven, plannen we <strong>na 6 maanden een evaluatie</strong>. We kijken dan eerlijk naar elkaar: zijn jullie blij en is de tijdbesteding zoals we hadden ingecalculeerd? Mochten we niet bij elkaar passen, kunnen we het beheer na deze 6 maanden beëindigen. (Let wel: losse softwarelicenties op jaar-termijn zullen doorlopen conform hun eigen leveranciersvoorwaarden).
                </p>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button className="submit-btn" onClick={onNavigateHome}>
                    Ideaal. Terug naar het Intake Formulier
                </button>
            </div>
        </div>
    )
}

export default SlaPage
