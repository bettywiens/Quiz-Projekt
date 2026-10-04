const systemintegrationFragen = [
    {
        frage: "Was ist die Hauptaufgabe des <span class='orange'>Arbeitsspeichers (RAM)</span> in einem Computer?",
        antworten: [
            "Langfristiges Speichern von Daten und Programmen, die gerade aktiv genutzt werden.",
            "Zwischenspeichern von Daten und Programmen, die gerade aktiv genutzt werden.",
            "Kühlen des Prozessors, damit er nicht überhitzt.",
            "Umwandeln von digitalen Signalen in Bilder für den Monitor."
        ],
        richtigeAntwort: 1,
        tipp: "<span class='orange'>RAM</span> = Random Access Memory",
        erklaerung: "<span class='orange'>RAM</span> steht für <span class='orange'>Random Access Memory</span>.<br>Es ist das Kurzeitgedächtnis deines Computers, und speichert somit temporär alle Daten von Programmen, Apps und dem Betriebssystem, der der <span class='orange'>Prozessor (CPU)</span> gerade in diesem Moment benötigt.",

    },
    {
        frage: "Welches <span class='orange'>OSI-Schichtenmodell-Protokoll</span> arbeitet auf Transportebene und garantiert die zuverlässige, fehlergesicherte Zustellung von Datenpaketen?",
        antworten: [
            "TCP (Transmission Control Protcol)",
            "UDP (User Datagram Protocol)",
            "IP (Internet Protocol)",
            "ICMP (Internet Control Message Protocol)"
        ],
        richtigeAntwort: 0,
        tipp: "Transmission bedeutet auf deutsch \"Übersendung\"",
        erklaerung: "Das <span class='orange'>TCP Protokoll</span> ist ein zuverlässiges, verbindungsorientiertes Netzwerkprotokoll zur sicheren Datenübertragung in Computernetzwerken.",
    },
    {
        frage: "Wofür steht die Abkürzung <span class='orange'>VLAN</span> in der Netzwerktechnik?",
        antworten: [
            "Valid Local Area Network",
            "Virtual Local Area Network",
            "Virtually Located Network"
        ],
        richtigeAntwort: 1,
        tipp: "Ähnlich wie <span class='orange'>WLAN</span>, überlege wofür das <span class='orange'>V</span> stehen könnte.",
        erklaerung: "<span class='orange'>VLAN (Virtual Local Area Network)</span> unterteilt ein einziges physisches Netzwerk in mehrere logische, voneinander getrennte Teilnetze."
    },
    {
        frage: "Welches Bauteil eines Computers wird oft als das <span class='orange'>Gehirn</span> des PCs bezeichnet?",
        antworten: [
            "Die Festplatte (HDD/SDD)",
            "Das Netzteil",
            "Der Hauptprozessor (CPU)",
            "Die Grafikkarte"
        ],
        richtigeAntwort: 2,
        tipp: "Man könnte das Gehirn auch als das Hauptorgan des Körpers verstehen.",
        erklaerung: "Der <span class='orange'>CPU (Central Processing Unit)</span>, die zentrale Verarbeitungseinheit oder Prozessor, nimmt alle Befehle entgegen, die vom Betriebssystem oder von Programmen kommen.",

    },
    {
        frage: "Welche <span class='orange'>Standard-Portnummer</span> nutzt der sichere Webverkehr (<span class='orange'>HTTPS</span>)?",
        antworten: [
            "Port 443",
            "Port 80",
            "Port 22",
            "Port 143"
        ],
        richtigeAntwort: 0,
        tipp: "Die Portnummern für <span class='orange'>HTTP</span> und <span class='orange'>HTTPS</span> sind unterschiedlich.",
        erklaerung: "<span class='orange'>HTTPS</span> benutzt standardmäßig <span class='orange'>Port 443</span>, wobei unverschlüsseltes <span class='orange'>HTTP</span> standardmäßig <span class='orange'>Port 80</span> nutzt.<br>Der Port findet das Programm an welche die geschickten Daten übermittelt werden sollen.",

    },
    {
        frage: "Wofür wird eine <span class='orange'>IP-Adresse</span> in einem Heimnetzwerk oder im Internet verwendet?",
        antworten: [
            "Damit jedes Gerät im Netzwerk eine eindeutige Adresse zur Kommunikation hat.",
            "Um die genaue Temperatur des Computers zu messen.",
            "Als Passierschein für den WLAN-Router bei der Anmeldung.",
            "Um die maximale Internetgeschwindigkeit zur erhöhen."
        ],
        richtigeAntwort: 0,
        tipp: "Das Adresse in IP-Adresse kann man wörtlich nehmen.",
        erklaerung: "Einfach erklärt ist die <span class='orange'>IP-Adresse</span> die eindeutige <span class='orange'>digitale Hausnummer</span> für ein Gerät, damit dieses Daten im Internet oder einem Netzwerk senden und empfangen kann."
    },
    {
        frage: "Wie heißt der Befehl unter <span class='orange'>Linux</span>, mit dem man die <span class='orange'>Dateiberechtigungen (Permissions)</span> einer Datei ändert?",
        antworten: [
            "<span class='code'>mkdir</span>",
            "<span class='code'>rem</span>",
            "<span class='code'>chmod</span>"
        ],
        richtigeAntwort: 2,
        tipp:"<span class='code'>mkdir</span> = make directory<br><span class='code'>rem</span> = remove<br><span class='code'>chmod</span> = change mode",
        erklaerung: "<span class='code'>chmod</span> steht für <span class='orange'>\"change mode\"</span>, und mit diesem Befehl ändert man die Zugriffsrechte von Dateien und Ordnern.<br>Unter diesen Rechten fallen einmal <span class='code'>\"r\"</span> = read, fürs reine lesen, <span class='code'>\"w\"</span> = write, wenn man auch reinschreiben darf und <span class='code'>\"x\"</span> = execute, wenn die Datei ausgeführt werden darf.",

    },
    {
        frage: "Was ist der Hauptunterschied zwischen einer <span class='orange'>LAN-Verbindung</span> und einer <span class='orange'>WLAN-Verbindung</span>?",
        antworten: [
            "LAN ist immer langsamer als WLAN.",
            "WLAN benötigt ein blaues Netzwerkkabel.",
            "LAN nutzt ein physisches Kabel, während WLAN Daten über Funkwellen überträgt.",
            "LAN funktioniert nur auf Smartphones."
        ],
        richtigeAntwort: 2,
        tipp:"Das <span class='orange'>W</span> in <span class='orange'>WLAN</span> steht für <span class='orange'>wireless</span> (kabellos).",
        erklaerung: "<span class='orange'>LAN (Local Area Network)</span> erfolgt über ein Netzwerkkabel, welches direkt am Router oder Switch angebracht ist, es ist sehr <span class='orange'>schnell</span>, <span class='orange'>stabil</span> und <span class='orange'>sicher</span>, allerdings nicht sehr flexibel.<br><span class='orange'>WLAN (Wireless Local Area Network)</span> funktioniert komplett kabellos über Funk, es erlaubt die <span class='orange'>freie und mobile Nutzung</span> von digitalen Endgeräten im gesamten Empfangsbereich, ist allerdings anfälliger für Störungen, langsamer und angreifbarer, da Funksignale abgefangen werden können.",

    },
    {
        frage: "Was versteht man unter dem Begriff <span class='orange'>RAID 1</span>?",
        antworten: [
            "Ein Sicherheitsverfahren, bei dem Daten mit einem 1-Faktor-Passwort verschlüsselt werden.",
            "Eine Spiegelung (Mirroring) von mindestens zwei Festplatten zur Erhöhung der Datensicherheit bei Ausfall einer Festplatte.",
            "Ein Protokoll zur Beschleunigung von Internetverbindungen durch Datenkomprimierung."
        ],
        richtigeAntwort: 1,
        tipp: "<span class='orange'>RAID</span> = Redundant Array of Independent Disks",
        erklaerung: "<span class='orange'>RAID 1</span> ist ein Speicherverbund aus mindestens zwei Festplatten, bei dem alle Daten exakt gleich gespiegelt werden.<br>Jede Datei wird gleichzeitig auf Festplatte1 und Festplatte 2 gespeichert. Somit kann das System fehlerfrei weiterlaufen, falls eine Festplatte ausfällt.",

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
        tipp: "Was sollte ein Passwort enthalten, um sicher zu sein?",
        erklaerung: "Sichere Passwörter sollten sowohl <span class='orange'>Kleinbuchstaben</span>, <span class='orange'>Großbuchstaben</span>, <span class='orange'>Zahlen</span> als auch <span class='orange'>Sonderzeichen</span> enthalten.",
    },
    {
        frage: "Welche Technologie <span class='orange'>schützt</span> ein internes Firmennetzwerk am Übergang zum öffentlichen Internet vor <span class='orange'>unbefugten Zugriffen</span>, indem sie den Datenverkehr nach festgelegten Regeln filtert?",
        antworten: [
            "Ad Blocker",
            "FireWall",
            "DHCP-Server"
        ],
        richtigeAntwort: 1,
        tipp: "Welche von den Möglichkeiten hört sich wie etwas Aufhaltendes an?",
        erklaerung: "Die <span class='orange'>Firewall</span> wird als <span class='orange'>Sicherheits- und Kontrollsystem</span> genutzt, das ein- und ausgehenden Datenverkehr in einem Netzwerk oder auf einem Computer überwacht und unerwünschte Zugriffe blockiert.<br>Sie arbeitet nach festen Sicherheitsregeln, die entscheiden, welche Datenpakete durchgelassen werden oder gestoppt werden. Unter den geprüften Kriterien gehören <span class='orange'>IP-Adressen, Ports, etc.</span>.<br>Dadurch trennt sie ein sicheres internes Netzwerk von unsicheren Bereichen wie dem öffentlichen Internet."

    },
    {
        frage: "Was beschreibt ein <span class='orange'>DDoS-Angriff</span>?",
        antworten: [
            "Den gezielten Versuch, einen Dienst oder Server durch eine Flut von künstlichen Anfragen von vielen verschiedenen Geräten aus lahmzulegen.",
            "Das unbemerkte Verschlüsseln von Festplatten, um vom Besitzer Lösegeld zu erpressen.",
            "Das massenhafte Abfangen von Passwörtern beim Einloggen in öffentliche WLAN-Netze."
        ],
        richtigeAntwort: 0,
        tipp: "<span class='orange'>DDos</span> = Distributed Denial of Service | Verteilte Dienstverweigerung",
        erklaerung: "Ein <span class='orange'>DDoS-Angriff (Distributed Denial-of-Service)</span> ist eine <span class='orange'>Cyberattacke</span>, bei der ein Online-Dienst oder Server mit einer riesigen Flut von gefälschten Anfragen so stark überlastet wird, dass er für echte Nutzer nicht mehr erreichbar ist oder zusammenbricht.<br>Dieser Datenverkehr kommt oft von <span class='orange'>tausenden oder Millionen manipulierten Geräten (Botnet)</span>, durch diese Überlastung wird die IT-Infrastruktur des Empfängers lahmgelegt.",
        
    }
]