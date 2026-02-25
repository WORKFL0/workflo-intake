import React, { useMemo } from 'react'
import jsPDF from 'jspdf'

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

        // Security - Local Admin
        if (formData['q_admin1']?.includes('Geen Local Admin')) {
            good.push("Veilig Apparaatbeheer: Gebruikers hebben geen admin rechten, perfect voor security.");
        } else if (formData['q_admin1']) {
            currentScore -= 15;
            attention.push("Local Admin Rechten: Dit geeft gebruikers veel vrijheid, maar aanzienlijk meer risico op malware en herstelkosten buiten de vaste fee.");
        } else {
            currentScore -= 15;
            attention.push("Ongedefinieerd (Local Admin): Er is niet gekozen wie rechten krijgt om applicaties te installeren. Risico op ongecontroleerde schaduw-IT.");
        }

        // Security - MFA
        if (formData['q25']?.includes('100% mee eens')) {
            good.push("Identiteit & Toegang: MFA is verplicht gesteld voor iedereen.");
        } else {
            currentScore -= 15;
            attention.push("Ongedefinieerd (MFA): Geen keuze gemaakt over MFA (Tweestapsverificatie). Dit is momenteel de #1 oorzaak van gehackte Microsoft 365 accounts.");
        }

        // Backup
        if (formData['q37']?.includes('Cloud Backup is vitaal')) {
            good.push("Data Veiligheid: Cloud Backup is direct gekozen voor zekerheid en ransomware bescherming.");
        } else if (formData['q37']) {
            currentScore -= 20;
            attention.push("Data Veiligheid (Kritiek): Er is gekozen om géén Cloud Backup te nemen. Enkel de 30-dagen prullenbak is aanwezig.");
        } else {
            currentScore -= 20;
            attention.push("Ongedefinieerd (Cloud Backup): Geen beleid gekozen over Cloud Data bescherming. Zonder actieve backup lopen jullie ernstig risico bij ransomware.");
        }

        // Hardware / Purchasing
        if (formData['q9']?.includes('alles via Workflo te bestellen')) {
            good.push("Standaardisatie Hardware: Apparaten worden direct beheerd geleverd (Zero Touch) zonder extra configuratie-uren.");
        } else if (formData['q9']?.includes('We accepteren de extra handelingstijd')) {
            currentScore -= 5;
            attention.push("Eigen Hardware Aanschaf: Houd rekening met een billable opslag (0,5u) voor het handmatig in beheer nemen van externe apparaten.");
        } else {
            currentScore -= 5;
            attention.push("Ongedefinieerd (Aanschaf & Zero Touch): Er is niet nagedacht over het aanleveringsproces van bedrijfs-apparatuur.");
        }

        // Hardware Lifecycle
        if (formData['q11']?.includes('3 jaar') || formData['q11']?.includes('4 jaar')) {
            good.push("Hardware Lifecycle: Er is een duidelijke hardware afschrijving gekozen (3 tot 4 jaar).");
        } else if (formData['q11']) {
            currentScore -= 10;
            attention.push("Hardware Lifecycle: Apparaten pas vervangen bij defecten verhoogt risico op acute downtime. Dit valt buiten scope na 'End-of-Life'.");
        } else {
            currentScore -= 10;
            attention.push("Ongedefinieerd (Apparaat Levensduur): Oude apparaten brengen veiligheidsrisico's en trage prestaties mee. Geen policy over vastgesteld.");
        }

        // On/Offboarding
        if (!formData['q1'] || formData['q1'].trim() === '') {
            currentScore -= 5;
            attention.push("Ongedefinieerd (Offboarding): Er is geen persoon aangewezen die doorgifte doet van vertrekkende collega's (risico op doorlopende weeskosten).");
        } else {
            good.push("On/Offboarding: Er is een vast aanspreekpunt voor licentie-afmeldingen.");
        }

        if (!formData['q6']) {
            currentScore -= 5;
            attention.push("Ongedefinieerd (Minimale Opzegtermijn Onboarding): Geen aanlevertermijn voor introducties vastgesteld. Kan leiden tot falende leveringen op de eerste werkdag.");
        } else if (formData['q6']?.includes('5 werkdagen') || formData['q6']?.includes('10 werkdagen')) {
            good.push(`Onboarding Timing: ${formData['q6']}. Geweldig voor soepele hardware/software voorbereiding!`);
        } else {
            // Spoed
            attention.push("Spoed Onboardings: Jullie verwachten frequente snelle opstart. Hou hiermee rekening op onvoorziene knelpunten en extra opslagen.");
        }

        if (formData['q39']?.includes('alles onder één warm dak')) {
            good.push("Kantoor Netwerk: Beheer van lokale netwerk-hardware is toevertrouwd aan Workflo voor end-to-end zichtbaarheid.");
        }

        // Cap score between 0 and 100
        const finalScore = Math.max(0, Math.min(100, currentScore));

        return { score: finalScore, goodPoints: good, attentionPoints: attention };
    }, [formData]);

    const handleDownload = () => {
        let text = `Workflo Intake Formulier Resultaten\nKlant: ${clientName}\nScore: ${score}/100\n\n=== Antwoorden ===\n`;
        Object.entries(formData).forEach(([key, value]) => {
            text += `Vraag (${key}):\n${Array.isArray(value) ? value.join(', ') : value}\n\n`;
        });

        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Workflo_Intake_${clientName.replace(/\s+/g, '_')}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF()
        doc.setFont("helvetica")

        // Define margins and line heights
        const margin = 20;
        const pageHeight = 280;
        let yPos = margin;

        const addLine = (text: string, fontSize = 10, isBold = false) => {
            doc.setFontSize(fontSize);
            doc.setFont("helvetica", isBold ? "bold" : "normal");
            const splitLines = doc.splitTextToSize(text, 170);

            if (yPos + (splitLines.length * (fontSize * 0.5)) > pageHeight) {
                doc.addPage();
                yPos = margin;
            }

            doc.text(splitLines, margin, yPos);
            yPos += (splitLines.length * (fontSize * 0.5)) + 4;
            doc.setFont("helvetica", "normal"); // reset
        };

        // Header
        addLine("WORKFLO IT - SERVICE OVEREENKOMST", 20, true);
        yPos += 5;
        addLine(`Opgesteld voor: ${clientName}`, 12, true);
        addLine(`Datum: ${new Date().toLocaleDateString('nl-NL')}`, 10);
        addLine(`Workflo IT Alignment Score: ${score}/100`, 10, true);
        yPos += 5;
        doc.line(margin, yPos, 190, yPos);
        yPos += 10;

        addLine("1. Inleiding", 14, true);
        addLine("Deze bijlage specificeert de geselecteerde IT-policies en werkafspraken zoals vastgelegd in de intake. De keuzes die hierin zijn gemaakt hebben directe invloed op de vaste beheer-fee (Fixed Fee) vs. werkzaamheden die buiten scope / nacalculatie vallen.");
        yPos += 5;

        addLine("2. Vastgelegde Policies en Voorwaarden", 14, true);

        // Local Admin
        addLine("Werkplekbeheer (Lokale Admin Rechten)", 11, true);
        if (formData['q_admin1']?.includes('Geen Local Admin')) {
            addLine("AFSPRAAK: Gebruikers hebben standaard GEEN lokale beheerdersrechten. Dit is de aanbevolen veilige standaard.");
            addLine("GEVOLG: De werkplek is gemanaged via Workflo. Storingen door ongeautoriseerde software-installaties zijn hiermee gemitigeerd en vallen binnen de standaard support voorwaarden.");
        } else {
            addLine("AFSPRAAK: Gebruikers of een selecte groep krijgen wél Lokale Beheerdersrechten (Local Admin).");
            addLine("GEVOLG/RISICO: Dit brengt aanzienlijke risico's met zich mee omtrent schaduw-IT, malware en virussen. Herstelwerkzaamheden of herinstallaties van apparaten of data als direct gevolg van het foutief gebruik hiervan, vallen UITDRUKKELIJK BUITEN DE SCOPE van de Fixed Fee en worden obv nacalculatie hersteld.");
        }
        yPos += 5;

        // MFA
        addLine("Identiteit & Toegangsbeveiliging (MFA)", 11, true);
        if (formData['q25']?.includes('100% mee eens')) {
            addLine("AFSPRAAK: Multi-Factor Authenticatie (MFA) is verplicht voor 100% van de gebruikers.");
            addLine("GEVOLG: Uitstekende beveiliging. Supportvragen rondom inloggen worden gedekt.");
        } else {
            addLine("AFSPRAAK: MFA is niet voor alle gebruikers geforceerd.");
            addLine("GEVOLG/RISICO: Gecompromitteerde (gehackte) accounts en de bijbehorende uren om e-mail/data te herstellen of veilig te stellen vallen BUITEN SCOPE. Workflo kan niet aansprakelijk gesteld worden voor dataverlies veroorzaakt door het ontbreken van MFA.");
        }
        yPos += 5;

        // Backup
        addLine("Data Bescherming (Cloud Backup)", 11, true);
        if (formData['q37']?.includes('Cloud Backup is vitaal')) {
            addLine("AFSPRAAK: Actieve Third-Party Cloud Backup (exclusief Prullenbak) wordt ingeregeld.");
            addLine("GEVOLG: Data is veiliggesteld tegen Ransomware en kan (in overleg) voor langere termijn hersteld worden. Restore verzoeken vallen binnen standaard dienstverlening.");
        } else {
            addLine("AFSPRAAK: ER IS GEEN GEAUTOMATISEERDE CLOUD BACKUP AFGESPROKEN. Klant vertrouwt enkel op de 30-dagen policy van Microsoft/Google.");
            addLine("GEVOLG/RISICO (KRITIEK): Workflo kan per ongeluk of opzettelijk verwijderde data ouder dan 30 dagen NOOIT herstellen. Ook bij Ransomware is de kans op definitief dataverlies 100%. Klant accepteert dit verhoogde risico.");
        }
        yPos += 5;

        // Hardware Aanschaf
        addLine("Hardware Levering & Installatie", 11, true);
        if (formData['q9']?.includes('alles via Workflo te bestellen')) {
            addLine("AFSPRAAK: Alle IT-Apparatuur wordt via Workflo aangeschaft.");
            addLine("GEVOLG: Toestellen worden Zero-Touch direct gebruiksklaar afgeleverd bij medewerkers. Geen additionele setup-kosten.");
        } else {
            addLine("AFSPRAAK: Klant behoudt de wens om zelf elders consumenten-hardware aan te schaffen.");
            addLine("GEVOLG/RISICO: Voor elk extern aangeschaft apparaat wat alsnog gemanaged of beveiligd moet worden in de bedrijfsinfrastructuur, rekent Workflo een standaard setup/handelingstoeslag per apparaat.");
        }
        yPos += 5;

        // Hardware Lifecycle
        addLine("Hardware Lifecycle (Vervanging)", 11, true);
        if (formData['q11']?.includes('3 jaar') || formData['q11']?.includes('4 jaar')) {
            addLine(`AFSPRAAK: Apparatuur wordt structureel vervangen met een cyclus van ${formData['q11']}.`);
            addLine("GEVOLG: Gegarandeerd productieve medewerkers. Support is dekkend en efficiënt.");
        } else {
            addLine("AFSPRAAK: Apparatuur wordt 'fix-on-fail' pas vervangen wanneer het defect is, ongeacht leeftijd.");
            addLine("GEVOLG/RISICO: Trage prestaties en niet-repareerbare apparaten. Complexe troubleshoot-werkzaamheden op verouderde apparaten (in de regel ouder dan 4/5 jaar) kunnen door Workflo belast worden als Buiten Scope.");
        }
        yPos += 5;

        // Onboarding
        addLine("3. Aanmelding Medewerkers & Onboarding", 14, true);
        addLine(`Minimale aanlevertermijn voor introducties / HR doorvoer: ${formData['q6'] || 'Geen vaste afspraak gemaakt'}.`);
        addLine("Spoedopdrachten ('We hebben morgen een nieuwe collega') zijn onderhevig aan beschikbaarheid van hardware en planning. Garanties op tijdige uitlevering vervallen indien de minimale termijn niet wordt gerespecteerd.");
        yPos += 15;

        // Signatures
        if (yPos + 40 > 280) {
            doc.addPage()
            yPos = 20
        }

        doc.line(20, yPos, 80, yPos)
        doc.line(110, yPos, 170, yPos)
        doc.text("Handtekening Workflo", 20, yPos + 6)
        doc.text(`Handtekening ${clientName}`, 110, yPos + 6)

        doc.save(`Workflo_Overeenkomst_${clientName.replace(/\s+/g, '_')}.pdf`)
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
