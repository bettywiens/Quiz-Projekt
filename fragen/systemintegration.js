const systemintegrationFragen = [
    {
        frage: "Welches OSI-Schichtenmodell-Protokoll arbeitet auf Transportebene und garantiert die zuverlässige, fehlergesicherte Zustellung von Datenpaketen?",
        antworten: [
            "TCP (Transmission Control Protcol)",
            "UDP (User Datagram Protocol)",
            "IP (Internet Protocol)",
            "ICMP (Internet Control Message Protocol)"
        ],
        richtigeAntwort: 0,
        tipp: "Transmission bedeutet auf deutsch \"Übersendung\"",
        erklaerung: "Das TCP Protokoll ist ein zuverlässiges, verbindungsorientiertes Netzwerkprotokoll zur sicheren Datenübertragung in Computernetzwerken.",
    },
    {
        frage: "Was ist die Hauptaufgabe des Arbeitsspeichers (RAM) in einem Computer?",
        antworten: [
            "Langfristiges Speichern von Daten und Programmen, die gerade aktiv genutzt werden.",
            "Zwischenspeichern von Daten und Programmen, die gerade aktiv genutzt werden.",
            "Kühlen des Prozessors, damit er nicht überhitzt.",
            "Umwandeln von digitalen Signalen in Bilder für den Monitor."
        ],
        richtigeAntwort: 1,
        tipp: "RAM = Random Access Memory",
        erklaerung: "RAM steht für Random Access Memory. Es ist das Kurzeitgedächtnis deines Computers, und speichert somit temporär alle Daten von Programmen, Apps und dem Betriebssystem, der der Prozessor (CPU) gerade in diesem Moment benötigt.",

    },
    {
        frage: "Wofür steht die Abkürzung VLAN in der Netzwerktechnik?",
        antworten: [
            "Valid Local Area Network",
            "Virtual Local Area Network",
            "Virtually Located Network"
        ],
        richtigeAntwort: 1,
        tipp: "",
        erklaerung: "VLAN (Virtual Local Area Network) unterteilt ein einziges physisches Netzwerk in mehrere logische, voneinander getrennte Teilnetze."
    },
    {
        frage: "Welches Bauteil eines Computers wird oft als das \"Gehirn\" des PCs bezeichnet?",
        antworten: [
            "Die Festplatte (HDD/SDD)",
            "Das Netzteil",
            "Der Hauptprozessor (CPU)",
            "Die Grafikkarte"
        ],
        richtigeAntwort: 2,
        tipp: "Man könnte das Gehirn auch als das Hauptorgan des Körpers verstehen.",
        erklaerung: "Der CPU (Central Processing Unit), die zentrale Verarbeitungseinheit oder Prozessor, nimmt alle Befehle entgegen, die vom Betriebssystem oder von Programmen kommen.",

    },
    {
        frage: "Welche Standard-Portnummer nutzt der sichere Webverkehr (HTTPS)?",
        antworten: [
            "Port 443",
            "Port 80",
            "Port 22",
            "Port 143"
        ],
        richtigeAntwort: 0,
        tipp: "Die Portnummern für HTTP und HTTPS sind unterschiedlich.",
        erklaerung: "HTTPS benutzt standardmäßig Port 443, wobei unverschlüsseltes HTTP standardmäßig Port 80 nutzt. Der Port findet das Programm an welche die geschickten Daten übermittelt werden sollen.",

    },
    {
        frage: "Wofür wird eine IP-Adresse in einem Heimnetzwerk oder im Internet verwendet?",
        antworten: [
            "Damit jedes Gerät im Netzwerk eine eindeutige Adresse zur Kommunikation hat.",
            "Um die genaue Temperatur des Computers zu messen.",
            "Als Passierschein für den WLAN-Router bei der Anmeldung.",
            "Um die maximale Internetgeschwindigkeit zur erhöhen."
        ],
        richtigeAntwort: 0,
        tipp: "Das Adresse in IP-Adresse kann man wörtlich nehmen.",
        erklaerung: "Einfach erklärt ist die IP-Adresse die eindeutige digitale Hausnummer für ein Gerät, damit dieses Daten im Internet oder einem Netzwerk senden und empfangen kann."
    },
    {
        frage: "Wie heißt der Befehl unter Linux, mit dem man die Dateiberechtigungen (Permissions) einer Datei ändert?",
        antworten: [
            "mkdir",
            "rem",
            "chmod"
        ],
        richtigeAntwort: 2,
        tipp:"mkdir = make directory\nrem = remove\nchmod = change mode",
        erklaerung: "chmod steht für \"change mode\", und mit diesem Befehl ändert man die Zugriffsrechte von Dateien und Ordnern. Unter diesen Rechten fallen einmal \"r\" = read, fürs reine lesen, \"w\" = write, wenn man auch reinschreiben darf und \"x\" = execute, wenn die Datei ausgeführt werden darf.",

    },
    {
        frage: "Was ist der Hauptunterschied zwischen einer LAN-Verbindung und einer WLAN-Verbindung?",
        antworten: [
            "LAN ist immer langsamer als WLAN.",
            "WLAN benötigt ein blaues Netzwerkkabel.",
            "LAN nutzt ein physisches Kabel, während WLAN Daten über Funkwellen überträgt.",
            "LAN funktioniert nur auf Smartphones."
        ],
        richtigeAntwort: 2,
        tipp:"Das W in WLAN steht für wireless (kabellos).",
        erklaerung: "LAN (Local Area Network) erfolgt über ein Netzwerkkabel, welches direkt am Router oder Switch angebracht ist, es ist sehr schnell, stabil und sicher, allerdings nicht sehr flexibel. WLAN (Wireless Local Area Network) funktioniert komplett kabellos über Funk, es erlaubt die freie und mobile Nutzung von digitalen Endgeräten im gesamten Empfangsbereich, ist allerdings anfälliger für Störungen, langsamer und angreifbarer, da Funksignale abgefangen werden können.",

    },
    {
        frage: "Was versteht man unter dem Begriff „RAID 1“?",
        antworten: [
            "Ein Sicherheitsverfahren, bei dem Daten mit einem 1-Faktor-Passwort verschlüsselt werden.",
            "Eine Spiegelung (Mirroring) von mindestens zwei Festplatten zur Erhöhung der Datensicherheit bei Ausfall einer Festplatte.",
            "Ein Protokoll zur Beschleunigung von Internetverbindungen durch Datenkomprimierung."
        ],
        richtigeAntwort: 1,
        tipp: "RAID = Redundant Array of Independent Disks",
        erklaerung: "RAID 1 ist ein Speicherverbund aus mindestens zwei Festplatten, bei dem alle Daten exakt gleich gespiegelt werden, was bedeutet, dass jede Datei gleichzeitig auf Festplatte1 und Festplatte 2 gespeichert wird. Somit kann das System fehlerfrei weiterlaufen, falls eine Festplatte ausfällt.",

    },
    {
        frage: "Welches Passwort ist am sichersten?",
        antworten: [
            "12345678",
            "M@x123!_sichr#",
            "geheim",
            "meinname123"
        ],
        richtigeAntwort: 1,
        tipp: "",
        erklaerung: "Sichere Passwörter sollten sowohl Kleinbuchstaben, Großbuchstaben, Zahlen als auch Sonderzeichen enthalten",
    },
    {
        frage: "Welche Technologie schützt ein internes Firmennetzwerk am Übergang zum öffentlichen Internet vor unbefugten Zugriffen, indem sie den Datenverkehr nach festgelegten Regeln filtert?",
        antworten: [
            "Ad Blocker",
            "FireWall",
            "DHCP-Server"
        ],
        richtigeAntwort: 1,
        tipp: "Welche von den Möglichkeiten hört sich wie etwas Aufhaltendes an?",
        erklaerung: "Die Firewall wird als Sicherheits- und Kontrollsystem genutzt, das ein- und ausgehenden Datenverkehr in einem Netzwerk oder auf einem Computer überwacht und unerwünschte Zugriffe blockiert. Sie arbeitet nach festen Sicherheitsregeln, die entscheiden, welche Datenpakete durchgelassen werden oder gestoppt werden. Unter den geprüften Kriterien gehören IP-Adressen, Ports, etc..\nDadurch trennt sie ein sicheres internes Netzwerk von unsicheren Bereichen wie dem öffentlichen Internet."

    },
    {
        frage: "Was beschreibt ein \"DDoS-Angriff\"?",
        antworten: [
            "Den gezielten Versuch, einen Dienst oder Server durch eine Flut von künstlichen Anfragen von vielen verschiedenen Geräten aus lahmzulegen.",
            "Das unbemerkte Verschlüsseln von Festplatten, um vom Besitzer Lösegeld zu erpressen.",
            "Das massenhafte Abfangen von Passwörtern beim Einloggen in öffentliche WLAN-Netze."
        ],
        richtigeAntwort: 0,
        tipp: "DDos = Distributed Denial of Service | Verteilte Dienstverweigerung",
        erklaerung: "Ein DDoS-Angriff (Distributed Denial-of-Service) ist eine Cyberattacke, bei der ein Online-Dienst oder Server mit einer riesigen Flut von gefälschten Anfragen so stark überlastet wird, dass er für echte Nutzer nicht mehr erreichbar ist oder zusammenbricht. Dieser Datenverkehr kommt oft von tausenden oder Millionen manipulierten Geräten (Botnet), durch diese Überlastung wird die IT-Infrastruktur des Empfängers lahmgelegt.",
        
    }
]