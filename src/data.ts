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
    questions: Question[];
}

export const formSections: Section[] = [
    {
        title: "1. On/Offboarding (Nieuwe & Vertrekkende Medewerkers)",
        questions: [
            {
                id: "q1",
                label: "Wie geeft het aan ons door als een medewerker uit dienst gaat?",
                desc: "Licenties blijven geld kosten zolang ze niet zijn opgezegd. De kosten hiervoor zijn voor eigen rekening als het vertrek niet tijdig wordt gemeld.",
                type: "text"
            },
            {
                id: "q2",
                label: "Wat doen we met de mailbox en bestanden (OneDrive) van een ex-medewerker?",
                desc: "Hoelang moeten we deze bewaren en wie is de eindverantwoordelijke die hiervoor akkoord geeft?",
                type: "radio",
                options: [
                    "Direct verwijderen",
                    "30 dagen bewaren en dan verwijderen",
                    "Doorsturen naar manager en 30 dagen bewaren",
                    "Anders (Vul hieronder in)"
                ]
            },
            {
                id: "q3",
                label: "Hoe gaan we om met wachtwoorden bij vertrek? (Gedeelde accounts, alarmsysteem, Wi-Fi)",
                desc: "Wie zorgt ervoor dat gedeelde wachtwoorden worden veranderd als iemand vertrekt en binnen hoeveel dagen moet dat gebeuren?",
                type: "textarea"
            },
            {
                id: "q4",
                label: "Wie zorgt dat de hardware (bijv. de Mac) retour komt?",
                desc: "Apparatuur moet terug. Wie is verantwoordelijk hiervoor, vooral als de medewerker thuiswerkt of ziek is?",
                type: "text"
            },
            {
                id: "q5",
                label: "Apparaten wissen (MDM unenrollment)",
                desc: "Een apparaat wissen is een bewuste actie. Weten jullie dat dit expliciet bij ons aangevraagd moet worden?",
                type: "radio",
                options: ["Ja, we begrijpen dit en zullen dit per ticket aanvragen."]
            },
            {
                id: "q6",
                label: "Minimale opzegtermijn voor nieuwe medewerkers",
                desc: "Een aanmelding op vrijdagmiddag voor maandagochtend geeft problemen. Hoeveel werkdagen van tevoren melden jullie een nieuwe medewerker aan?",
                type: "radio",
                options: ["Minimaal 5 werkdagen van tevoren", "Minimaal 10 werkdagen van tevoren"]
            },
            {
                id: "q7",
                label: "Hoe gaan we om met ZZP'ers, stagiaires of tijdelijke krachten?",
                desc: "Krijgen zij tijdelijke accounts? Beperkte toegang? Aparte licentievorm?",
                type: "textarea"
            },
            {
                id: "q8",
                label: "Naamgeving: Hoe noemen we e-mailadressen en apparaten?",
                desc: "Bijv: voornaam@bedrijf.nl of voornaam.achternaam@bedrijf.nl? Wie bepaalt dit standaard?",
                type: "text"
            }
        ]
    },
    {
        title: "2. Purchasing (Aanschaf Hardware & Software)",
        questions: [
            {
                id: "q9",
                label: "Apparaten die niet via Workflo zijn gekocht (ADE/Zero Touch)",
                desc: "Als je een apparaat ergens anders koopt, kost het ons extra tijd (0,5u) om deze te koppelen. Ga je hiermee akkoord?",
                type: "radio",
                options: ["Ja, we zijn ons bewust van deze toeslag."]
            },
            {
                id: "q10",
                label: "Garantieafhandeling",
                desc: "Als een apparaat niet bij ons is gekocht, is de garantie jouw probleem (bijv. zelf naar de MediaMarkt). Begrepen?",
                type: "radio",
                options: ["Ja, helder."]
            },
            {
                id: "q11",
                label: "Wanneer is een apparaat 'End-of-life' (te oud)?",
                desc: "Na X jaar of als Apple het niet meer ondersteunt, adviseren wij vervanging. De keuze is aan jou, maar bij problemen is support buiten scope. Wat is jullie afschrijvingstermijn voor Macs?",
                type: "text"
            },
            {
                id: "q12",
                label: "Support op tweedehands of refurbished hardware",
                desc: "Wij geven geen oplossingsgarantie op niet door ons geleverde tweedehands apparatuur. Begrepen?",
                type: "radio",
                options: ["Ja, ik begrijp dit risico."]
            },
            {
                id: "q13",
                label: "Software buiten onze standaard stack",
                desc: "We ondersteunen de basis. Als je zelf andere software koopt (bijv. Adobe, of een CRM tool) en ons vraagt te helpen, is dat extra (billable) werk. Akkoord?",
                type: "radio",
                options: ["Ja, akkoord."]
            },
            {
                id: "q14",
                label: "Op wiens naam staan abonnementen (zoals Microsoft 365)?",
                desc: "Lopen deze licenties via onze NCE-reseller portal of direct via Microsoft op jullie creditcard? Let op: via ons betekent dat we beheer en support sneller kunnen leveren.",
                type: "radio",
                options: ["Via Workflo", "Direct via de leverancier"]
            },
            {
                id: "q15",
                label: "Tot welk bedrag mogen wij zonder expliciete goedkeuring iets bestellen?",
                desc: "Bijvoorbeeld een kabel of dongle, zodat je medewerker direct verder kan werken. (Bijv. tot €50 of €100). En wie moet daarboven akkoord geven?",
                type: "text"
            }
        ]
    },
    {
        title: "3. Support (Hulp & Tickets)",
        questions: [
            {
                id: "q16",
                label: "Wat valt NIET onder de vaste prijs (fixed fee)?",
                desc: "Persoonlijke software (Spotify), privéapparaten (telefoon van partner) of thuisprinters vallen niet onder de fee. Helder?",
                type: "radio",
                options: ["Ja, wij begrijpen de grens tussen werk en privé."]
            },
            {
                id: "q17",
                label: "Prioriteiten (SLA's)",
                desc: "Een P1 (iedereen ligt plat) is anders dan een P3 (ik wil een nieuwe muis). Hebben jullie onze SLA responstijden gelezen en begrepen?",
                type: "radio",
                options: ["Ja, de SLA is gelezen en akkoord."]
            },
            {
                id: "q18",
                label: "Hoe mag je support aanvragen?",
                desc: "Alleen via het ticketsysteem of vaste portal. Geen WhatsAppjes naar privé nummers van engineers. Akkoord voor traceerbaarheid?",
                type: "radio",
                options: ["Ja, wij communiceren via het officiële ticketsysteem."]
            },
            {
                id: "q19",
                label: "Wie mag support tickets aanmaken?",
                desc: "Mag iedereen zelf een ticket inschieten, of loopt dit centraal via 1 of 2 contactpersonen?",
                type: "radio",
                options: ["Iedere medewerker mag tickets inschieten", "Alleen centrale contactpersonen"]
            },
            {
                id: "q20",
                label: "Wanneer komen we langs (On-site)?",
                desc: "Support is standaard op afstand (remote). On-site bezoek valt buiten de vaste fee tenzij het een netwerk-uitval door ons toedoen is. Akkoord?",
                type: "radio",
                options: ["Ja, bezoeken op locatie zijn op uurbasis tenzij anders afgesproken."]
            },
            {
                id: "q21",
                label: "Hulp buiten kantoortijden",
                desc: "Werken jullie 's avonds of in het weekend en is daar dekking voor nodig? Zo ja, dit valt onder een speciaal (duurder) tarief. Is dit gewenst?",
                type: "radio",
                options: ["Nee, alleen kantoortijden volstaan", "Ja, we willen een voorstel voor 24/7 of avond support"]
            },
            {
                id: "q22",
                label: "Gebruikersfout vs. Technisch defect",
                desc: "Als iemand zelf een beker koffie over de laptop gooit of zelf de map met gedeelde bestanden weggooit, valt het herstel buiten de vaste fee. Akkoord?",
                type: "radio",
                options: ["Ja, schade of grove fouten van de gebruiker is maatwerk/billable."]
            },
            {
                id: "q23",
                label: "Externe leveranciers (bijv. boekhoudsoftware, Exact)",
                desc: "Als Exact stuk is, bel je Exact. Als wij mee moeten kijken of bellen met Exact, is dat buiten scope. Helder?",
                type: "radio",
                options: ["Ja, we bellen eerst zelf de leverancier van de specifieke software."]
            }
        ]
    },
    {
        title: "4. Security & Compliance (Beveiliging & Regels)",
        questions: [
            {
                id: "q24",
                label: "Hebben jullie een Acceptable Use Policy (gedragsregels voor IT)?",
                desc: "Een document waarin staat wat medewerkers wel/niet mogen doen op zakelijke laptops. Hebben jullie dit?",
                type: "radio",
                options: ["Ja", "Nee, we willen hier advies over", "Nee, hebben we niet nodig"]
            },
            {
                id: "q25",
                label: "MFA (Authenticatie in twee stappen) is verplicht",
                desc: "MFA is een harde eis voor alle accounts. Bij uitzonderingen vervalt alle aansprakelijkheid vanuit ons. Gaan jullie hiermee akkoord?",
                type: "radio",
                options: ["Ja, we begrijpen het belang van MFA en dwingen dit af."]
            },
            {
                id: "q26",
                label: "Twijfel over een e-mail (Phishing)",
                desc: "Wie belt/mailt de medewerker bij een verdachte mail? Mogen zij dit direct aan ons doorsturen als P2 ticket?",
                type: "text"
            },
            {
                id: "q27",
                label: "Wat doen we bij een grote hack of ransomware?",
                desc: "Wie beslist intern of we het hele bedrijf offline (internet eruit) mogen trekken om verdere schade te voorkomen?",
                type: "text"
            },
            {
                id: "q28",
                label: "Zijn de AVG/GDPR documenten (Verwerkersovereenkomst) getekend?",
                desc: "Voordat wij beheer doen, moeten we wettelijk een handtekening hebben op de verwerkersovereenkomst.",
                type: "radio",
                options: ["Ja, of we tekenen deze direct bij de start."]
            },
            {
                id: "q29",
                label: "Valt jullie bedrijf onder de nieuwe NIS2 wetgeving?",
                desc: "Dit is wetgeving voor belangrijke sectoren. Is dat op jullie van toepassing?",
                type: "radio",
                options: ["Ja", "Nee", "Weet ik niet (Zoek dit alsjeblieft uit)"]
            },
            {
                id: "q30",
                label: "Encryptie van apparaten (FileVault/BitLocker)",
                desc: "Alle schijven worden versleuteld. Het verlies van een apparaat zónder deze beveiliging is een enorm risico. Wij slaan de herstelsleutels op.",
                type: "radio",
                options: ["Gelezen en akkoord"]
            },
            {
                id: "q31",
                label: "Mogen apparaten privé gebruikt worden?",
                desc: "Als een laptop zoekraakt, wissen wij deze vaak volledig. Staan er dan privéfoto's op, dan zijn we die kwijt. Is privégebruik toegestaan?",
                type: "radio",
                options: ["Ja", "Nee"]
            },
            {
                id: "q32",
                label: "Verlies of diefstal van een laptop of telefoon",
                desc: "Wie meldt dit bij ons (en de politie) en binnen hoeveel uur? Wij plegen direct een remote wipe na uw melding.",
                type: "text"
            },
            {
                id: "q33",
                label: "Bring Your Own Device (Eigen apparaten op het werk)",
                desc: "Mogen medewerkers hun privételefoon gebruiken voor de werkmail? Zo ja, wij eisen dat we bedrijfsdata op die telefoon kunnen wissen bij vertrek. Akkoord?",
                type: "radio",
                options: ["Ja, we stemmen dit af met het team", "Nee, privé apparaten worden niet zakelijk gebruikt"]
            }
        ]
    },
    {
        title: "5. Backup & Continuïteit (Een Vangnet)",
        questions: [
            {
                id: "q34",
                label: "Wat wordt er wél en níet geback-upt?",
                desc: "We maken een backup van Microsoft 365, maar NIET van bestanden die iemand los op het bureaublad plaatst (buiten OneDrive). Wat is daarover afgesproken?",
                type: "radio",
                options: ["Helder, medewerkers moeten op de juiste schijf werken."]
            },
            {
                id: "q35",
                label: "Hoelang mag bij een grote ramp alles plat liggen? (RTO)",
                desc: "1 uur? 1 dag? 1 week? Een sneller herstel vereist een duurdere oplossing.",
                type: "text"
            },
            {
                id: "q36",
                label: "Testen van de backup",
                desc: "Een backup die nooit is getest, is geen backup. We zullen dit periodiek testen (en rapporteren). Akkoord?",
                type: "radio",
                options: ["Ja, test maar."]
            },
            {
                id: "q37",
                label: "Aparte Microsoft 365 / Google Workspace Backup",
                desc: "Verwijderde e-mails in M365 ben je standaard na 30 dagen kwijt. Wij verplichten een externe backup oplossing om dataverlies per ongeluk of met opzet te voorkomen. Mee eens?",
                type: "radio",
                options: ["Ja, we nemen een licentie af voor de externe M365 backup."]
            },
            {
                id: "q38",
                label: "Hebben jullie nog een lokale server of NAS op kantoor staan?",
                desc: "Staat er ergens een kastje te zoemen en is overeengekomen of wij dit kastje ook in beheer nemen (firmware updaten, monitoren)?",
                type: "radio",
                options: ["Ja, we hebben dit, we willen dit in beheer.", "Ja, we hebben dit, we beheren dit zelf.", "Nee, we werken 100% in de cloud."]
            }
        ]
    },
    {
        title: "6. Netwerk & Infrastructuur (Wi-Fi en Internet)",
        questions: [
            {
                id: "q39",
                label: "Beheren wij het netwerk/de Wi-Fi? (Bijv. Ubiquiti UniFi)",
                desc: "Hebben wij dit ingericht en is het updaten hiervan onderdeel van ons contract?",
                type: "radio",
                options: ["Ja, dit valt binnen jullie contract.", "Nee, we hebben een andere partij of doen dit zelf."]
            },
            {
                id: "q40",
                label: "Netwerktoegang voor externe partijen",
                desc: "Als het alarmsysteem of het kassasysteem internet nodig heeft, wie vertelt ons dat ze op een apart (veilig) netwerk moeten?",
                type: "text"
            },
            {
                id: "q41",
                label: "Is er een gasten-Wi-Fi nodig?",
                desc: "Gasten mogen nooit zomaar op het bedrijfsnetwerk. Wat wordt het wachtwoord van het gastennetwerk?",
                type: "text"
            },
            {
                id: "q42",
                label: "Werken op afstand en VPN",
                desc: "Werken mensen vanaf onveilige netwerken (koffiezaakjes, hotels)? Moeten we instellen dat zij altijd een VPN moeten gebruiken naar bedrijfsdata?",
                type: "radio",
                options: ["Ja, verplicht VPN op openbare netwerken", "Nee, niet strikt noodzakelijk (cloud apps zijn al beveiligd)"]
            },
            {
                id: "q43",
                label: "Wie is de contactpersoon als het internet van Ziggo/KPN uitvalt?",
                desc: "Als het internet op kantoor uitvalt, ligt dat aan de provider. Wil je dat wij hen bellen (en dat we hiervoor mogelijk uren rekenen)?",
                type: "radio",
                options: ["Ja, bel de provider namens ons (uurtarief akkoord).", "Nee, wij bellen KPN/Ziggo zelf eerst."]
            },
            {
                id: "q44",
                label: "Netwerkdocumentatie",
                desc: "Wij schrijven op hoe alles is aangesloten. Als de schoonmaker kabels lostrekt en overal weer in steekt, kost het tijd om het weer in orde te maken. Akkoord?",
                type: "radio",
                options: ["Ja, wij blijven van de kabels in de patchkast af."]
            }
        ]
    },
    {
        title: "7. Communicatie & Escalatie (Wanneer het misgaat of spannend wordt)",
        questions: [
            {
                id: "q45",
                label: "Wie is onze Vaste IT-Contactpersoon bij jullie?",
                desc: "Met wie overleggen we, wie mag beslissen? Zonder interne 'IT-hero' loopt alles mis.",
                type: "text"
            },
            {
                id: "q46",
                label: "Wie mag financieel akkoord geven?",
                desc: "Als we een offerte of voorstel sturen of een licentie uitbreiden, wie heeft de bevoegdheid om 'ja' te zeggen?",
                type: "text"
            },
            {
                id: "q47",
                label: "Hoe informeren we jullie bij gepland onderhoud (downtime)?",
                desc: "Sommige updates zorgen voor 15min uitval van bijv. Wi-Fi. Hoeveel dagen van tevoren moeten we dat doorgeven?",
                type: "text"
            },
            {
                id: "q48",
                label: "Vast klachtenproces",
                desc: "Als een medewerker ontevreden is over ons, bij wie kan diegene terecht en hoe geven we dit door (zodat het niet opgekropt wordt)?",
                type: "textarea"
            },
            {
                id: "q49",
                label: "Zullen we elk kwartaal een uurtje afspreken?",
                desc: "Niet om iets te verkopen, maar om te kijken naar de tickets, frustraties en de toekomst (Service Review/Kwartaalgesprek)?",
                type: "radio",
                options: ["Ja, heel graag.", "Nee, 1 keer per jaar of halfjaar is genoeg."]
            }
        ]
    },
    {
        title: "8. Contractueel & Financieel",
        questions: [
            {
                id: "q50",
                label: "Aanpassen van de factuur bij groei/krimp",
                desc: "Als jullie mensen aannemen of ontslaan, passen we de maandelijkse fee daar op aan. Dit gebeurt op een standaard peildatum per maand, akkoord?",
                type: "radio",
                options: ["Ja, dit is duidelijk."]
            },
            {
                id: "q51",
                label: "Wat bedoelen we met 'Fair Use' op support?",
                desc: "Een vaste fee dekt veel, maar niet alles. Als 1 werknemer 20 tickets per maand instuurt omdat hij niet kan omgaan met Word, overleggen we dit en brengen we uren in rekening. Akkoord?",
                type: "radio",
                options: ["Ja, overleg in zo'n geval over betaalde training of uurtarief."]
            },
            {
                id: "q52",
                label: "Aansprakelijkheid",
                desc: "Als wij adviseren om de firewall te updaten en jullie weigeren vanwege de kosten, en je wordt daarna gehackt, dan zijn wij NIET aansprakelijk. Akkoord?",
                type: "radio",
                options: ["Ja, we zijn samen in controle maar beslissen zelf."]
            },
            {
                id: "q53",
                label: "Lijst met ondersteunde software",
                desc: "Als jullie overgaan op een nieuw HR-pakket en wij moeten dit beheren, dan moeten we hierover in overleg en de fee of voorwaarden aanpassen. Akkoord?",
                type: "radio",
                options: ["Ja, we informeren jullie altijd vóórdat we nieuwe bedrijfssoftware introduceren."]
            }
        ]
    }
];
