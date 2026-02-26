export type QuestionType = 'text' | 'textarea' | 'radio' | 'checkbox';

export interface Question {
    id: string;
    label: string;
    desc: string;
    type: QuestionType;
    options?: string[];
}

export interface Section {
    title: string;
    description?: string;
    questions: Question[];
}

export const defaultFormData: Record<string, any> = {
    q_onb1: [
        "Volledige naam (Zoals gebruikt in HR en communicatie)",
        "Telefoonnummer (Cruciaal voor support en instellen van MFA)",
        "Gewenste zakelijke email (bijv. voornaam.achternaam@bedrijf.nl)",
        "Startdatum (en verwachte uitdiensttreding indien bekend)",
        "Rol informatie (Functie / Afdeling / Directe Manager)"
    ],
    q2: "Data overdragen aan de manager (rechten delegeren) en 30 dagen bewaren",
    q5: "Ja, we begrijpen dit proces en werken eraan mee.",
    q6: "Minimaal 5 werkdagen van tevoren (standaard)",
    q9: "We besluiten om alles via Workflo te bestellen voor het gemak.",
    q11: "We schrijven af op 4 jaar",
    q13: "We willen een vast pakket aan software door jullie laten certificeren (graag overleggen over een maatwerk fee).",
    q14: "Microsoft 365 omgeving (via Workflo licenties)",
    q15: "Tot €50 is direct akkoord om de medewerker snel te helpen.",
    q16: "De grens is duidelijk; persoonlijke zaken vallen buiten het vaste contact.",
    q17: "We hebben de responstijden gelezen en zijn er mee akkoord.",
    q18: "Ja, iedereen wordt de juiste route gewezen (Ticketsysteem/Support Portal).",
    q20: "Alleen op uurbasis als het probleem niet remote op te lossen is.",
    q21: "Reguliere kantoortijden zijn meer dan voldoende.",
    q_admin1: "Geen Local Admin voor gebruikers. (Workflo beheert applicaties veilig op afstand).",
    q25: "100% mee eens, MFA voor iedereen ongeacht wrijving.",
    q31: "We willen een strikte lockdown. Alleen zakelijke data mag erop (streng policy management nodig).",
    q34: "Volledig of overwegend Cloud (Microsoft/Google Workspace).",
    q37: "Ja. Actieve, externe backup van onze data is vitaal en we nemen dit standaard bij jullie af.",
    q39: "Ja, heel graag alles onder één warm dak.",
    q42: "Ja, wij gebruiken slimme moderne oplossingen (zoals Egnyte, LycidLink of ZTNA) voor naadloze remote toegang.",
    q43: "Ja graag, en we betalen jullie met alle liefde de uren voor die ontzorging.",
    q49: "Absoluut. We horen graag hoe jullie en wij presteren.",
    q51: "Akkoord. Regulier support en storingen vallen binnen de fee. Excessieve structurele wijzigingen of training wordt in overleg na goedkeuring apart behandeld.",
    q52: "Helder en volledig begrepen. Bewuste beslissingen om een risico (risk accept) te behouden, leidt tot uitsluiting van verantwoordelijkheid bij Workflo."
};

export const formSections: Section[] = [
    {
        title: "1. On/Offboarding (Nieuwe & Vertrekkende Collega's)",
        description: "Een goed begin (en einde) van een werkverband is cruciaal. Laten we bespreken hoe we dit soepel voor jullie gaan organiseren.",
        questions: [
            {
                id: "q_onb1",
                label: "Standaard Gegevens Aanlevering (Onboarding)",
                desc: "Kruis de velden aan die wij standaard van jullie verwachten bij het aanmelden van een nieuwe medewerker. Zonder deze velden kunnen wij het account niet optimaal voorbereiden:",
                type: "checkbox",
                options: [
                    "Volledige naam (Zoals gebruikt in HR en communicatie)",
                    "Telefoonnummer (Cruciaal voor support en instellen van MFA)",
                    "Gewenste zakelijke email (bijv. voornaam.achternaam@bedrijf.nl)",
                    "Privé e-mail (Optioneel, maar o zo handig voor initiële instructies en wachtwoordherstel)",
                    "Startdatum (en verwachte uitdiensttreding indien bekend)",
                    "Rol informatie (Functie / Afdeling / Directe Manager)",
                    "Rechten (Toegang tot welke specifieke mappen, bestanden of applicaties)",
                    "Distributielijsten (Aan welke e-mailgroepen, zoals info@ of sales@, moet de collega worden toegevoegd?)",
                    "Contractvorm (Payroll, Werkzaam via Freelance, of Stagiair)"
                ]
            },
            {
                id: "q1",
                label: "Wie geeft aan ons door als een gewaardeerde collega uit dienst gaat?",
                desc: "Licenties lopen door totdat deze worden stopgezet. Om onnodige kosten te voorkomen, hebben we een vast aanspreekpunt nodig. Dit wordt ook jullie verantwoordelijkheid in het beleid.",
                type: "text"
            },
            {
                id: "q2",
                label: "Wat is jullie beleid voor het behoud van data (mailbox en OneDrive/Google Drive) na offboarding?",
                desc: "Laten we hier een vaste 'Data Retentie Policy' voor afspreken. Wat past het beste bij jullie organisatie?",
                type: "radio",
                options: [
                    "Direct verwijderen (na backup check)",
                    "30 dagen bewaren ten behoeve van overdracht, daarna verwijderen",
                    "Data overdragen aan de manager (rechten delegeren) en 30 dagen bewaren",
                    "Anders: we willen hier graag samen een policy over uitzetten."
                ]
            },
            {
                id: "q3",
                label: "Hoe gaan we om met wachtwoorden bij vertrek? (Gedeelde accounts, alarmsysteem, Wi-Fi)",
                desc: "Wie zorgt ervoor dat gedeelde wachtwoorden intern of extern worden aangepast zodra iemand vertrekt?",
                type: "text"
            },
            {
                id: "q4",
                label: "Wie zorgt dat de apparatuur (bijv. de Mac) retour komt?",
                desc: "Dit kan lastig zijn bij thuiswerkers of bij ziekte. Wie neemt hierover de regie?",
                type: "text"
            },
            {
                id: "q5",
                label: "Apparaten wissen (MDM unenrollment Policy)",
                desc: "Om bedrijfsdata te beschermen, wissen wij de laptop. Weten jullie dat we hiervoor een expliciet besluit/ticket per keer nodig hebben vanuit jullie management?",
                type: "radio",
                options: [
                    "Ja, we begrijpen dit proces en werken eraan mee.",
                    "We willen dit liever geautomatiseerd zien zodra een account wordt geblokkeerd (graag overleggen)."
                ]
            },
            {
                id: "q6",
                label: "Wat wordt de Minimale Opzegtermijn voor het inregelen van nieuwe medewerkers?",
                desc: "Onze onboarding policy: voor de beste ervaring hebben we even de tijd nodig. Dit spreken we graag van tevoren met je af.",
                type: "radio",
                options: [
                    "Minimaal 5 werkdagen van tevoren (standaard)",
                    "Minimaal 10 werkdagen van tevoren",
                    "We hebben af en toe een 'spoed' onboarding nodig, kunnen we daar afspraken over maken?"
                ]
            },
            {
                id: "q7",
                label: "Hoe gaan we om met externe krachten (ZZP'ers, stagiaires of tijdelijke krachten)?",
                desc: "Krijgen zij standaard toegang of beperkte accounts? We willen hierin een duidelijke richtlijn vaststellen.",
                type: "textarea"
            },
            {
                id: "q8",
                label: "Naamgeving Policy: Hoe structureren we e-mailadressen (Microsoft 365 / Google Workspace)?",
                desc: "Standaard is duidelijk! Bijv: voornaam@bedrijf.nl of voornaam.achternaam@bedrijf.nl? Wie mag hierin uitzonderingen goedkeuren?",
                type: "text"
            }
        ]
    },
    {
        title: "2. Purchasing (Hardware & Software Inrichting)",
        description: "Snel en veilig de juiste middelen in de handen van de medewerkers. Zo bouwen we dat op.",
        questions: [
            {
                id: "q9",
                label: "Beleid rondom Eigen Aanschaf Hardware (Niet via Workflo / Zero Touch)",
                desc: "Apparaten die niet via ons zijn besteld, missen een directe koppeling voor automatisch beheer (Apple Business Manager). Er geldt hiervoor een opslag (0,5u) om ze handmatig te koppelen.",
                type: "radio",
                options: [
                    "Begrepen. We accepteren de extra handelingstijd als we het zelf aanschaffen.",
                    "We besluiten om alles via Workflo te bestellen voor het gemak."
                ]
            },
            {
                id: "q11",
                label: "Wanneer is een apparaat 'End-of-life' in jullie Lifecycle Policy?",
                desc: "Na X jaar, of als de fabrikant geen updates meer geeft, adviseren wij vervanging. Na zo'n moment kunnen we stabiliteit niet meer garanderen en valt extra support buiten de basisdienst.",
                type: "radio",
                options: [
                    "We schrijven af op 4 jaar",
                    "We schrijven af op 5 jaar of langer",
                    "We gebruiken apparatuur totdat de hardware of de software End-of-Life (onveilig) is (ca. 6 jaar)"
                ]
            },
            {
                id: "q13",
                label: "Software Policy: Licenties buiten onze standaard scope",
                desc: "We ondersteunen ons aanbevolen pakket. Gebruiken jullie teamleden veel eigen specifieke software (bijv. Adobe, specifieke tekenprogramma's)?",
                type: "radio",
                options: [
                    "Ja, we accepteren dat gerelateerde hulpvragen hierover apart worden berekend (billable).",
                    "We willen een vast pakket aan software door jullie laten certificeren (graag overleggen over een maatwerk fee)."
                ]
            },
            {
                id: "q14",
                label: "Platform Voorkeur (Microsoft 365 of Google Workspace)?",
                desc: "Wij kunnen de centrale workspace beheren via één van deze systemen. Hoe zien jullie dit voor je?",
                type: "radio",
                options: [
                    "Microsoft 365 omgeving (via Workflo licenties)",
                    "Google Workspace omgeving (via Workflo licenties)",
                    "We hebben zelf licenties bij de leverancier, we laten dit zo, maar begrijpen dat beheer trager kan zijn."
                ]
            },
            {
                id: "q15",
                label: "Stroomlijnen van aankoopgoedkeuring: Wat wordt het vrij besteedbaar bedrag?",
                desc: "Tot welk bedrag mogen we zonder expliciete aanvraag bestellen (bijv. een extra oplader, verloopstukje)? Zo loopt niemand vast.",
                type: "radio",
                options: [
                    "Tot €50 is direct akkoord om de medewerker snel te helpen.",
                    "Tot €100 is akkoord.",
                    "We willen elke euro altijd zelf controleren vóór aanschaf."
                ]
            }
        ]
    },
    {
        title: "3. Service & Support (Hulp als het nodig is)",
        description: "Een warm vangnet. Hoe en wanneer staan we voor jullie klaar?",
        questions: [
            {
                id: "q16",
                label: "De grens tussen werk en privé (Scope van fixed fee)",
                desc: "Support voor persoonlijke randapparaten of thuis-printers vallen veelal lokaal. Hebben jullie behoefte om dit toch af te dekken, of is de grens duidelijk?",
                type: "radio",
                options: [
                    "De grens is duidelijk; persoonlijke zaken vallen buiten het vaste contact.",
                    "Wij willen wel degelijk premium home-office support inbegrepen hebben (vraag naar de opslag)."
                ]
            },
            {
                id: "q17",
                label: "Prioriteiten (SLA's) Policy",
                desc: "Onze SLA (Service Level Agreement) dekt urgente (P1) zaken veel sneller af dan 'wensen' (P3). Zie {{SLA}} voor de exacte uitleg van onze prioriteiten. Zullen we dit nog samen doornemen voordat het contract in gaat?",
                type: "radio",
                options: [
                    "We hebben de responstijden gelezen en zijn er mee akkoord.",
                    "We plannen hier nog graag een aparte belafspraak over in."
                ]
            },
            {
                id: "q18",
                label: "Hoe kan het team ons bereiken?",
                desc: "Wij bundelen alles centraal via ons ticket systeem. Dat houdt het snel en traceerbaar. Geen WhatsAppjes voor de overzichtelijkheid. Zullen we dit zo als beleid aan jullie team communiceren?",
                type: "radio",
                options: [
                    "Ja, iedereen wordt de juiste route gewezen (Ticketsysteem/Support Portal).",
                    "Grotendeels, we hebben behoefte aan een 'noodnummer' voor directiebellen."
                ]
            },
            {
                id: "q20",
                label: "Remote vs. On-site Policy",
                desc: "Wij lossen 95% remote op. Hebben jullie voorkeur voor een afgesproken moment waarop we wel periodiek on-site werken voor een betere band (berekend of in fee)?",
                type: "radio",
                options: [
                    "Alleen op uurbasis als het probleem niet remote op te lossen is.",
                    "Graag maken we een afspraak voor een vast on-site moment (1x per maand bijvoorbeeld)."
                ]
            },
            {
                id: "q21",
                label: "Ondersteuning buiten kantoortijden",
                desc: "Werk stopt niet altijd om 17:00. Wat voor service verlangen jullie in de avonden en het weekend?",
                type: "radio",
                options: [
                    "Reguliere kantoortijden zijn meer dan voldoende.",
                    "We hebben een bereikbaarheidsdienst nodig met vaste afspraken (24/7 of avond SLA)."
                ]
            }
        ]
    },
    {
        title: "4. Security & Compliance",
        description: "Gegevens bewaken alsof ze van ons zijn. Wat spreken we met elkaar af?",
        questions: [
            {
                id: "q_admin1",
                label: "Lokale Administrator Rechten (Mogen gebruikers zelf installeren?)",
                desc: "Als gebruikers Local Admin zijn, kunnen ze naar wens software installeren. Echter kunnen zij zo (onbewust) malware binnenhalen of hun computer om zeep helpen. Herstelwerkzaamheden door dit soort wijzigingen vallen niet binnen de vaste fee (zie hiervoor ook {{SLA}}). Waar gaat jullie voorkeur naar uit?",
                type: "radio",
                options: [
                    "Geen Local Admin voor gebruikers. (Workflo beheert applicaties veilig op afstand).",
                    "We verlenen Local Admin rechten en accepteren dat bijkomende herstel-uren daaruit apart berekend worden.",
                    "We maken een kleine selectie van 'power-users' die deze rechten in overleg wél mogen (risico lokaal)."
                ]
            },
            {
                id: "q24",
                label: "Acceptable Use Policy (Gedragsregels)",
                desc: "Hebben jullie een set aan regels (AUP) waarin medewerkers is uitgelegd wat er mag op de bedrijfslaptops?",
                type: "radio",
                options: [
                    "Ja, die hebben we al in ons werknemershandboek.",
                    "Nee, maar we zouden graag willen dat jullie ons helpen die op te stellen.",
                    "Zien we voor nu als niet essentieel."
                ]
            },
            {
                id: "q25",
                label: "Authenticatie in twee stappen (MFA) Policy",
                desc: "Samen veilig. MFA is bij ons verplicht. Bij expliciete (schriftelijke) weigering, ligt het volledige risico lokaal bij de directie. We hopen op jullie steun hierin.",
                type: "radio",
                options: [
                    "100% mee eens, MFA voor iedereen ongeacht wrijving."
                ]
            },
            {
                id: "q28",
                label: "Privacy & AVG/GDPR: Wie tekent de verwerkersovereenkomst?",
                desc: "We sluiten een verwerkersovereenkomst. Wie van de directie is hiertoe bevoegd?",
                type: "text"
            },
            {
                id: "q29",
                label: "Valt jullie bedrijf of sector onder de NIS2 wetgeving?",
                desc: "Afhankelijk van risico en omzet, moeten we wellicht veel stevigere maatregelen treffen en documentatie aanhouden.",
                type: "radio",
                options: [
                    "Ja, ons is verteld dat dit voor ons in werking (is) gaat.",
                    "Nee",
                    "Hier hebben we nog niet naar gekeken, graag in gesprek hierover."
                ]
            },
            {
                id: "q31",
                label: "Mag een medewerker op zijn zakelijke device privé-dingen doen?",
                desc: "De 'BYOD' of de 'Privé op werk-laptop' policy. Als een systeem gestolen wordt (of om een andere reden gewist wordt), gaan ook eventueel opgeslagen privéfoto's verloren.",
                type: "radio",
                options: [
                    "Dit staan we oogluikend toe, verlies van data is risico werknemer.",
                    "We willen een strikte lockdown. Alleen zakelijke data mag erop (streng policy management nodig)."
                ]
            }
        ]
    },
    {
        title: "5. Data Opslag, Backup & Continuïteit",
        description: "Een goed vangnet is onzichtbaar tot je het echt, maar dan ook echt nodig hebt.",
        questions: [
            {
                id: "q34",
                label: "Waar staat jullie data opgeslagen? (Cloud vs. Lokale Server/NAS)",
                desc: "Om de juiste backup-strategie te bepalen, moeten we weten of jullie uitsluitend in de cloud werken (bijv. Microsoft 365, Google Workspace) of dat jullie afhankelijk zijn van een fysieke server/NAS.",
                type: "radio",
                options: [
                    "Volledig of overwegend Cloud (Microsoft/Google Workspace).",
                    "Wij maken gebruik van een fysieke lokale server of NAS (Network Attached Storage).",
                    "Hybride: we gebruiken de Cloud én een fysieke server of NAS."
                ]
            },
            {
                id: "q35",
                label: "Recovery Time Objective (RTO) - Bij een groot incident",
                desc: "Bij brand, hack of ernstige hardwarestoring: binnen welke termijn moét het bedrijf of de kritische data weer online zijn? We optimaliseren onze dienstverlening richting die verwachting.",
                type: "text"
            },
            {
                id: "q37",
                label: "Actieve Data Backup Policy",
                desc: "Clouddiensten bieden standaard geen backup, enkel een 30-dagen prullenbak. Ook NAS systemen lopen risico op ransomware zonder externe back-up. Om dataverlies te garanderen richten wij altijd een externe, off-site backup in.",
                type: "radio",
                options: [
                    "Ja. Actieve, externe backup van onze data is vitaal en we nemen dit standaard bij jullie af.",
                    "We besluiten het risico te nemen en geen externe backup te gebruiken (uitdrukkelijke vrijwaring Workflo)."
                ]
            }
        ]
    },
    {
        title: "6. Netwerk & Internet Verblijf op kantoor",
        description: "Snel, naadloos en veilig in de meeting rooms.",
        questions: [
            {
                id: "q39",
                label: "Beheren we straks (op termijn) ook het interne kantoor netwerk? (bijv. Ubiquiti UniFi)",
                desc: "Zullen we het netwerk en beveiliging van de access points in ons beheer opnemen?",
                type: "radio",
                options: [
                    "Ja, heel graag alles onder één warm dak.",
                    "Nee, we regelen dit zelf of met de huisbaas.",
                    "Nee, maar we zouden wel graag een netwerk-inspectie willen boeken."
                ]
            },
            {
                id: "q42",
                label: "Veilig Thuiswerken & Toegang tot bestanden (VPN vs. ZTNA/Smart Storage)",
                desc: "Traditionele VPN's over openbare netwerken via de IT-infrastructuur zijn vaak omslachtig. Werken jullie met moderne veilige oplossingen (zoals Egnyte, LycidLink) of Zero-Trust Network Access (ZTNA via bijv. Sophos) die VPN overbodig maken, beter presteren, en sterke governance bieden?",
                type: "radio",
                options: [
                    "Ja, wij gebruiken slimme moderne oplossingen (zoals Egnyte, LycidLink of ZTNA) voor naadloze remote toegang.",
                    "Nee, we gebruiken nog een traditionele VPN en willen we dat medewerkers deze standaard aanzetten.",
                    "Geen VPN plicht en geen ZTNA. We beveiligen cloud-applicaties puur via de browser/zero-trust."
                ]
            },
            {
                id: "q43",
                label: "Internet via Ziggo/KPN val uit, escaleren we?",
                desc: "Storing bij de provider ligt buiten ons beheer. Mogen we de telefoontjes / onderzoek hierin overnemen (op uurbasis)?",
                type: "radio",
                options: [
                    "Ja graag, en we betalen jullie met alle liefde de uren voor die ontzorging.",
                    "Nee, dit handelt de directie/IT-hero wel intern met KPN of Ziggo af."
                ]
            }
        ]
    },
    {
        title: "7. Communicatie, Vertrouwen & Escalatie",
        description: "Goede relaties behouden communicatie, óók in crisistijd.",
        questions: [
            {
                id: "q45",
                label: "Wie wordt jullie Vaste Interne IT-Contactpersoon (De IT-hero)?",
                desc: "Als we snel even moeten overleggen of goedkeuring nodig hebben. Deze persoon is goud waard voor onze samenwerking.",
                type: "text"
            },
            {
                id: "q48",
                label: "Klachtenproces",
                desc: "Aarzel nooit. Bij wie kan een medewerker terecht als het een keer minder loopt, en hoe weten wij dit zodat we direct kunnen corrigeren?",
                type: "textarea"
            },
            {
                id: "q49",
                label: "Samen evalueren in het kwartaalgesprek",
                desc: "Wij bouwen graag langetermijn relaties. Geven jullie ons per kwartaal een evaluatiemoment (Service Review) om ticket-volumes te checken en toekomstplannen te smeden?",
                type: "radio",
                options: [
                    "Absoluut. We horen graag hoe jullie en wij presteren.",
                    "We plannen liever per half-jaar, tenzij er eerdere issues zijn."
                ]
            }
        ]
    },
    {
        title: "8. Contractueel & Fair Use",
        description: "Open afspraken. Duidelijke grenzen.",
        questions: [
            {
                id: "q51",
                label: "Transparantie in de All-in Fee (Fair Use Policy)",
                desc: "Onze All-in fee (Fixed Fee) is transparant en ontzorgt jullie van onverwachte IT-facturen per minuut voor incidenten. Het dekt al het reguliere beheer, security patches en support bij onverwachte storingen (break-fix). Echter, verzoeken voor structurele wijzigingen (zoals het verplaatsen van een hele server of gelijktijdig aanmaken van veel accounts na overname) of extreem excessieve 'how-to' vragen, vallen onder projectwerk/training en buiten de vaste beheer-fee. Gaan we hier conform onze SLA als partners mee om?",
                type: "radio",
                options: [
                    "Akkoord. Regulier support en storingen vallen binnen de fee. Excessieve structurele wijzigingen of training wordt in overleg na goedkeuring apart behandeld."
                ]
            },
            {
                id: "q52",
                label: "Advies, Aansprakelijkheid en Eigen Keuzes",
                desc: "Soms schieten beleidskeuzes en IT-budgetten tekort op het ideale veiligheidsniveau (zoals het bewust uitschakelen van backups of het niet verplichten van MFA). Als Workflo uit veiligheidsoogpunt formeel een upgrade adviseert (via een P3 of P4 risico-ticket), maar dit om budgettaire (of proces) redenen niet wordt uitgevoerd, wordt Workflo gevrijwaard van eventuele latere calamiteiten voortvloeiend uit dat specifieke issue.",
                type: "radio",
                options: [
                    "Helder en volledig begrepen. Bewuste beslissingen om een risico (risk accept) te behouden, leidt tot uitsluiting van verantwoordelijkheid bij Workflo."
                ]
            }
        ]
    }
];
