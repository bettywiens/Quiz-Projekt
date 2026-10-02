const anwendungsentwicklungFragen = [
    {
        frage: "Welches der folgenden ist keine Programmiersprache",
        antworten : [
            "Ruby",
            "COBOL",
            "Python",
            "FluxScript"
        ],
        richtigeAntwort: 3,
        tipp: "",
        erklaerung: "FluxScript ist eine ausgedachte Programmiersprache. Der Name ist angelehnt an die bekannten Programmiersprachen JavaScript und TypeScript."

    },
    {
        frage: "Stell dir vor, du hast eine kleine Box namens punkte. Du tust die Zahl 5 hinein. Danach kommt der Befehl: punkte = punkte + 3. Was befindet sich jetzt in der Box punkte?",
        antworten: [
            "3",
            "8",
            "5",
            "15"
        ],
        richtigeAntwort: 1,
        tipp: "Denk dran, dass punkte bereits einen Wert von 5 hat.",
        erklaerung: "Stell es dir so vor, wie gesagt sind in deiner Box 5 Punkte. Wenn wir nun punkte = punkte + 3 rechnen, dann sieht die Rechnung eigentlich so aus:\npunkte = 5 + 3, oder noch anschaulicher:\nneueAnzahlPunkte = alteAnzahlPunkte + 3.\nDies macht Sinn, da auf der linken Seite immer der Name der Variable steht, den wir einen neuen Wert zuteilen wollen, und rechts der neue Wert."
    },
    {
        frage: "Du schreibst eine Regel für deinen Wecker: WENN heute Samstag ist, DANN schlafe länger, SONST steh um 7 Uhr auf. Heute ist Dienstag. Was passiert?",
        antworten: [
            "Du stehst um 7 Uhr auf.",
            "Du schläfst länger.",
            "Der Wecker klingelt gar nicht.",
            "Es gibt einen Fehler"
        ],
        richtigeAntwort: 0,
        tipp: "Ist heute Samstag? Was musst du machen, wenn heute nicht Samstag ist?",
        erklaerung: "Heute ist Dienstag. Wir müssen nur nicht früh aufstehen, wenn es Samstag ist. Da heute Dienstag und nicht Samstag ist, müssen wir um 7 Uhr aufstehen.",
    },
    {
        frage: "Für ein Fahrgeschäft im Freizeitpark gilt die Regel: Du musst größer als 1,20 m UND mindestens 10 Jahre alt sein. Anna ist 1,35 m groß, aber erst 9 Jahre alt. Darf sie mitfahren?",
        antworten: [
            "Ja, weil sie groß genug ist.",
            "Ja, weil eine Eigenschaft reicht.",
            "Nein, weil sie jünger als 10 Jahre ist.",
            "Nein, weil beide Werte zusammen gerechnet werden müssen."
        ],
        richtigeAntwort: 2,
        tipp: "Betrachte das UND, muss nur eine oder müssen zwei Bedingungen erfüllt sein?",
        erklaerung: "UND: Damit sie mitfahren darf müssen 2 Bedingungen erfüllt sein. Sie muss 1,20m groß sein und 10 Jahre alt sein. Da sie allerdings nur größer als 1,20 ist und nicht mindestens 10 Jahre alt ist darf sie nicht mitfahren, da nur eine der zwei Bedingungen erfüllt ist.",
    },
    {
        frage: "Im Kino gilt an der Kasse: Du kommst gratis rein, wenn du heute Geburtstag hast ODER eine Jahreskarte besitzt. Max hat heute nicht Geburtstag, hat aber eine Jahreskarte. Kommt er gratis rein?",
        antworten: [
            "Ja, weil eine der beiden Bedingungen erfüllt ist.",
            "Nein, es muss beides gleichzeitig wahr sein.",
            "Nein, weil er keinen Geburtstag hat.",
            "Ja, aber nur, wenn er zusätzlich Popcorn kauft"
        ],
        richtigeAntwort: 0,
        tipp: "Betrachte das ODER, muss nur eine oder müssen zwei Bedingungen erfüllt sein?",
        erklaerung: "ODER: Hier muss nur eine Bedingung erfüllt sein, um gratis ins Kino reinzukommen. Man kommt gratis rein, wenn man eine Jahreskarte hat und man kommt ebenfalls gratis rein, wenn man Geburtstag hat. Max hat eine Jahreskarte, da also eine Bedingung erfüllt ist, kommt er gratis rein.",
    },
    {
        frage: "Du hast einen Eimer, in den maximal 5 Bälle passen. In deinem Korb liegen 10 Bälle. Du wirfst so lange Bälle in den Eimer, bis er voll ist (also 5 Bälle drin sind). Wie viele Bälle liegen danach im Eimer?",
        antworten: [
            "10 Bälle",
            "Keine Bälle",
            "15 Bälle",
            "5 Bälle"
        ],
        richtigeAntwort: 3,
        tipp: "Wie viele Bälle passen in den Eimer? In den Eimer können nicht mehr Bälle drin sein, als rein passen.",
        erklaerung: "Du kannst nur so viele Bälle in den Korb werfen wie auch rein passen. In den Korb passen nur 5 Bälle rein, das bedeutet selbst wenn du mehr als 5 Bälle hast, kannst du trotzdem nur 5 Bälle hineinwerfen, die restlichen bleiben außerhalb des Korbs.",
    },
    {
        frage: "Du speicherst einen Namen ab: name = \"Mia\". Später im Code schreibst du: name = \"Leo\". Was gibt der Befehl sage(name) jetzt aus?",
        antworten: [
            "Mia",
            "Gar nichts, es gibt einen Fehler",
            "Leo",
            "Mia Leo",
        ],
        richtigeAntwort: 2,
        tipp: "Das \"=\" teilt einer Variablen einen Wert zu, ein Wert kann im Code geändert werden.",
        erklaerung: "Jedes mal wenn du einer Variable einen neuen Wert zuweist, wird der alte Wert überschrieben.",
    },
    {
        frage: "Ein kleiner Roboter steht frei auf dem Flur und hat vor sich keine Wand. Seine Regel lautet: WENN vor dir eine Wand ist, DANN drehe dich nach rechts, SONST gehe einen Schritt vor. Was tut der Roboter?",
        antworten: [
            "Er dreht sich nach rechts.",
            "Er bleibt stehen und macht nichts.",
            "Er schaltet sich ab.",
            "Er geht einen Schritt vor"
        ],
        richtigeAntwort: 3,
        tipp: "Was macht der Roboter, wenn er auf keine Wand trifft?",
        erklaerung: "Der Roboter steht frei, er hat also keine Wand vor sich. Wir wissen folgendes: Wenn der Roboter keine Wand vor sich hat, geht er einen Schritt vor. Also wissen wir, dass unser Roboter einen Schritt nach vorne geht.",
    },
    {
        frage: "Wenn du beim Programmieren Werte in einer Liste speicherst, fängt der Computer beim Zählen immer bei ___ an.",
        antworten: [
            "1",
            "0",
            "Der Computer weiß nicht wo er anfangen soll."
        ],
        richtigeAntwort: 1,
        tipp: "Computer zählen anders als es Menschen machen.",
        erklaerung: "Computer fangen in den allermeisten Fällen mit dem Zählen bei 0 an, wenn man es nicht anderes definiert. Das heißt, wenn wir eine Liste haben:\nmeineListe = (5, 19, 21, 64);\nDann ist das 0.Element oder meineListe[0] hat den Wert 5.\nDas 1. Element oder meineListe[1] hat den Wert 19.\nDas 2. Element oder meineListe[2] hat den Wert 21.\nDas 3. Element oder meineListe[3] hat den Wert 64.",
    },
    {
        frage: "Welcher Datentyp ist am besten geeignet, um den Preis eines Artikels (z. B. 4.99) in einem Programm präzise zu speichern?",
        antworten: [
            "Float (Fließkommazahl) | Beispiel: 3.14",
            "Integer (Ganzzahl) | Beispiel: 3",
            "String (Zeichenkette) | Beispiel: \"drei\"",
            "Boolean (Wahrheitswert) | Beispiel: true"
        ],
        richtigeAntwort: 0,
        tipp: "Welchem Beispiel ist der Preis eines Artikel am ähnlichsten?",
        erklaerung: "Für einen Wert wie 4.99 ist eine Fließkommazahl am besten geeignet, da alle andere \"Datentypen\" nicht in der Lage sind die Zahl so zu speichern, dass man auch im Nachhinein noch damit arbeiten kann.\nBeispielsweise könnte man 4.99 auch als String speichern also:\nmeineZahl = \"4.99\";Allerdings würde unsere Programmiersprache dies nicht als Zahl, sondern als Text interpretieren, und somit sind wir nicht mehr in der Lage mit diesem Wert Rechnungen durchzuführen.",
    },
    {
        frage: "Gegeben ist die Liste farben = [\"rot\", \"grün\", \"blau\", \"gelb\"]. Welches Element wird durch den Ausdruck farben[2] ausgegeben?",
        antworten: [
            "\"rot\"",
            "\"grün\"",
            "\"blau\"",
            "\"gelb\""
        ],
        richtigeAntwort: 2,
        tipp: "Erinnere dich daran, wo ein Computer anfängt zu zählen.",
        erklaerung: "Wenn wir anfangen bei 0 zu zählen:\n0. Element: \"rot\"\n1. Element: \"grün\"\n2. Element: \"blau\";\n3. Element: \"gelb\"",
    },
    {
        frage: "Welches Ergebnis liefert die Berechnung 17 % 5 mit dem Modulo-Operator?",
        antworten: [
            "3",
            "3.4",
            "2",
            "1"
        ],
        richtigeAntwort: 2,
        tipp: "Der Modulo-Operator gibt den Rest eine Division (Geteilt rechnen) zurück, das heißt wie viel bleibt übrig, wenn du 17 durch 5 rechnest, wenn du keine Kommazahl haben darfst?",
        erklaerung: "Der Modulo Operator % gibt den Rest einer Division zurück.\nZum Beispiel wenn wir 9 / 3 rechnen, wissen wir, dass die 3 genau dreimal in die 9 passt. Wenn wir aber 10 / 3 rechnen, haben wir 3,333.... Normalerweise würden wir es als Kommazahl darstellen, aber wir könnten auch sagen, dass die 3 dreimal in die 10 passt und wir 1 übrig haben. Also 3 Rest 1. Dieser Rest der bei der Division übrig bleibt, können wir durch den Modulo % Operator darstellen. Das Bedeutet 17 / 5 wäre 3 Rest 2, da die 5 dreimal in die 17 reinpasst und genau 2 übrig bleiben. Somit bekommen wir 17 % 5 = 2.",
    }
]