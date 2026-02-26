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
                    Workflo werkt met een <strong>vaste, afgestemde maandprijs per medewerker</strong> (o.b.v. benodigd support en calculatie). In die fee zit alles wat omschreven is om de dagelijkse IT gewoon goed, veilig en voorspelbaar te laten draaien. Simpel gezegd dekken we hierin alles om jullie bestaande zakelijke systemen draaiende te houden.
                </p>

                <div className="form-group" style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: '#10b981', marginBottom: '15px' }}>Wat zit er wél in de vaste fee?</h3>
                    <ul style={{ color: '#f8fafc', lineHeight: '1.8', marginLeft: '20px' }}>
                        <li><strong>Dagelijkse Support:</strong> Hulp bij vragen en storingen met laptops, e-mail, Office, printers en kantoornetwerk.</li>
                        <li><strong>Ondersteuning op afstand:</strong> Waar mogelijk lossen we problemen direct op met minimale downtime.</li>
                        <li><strong>Ondersteuning op locatie:</strong> Wanneer nodig komen we ter plaatse voor herstel (binnen SLA).</li>
                        <li><strong>Proactief beheer:</strong> Updates, monitoring en onderhoud op de achtergrond.</li>
                        <li><strong>Beveiliging:</strong> Inclusief antivirus en security monitoring.</li>
                        <li><strong>Automatisering:</strong> We automatiseren waar mogelijk om repeterende problemen te voorkomen.</li>
                    </ul>
                </div>

                <div className="form-group" style={{ marginBottom: '30px' }}>
                    <h3 style={{ color: '#ef4444', marginBottom: '15px' }}>Wat zit er níet in? (Privé apparatuur & Chaos)</h3>
                    <p className="question-desc" style={{ color: '#94a3b8', marginBottom: '10px' }}>
                        Niet alles is logisch om in een vaste maandprijs op te nemen. Logische grenzen aan onze toverkracht:
                    </p>
                    <ul style={{ color: '#f8fafc', lineHeight: '1.8', marginLeft: '20px', marginBottom: '15px' }}>
                        <li>Werkt de privé Nintendo niet goed, of gooit een medewerker na de de VrijMiBo koffie over de laptop en moeten we data redden? Dit is eigen toedoen/risico (herstel is billable).</li>
                        <li>Herstel na grote onafwendbare calamiteiten (brand, diefstal, of grove nalatigheid gebruiker ten aanzien van onze policies).</li>
                        <li>Grote vernieuwingsprojecten, zoals netwerkvervanging of een migratie naar een geheel nieuw systeem. Superslim, maar dit kost uren en aparte projectaandacht.</li>
                    </ul>
                    <p className="question-desc" style={{ color: '#fcd34d', backgroundColor: 'rgba(252, 211, 77, 0.1)', padding: '15px', borderRadius: '8px' }}>
                        Dit soort project/herstel-werkzaamheden doen we uiteraard wel, maar <strong>altijd apart, vooraf afgestemd en geoffreerd</strong>. Daarmee krijgen jullie overigens een korting van 10% t.o.v. ons reguliere ad-hoc uurtarief.
                    </p>
                </div>
                
                <div className="form-group">
                    <h3 style={{ color: '#3b82f6', marginBottom: '15px' }}>De 'Fair Use' Policy</h3>
                    <p className="question-desc" style={{ color: '#f8fafc', marginBottom: '10px' }}>
                        Wij tellen geen tickets. Of je collega nu 3x of 7x per maand een legitieme IT-vraag heeft, all-in is all-in. Maar als een specifieke medewerker wekelijks onzeker is "hoe hij Excel moet openen", plannen we liever in overleg een basis (betaalde) training dan dat wij dagelijks eindeloze cursu-support moeten verlenen. In de basis verwachten we dat iedereen regulier om kan gaan met computers.
                    </p>
                </div>
            </div>

            <div className="section-card">
                <h2 className="section-title">3. SLAs (Prioriteiten van Support)</h2>
                <p className="section-desc">Net als bij de dokter hebben we een triagesysteem. Bij een schaafwond word je geholpen, maar een hartstilstand gaat natuurlijk altijd voor.</p>

                <div className="priority-grid">
                    <div className="form-group" style={{ marginBottom: '15px', padding: '15px', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', borderRadius: '8px' }}>
                        <h3 style={{ color: '#ef4444', marginBottom: '5px', fontSize: '1.1rem' }}>P1 - Kritiek (Binnen 1 uur)</h3>
                        <p className="question-desc" style={{ color: '#f8fafc', margin: 0 }}>
                            <strong>Omschrijving:</strong> Echt een noodsituatie. Het netwerk, internet of hoofdsysteem stopt voor het héle bedrijf. Iedereen ligt stil.
                        </p>
                    </div>

                    <div className="form-group" style={{ marginBottom: '15px', padding: '15px', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderLeft: '4px solid #f97316', borderRadius: '8px' }}>
                        <h3 style={{ color: '#f97316', marginBottom: '5px', fontSize: '1.1rem' }}>P2 - Hoog (Binnen 4 uur, op locatie indien nodig)</h3>
                        <p className="question-desc" style={{ color: '#f8fafc', margin: 0 }}>
                            <strong>Omschrijving:</strong> Een specifieke afdeling, meeting room of kritisch individu ligt stil en kan niet werken.
                        </p>
                    </div>

                    <div className="form-group" style={{ padding: '15px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', borderRadius: '8px' }}>
                        <h3 style={{ color: '#3b82f6', marginBottom: '5px', fontSize: '1.1rem' }}>P3/P4 - Normaal (Binnen 8 uur reactie)</h3>
                        <p className="question-desc" style={{ color: '#f8fafc', margin: 0 }}>
                            <strong>Omschrijving:</strong> Dingen die handig zijn, maar geen brandmelding. "Nieuwe draadloze muis nodig", of "Hoe stel ik afwezigheid in?".
                        </p>
                    </div>
                </div>
            </div>

            <div className="section-card">
                <h2 className="section-title">4. Nieuwe Collega's & Hardware (Zero-Touch)</h2>
                <p className="section-desc">Snelle levering en een magische eerste werkdag.</p>

                <div className="form-group" style={{ marginBottom: '25px' }}>
                    <h3 style={{ color: '#fcd34d', marginBottom: '10px' }}>Het Onboarding Proces</h3>
                    <p className="question-desc" style={{ color: '#f8fafc', fontSize: '1rem', marginTop: '6px' }}>
                        Wij ontvangen de onboarding request graag <strong>minimaal 5 werkdagen</strong> van tevoren in ons ticketsysteem. Dit geeft ons de tijd om accounts aan te maken, rechten te knopen en hardware gereed te maken. Minder dan 5 dagen? Dan kunnen we niet garanderen dat het op tijd perfect staat, of we moeten een spoed-opslag berekenen.
                    </p>
                </div>

                <div className="form-group" style={{ marginBottom: '25px' }}>
                    <h3 style={{ color: '#fcd34d', marginBottom: '10px' }}>Flexibele & Eerlijke Hardware</h3>
                    <p className="question-desc" style={{ color: '#f8fafc', fontSize: '1rem', marginTop: '6px' }}>
                        Hardware kán via ons aangeschaft worden (Zero-Touch ingericht), maar is geen verplichting. Bestel je via Workflo, dan geldt: wij hanteren <strong>exact dezelfde prijzen</strong> als de originele fabrikant (bijv. apple.nl) zonder verborgen marges. Daarnaast verzorgen wij dan de volledige garantie-afhandelingen binnen de vaste fee.
                    </p>
                </div>
                
                <div className="form-group">
                    <h3 style={{ color: '#fcd34d', marginBottom: '10px' }}>Zelf Hardware Besteld? Geen probleem</h3>
                    <p className="question-desc" style={{ color: '#f8fafc', fontSize: '1rem', marginTop: '6px' }}>
                        Bestellen jullie toch liever zelf hardware bij een externe prijsvechter? Geen probleem! Houd er wel rekening mee dat wij dan <strong>uurwerk</strong> (ca. 0,5u per device) moeten doorberekenen om deze apparatuur handmatig te koppelen (Enrolment) aan ons veilige beheer, omdat dit niet Zero-Touch vanuit de fabriek gaat.
                    </p>
                </div>
            </div>

            <div className="section-card">
                <h2 className="section-title">5. Verwachtingen & Beleid Gevarenzones</h2>
                <p className="section-desc">Wij fixen de IT, jullie blijven beslissingsbevoegd.</p>

                <div className="form-group" style={{ marginBottom: '25px' }}>
                    <h3 style={{ color: '#fcd34d', marginBottom: '10px' }}>De 'Lokale Administrator' gevarenzone</h3>
                    <p className="question-desc" style={{ color: '#f8fafc', fontSize: '1rem', marginTop: '6px' }}>
                        Wij raden altijd aan: <em>Medewerkers mogen niet zomaar zelf alles installeren</em>. Doen ze dit wel, dan is er kans op (verborgen) malware of chaos. Willen jullie medewerkers de installatie-rechten (Local Admin) wél behouden om lokaal flexibel te zijn? Dat mag! Echter vallen herstel-uren voor zelf veroorzaakte systeemschade of ransomware die daaruit voortvloeit buiten de reguliere fee (billable).
                    </p>
                </div>

                <div className="form-group" style={{ marginBottom: '25px' }}>
                    <h3 style={{ color: '#fcd34d', marginBottom: '10px' }}>Op Tijd Doorgeven (Offboarding)</h3>
                    <p className="question-desc" style={{ color: '#f8fafc', fontSize: '1rem', marginTop: '6px' }}>
                        Gaat er iemand uit dienst? Laat het tijdig weten in ons portaal! Licenties stoppen niet automatisch na een laatste werkdag. Zijn we hier niet van op de hoogte, dan lopen deze kosten onnodig door en valt die specifieke administratieve overhead buiten de Workflo verantwoordelijkheid.
                    </p>
                </div>

                <div className="form-group">
                    <h3 style={{ color: '#fcd34d', marginBottom: '10px' }}>Veiligheid Eerst: Backup & MFA</h3>
                    <p className="question-desc" style={{ color: '#f8fafc', fontSize: '1rem', marginTop: '6px' }}>
                        Wij eisen het gebruik van MFA (twee-staps verificatie) en pleiten altijd sterk voor structurele Cloud Backups. Weigeren jullie (bijv. wegens workflow-weerstand of budget) structureel en aantoonbaar om dit te handhaven, dan is onze support nog evengoed geweldig, maar accepteert de organisatie formeel zelf het calamiteiten-risico richting aansprakelijkheidsverzekeraars.
                    </p>
                </div>
            </div>
            
            <div className="section-card">
                <h2 className="section-title">6. Communicatie & Overeenkomst</h2>
                
                <div className="form-group" style={{ marginBottom: '25px' }}>
                    <ul style={{ color: '#f8fafc', lineHeight: '1.8', marginLeft: '20px' }}>
                        <li><strong>Medewerkers Contact:</strong> Direct contact met onze support via de online Support Portal voor minimale downtime.</li>
                        <li><strong>Eén IT Hero:</strong> Bij jullie benoemen we één contactpersoon (IT Hero) met wie we de structurele uren en tickets (kosten) bespreken en goedkeuren. Geen rare rekeningen.</li>
                        <li><strong>Maandelijkse Rapportage:</strong> Ontvang direct inzage in wat we allemaal op de achtergrond voor jullie gedraaid hebben.</li>
                    </ul>
                </div>
                
                <div className="form-group" style={{ padding: '20px', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderLeft: '4px solid #10b981', borderRadius: '8px' }}>
                    <h3 style={{ color: '#10b981', marginBottom: '10px' }}>Duur van de Overeenkomst (Try & Commit)</h3>
                    <p className="question-desc" style={{ color: '#f8fafc', margin: 0 }}>
                        We gaan in de basis een overeenkomst aan voor <strong>12 maanden</strong>. Omdat we rotsvast in dit model geloven, plannen we over de eerste cyclus heen altijd <strong>na 6 maanden een evaluatie</strong>. We kijken dan eerlijk naar elkaar: zijn jullie tevreden? Mochten we niet bij elkaar passen, is er dan al een mogelijkheid tot ontbinding.
                    </p>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button className="submit-btn" onClick={onNavigateHome}>
                    Helder, alles samen genomen. Verder met het Intake Formulier
                </button>
            </div>
        </div>
    )
}

export default SlaPage
