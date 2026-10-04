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
        tipp: "Vergleiche die Antworten mit den Programmiersprachen, die du bereits kennst.",
        erklaerung: "FluxScript ist eine ausgedachte Programmiersprache.\nDer Name ist angelehnt an die bekannten Programmiersprachen <span class='orange'>JavaScript</span> und <span class='orange'>TypeScript</span>."

    },
    {
        frage: "Stell dir vor, du hast eine kleine Box namens <span class='code'>punkte</span> und packst die Zahl <span class='code'>5</span> hinein. Danach kommt der Befehl: <br><span class='code'>punkte = punkte + 3</span>.<br>Was befindet sich jetzt in der Box <span class='code'>punkte</span>?",
        antworten: [
            "3",
            "8",
            "5",
            "15"
        ],
        richtigeAntwort: 1,
        tipp: "Denk daran, dass <span class='code'>punkte</span> bereits einen Wert von <span class='code'>5</span> hat.",
        erklaerung: "Stell es dir so vor, wie gesagt sind in deiner Box <span class='code'>5</span> Punkte. Wenn wir nun <span class='code'>punkte = punkte + 3</span> rechnen, dann sieht die Rechnung eigentlich so aus:<br><span class='code'>punkte = 5 + 3</span>, oder noch anschaulicher:<br><span class='code'>neueAnzahlPunkte = alteAnzahlPunkte + 3</span>.<br>Dies macht Sinn, da auf der linken Seite immer der <span class='orange'>Name der Variable</span> steht, den wir einen neuen Wert zuteilen wollen, und rechts der <span class='orange'>neue Wert</span>."
    },
    {
        frage: "Du schreibst eine Regel für deinen Wecker: <span class='orange'>WENN</span> heute Samstag ist, <span class='orange'>DANN</span> schlafe länger, <span class='orange'>SONST</span> steh um 7 Uhr auf.<br>Heute ist Dienstag. Was passiert?",
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
        frage: "Für ein Fahrgeschäft im Freizeitpark gilt die Regel:<br>Du musst größer als 1,20 m <span class='orange'>UND</span> mindestens 10 Jahre alt sein. Anna ist 1,35 m groß, aber erst 9 Jahre alt.<br>Darf sie mitfahren?",
        antworten: [
            "Ja, weil sie groß genug ist.",
            "Ja, weil eine Eigenschaft reicht.",
            "Nein, weil sie jünger als 10 Jahre ist.",
            "Nein, weil beide Werte zusammen gerechnet werden müssen."
        ],
        richtigeAntwort: 2,
        tipp: "Betrachte das <span class='orange'>UND</span>, muss nur eine oder müssen zwei Bedingungen erfüllt sein?",
        erklaerung: "<span class='orange'>UND:</span> Damit sie mitfahren darf müssen 2 Bedingungen erfüllt sein.<br>Sie muss 1,20m groß sein <span class='orange'>und</span> 10 Jahre alt sein. Da sie allerdings nur größer als 1,20 ist und nicht mindestens 10 Jahre alt ist darf sie nicht mitfahren, da nur eine der zwei Bedingungen erfüllt ist.",
    },
    {
        frage: "Im Kino gilt an der Kasse: Du kommst gratis rein, wenn du heute Geburtstag hast <span class='orange'>ODER</span> eine Jahreskarte besitzt.<br>Max hat heute nicht Geburtstag, hat aber eine Jahreskarte.<br>Kommt er gratis rein?",
        antworten: [
            "Ja, weil eine der beiden Bedingungen erfüllt ist.",
            "Nein, es muss beides gleichzeitig wahr sein.",
            "Nein, weil er keinen Geburtstag hat.",
            "Ja, aber nur, wenn er zusätzlich Popcorn kauft"
        ],
        richtigeAntwort: 0,
        tipp: "Betrachte das <span class='orange'>ODER</span>, muss nur eine oder müssen zwei Bedingungen erfüllt sein?",
        erklaerung: "<span class='orange'>ODER</span>: Hier muss nur eine Bedingung erfüllt sein, um gratis ins Kino reinzukommen. Man kommt gratis rein, wenn man eine Jahreskarte hat und man kommt ebenfalls gratis rein, wenn man Geburtstag hat.<br>Max hat eine Jahreskarte, da also eine Bedingung erfüllt ist, kommt er gratis rein.",
    },
    {
        frage: "Du hast einen Eimer, in den <span class='orange'>maximal</span> 5 Bälle passen. In deinem Korb liegen 10 Bälle. Du wirfst so lange Bälle in den Eimer, bis er voll ist.<br>Wie viele Bälle liegen danach im Eimer?",
        antworten: [
            "10 Bälle",
            "Keine Bälle",
            "15 Bälle",
            "5 Bälle"
        ],
        richtigeAntwort: 3,
        tipp: "Wie viele Bälle passen in den Eimer? In den Eimer können nicht mehr Bälle drin sein, als rein passen.",
        erklaerung: "Du kannst nur so viele Bälle in den Korb werfen wie auch rein passen. In den Korb passen <span class='orange'>nur 5 Bälle</span> rein, das bedeutet selbst wenn du mehr als 5 Bälle hast, kannst du trotzdem nur 5 Bälle hineinwerfen, die restlichen bleiben außerhalb des Korbs.",
    },
    {
        frage: "Du speicherst einen Namen ab: <span class='code'>name = \"Mia\"</span>. Später im Code schreibst du: <span class='code'>name = \"Leo\"</span>.<br>Was gibt der Befehl <span class='code'>sage(name)</span> jetzt aus?",
        antworten: [
            "Mia",
            "Gar nichts, es gibt einen Fehler",
            "Leo",
            "Mia Leo",
        ],
        richtigeAntwort: 2,
        tipp: "Das <span class='code'>=</span> teilt einer Variablen einen Wert zu, ein Wert kann im Code geändert werden.",
        erklaerung: "Jedes mal wenn du einer Variable einen neuen Wert zuweist, wird der alte Wert überschrieben.",
    },
    {
        frage: "Ein kleiner Roboter steht frei auf dem Flur und hat vor sich keine Wand. Seine Regel lautet: <span class='orange'>WENN</span> vor dir eine Wand ist, <span class='orange'>DANN</span> drehe dich nach rechts, <span class='orange'>SONST</span> gehe einen Schritt vor.<br>Was tut der Roboter?",
        antworten: [
            "Er dreht sich nach rechts.",
            "Er bleibt stehen und macht nichts.",
            "Er schaltet sich ab.",
            "Er geht einen Schritt vor"
        ],
        richtigeAntwort: 3,
        tipp: "Was macht der Roboter, wenn er auf keine Wand trifft?",
        erklaerung: "Der Roboter steht frei, er hat also keine Wand vor sich.<br>Wir wissen folgendes: Wenn der Roboter keine Wand vor sich hat, geht er einen Schritt vor. Also wissen wir, dass unser Roboter einen Schritt nach vorne geht.",
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
        erklaerung: "Computer fangen in den allermeisten Fällen mit dem Zählen bei <span class='code'>0</span> an, wenn man es nicht anders definiert.<br>Das heißt, wenn wir eine Liste haben:<br><span class='code'>meineListe = [5, 19, 21, 64];</span><br>Dann ist das <span class='orange'>0. Element</span> oder <span class='code'>meineListe[0]</span> hat den Wert <span class='code'>5</span>.<br>Das <span class='orange'>1. Element</span> oder <span class='code'>meineListe[1]</span> hat den Wert <span class='code'>19</span>.<br>Das <span class='orange'>2. Element</span> oder <span class='code'>meineListe[2]</span> hat den Wert <span class='code'>21</span>.<br>Das <span class='orange'>3. Element</span> oder <span class='code'>meineListe[3]</span> hat den Wert <span class='code'>64</span>.",
    },
    {
        frage: "Welcher Datentyp ist am besten geeignet, um den <span class='orange'>Preis eines Artikels</span> (z. B. 4.99) in einem Programm präzise zu speichern?",
        antworten: [
            "Float (Fließkommazahl) | Beispiel: <span class='code'>3.14</span>",
            "Integer (Ganzzahl) | Beispiel: <span class='code'>3</span>",
            "String (Zeichenkette) | Beispiel: <span class='code'>\"drei\"</span>",
            "Boolean (Wahrheitswert) | Beispiel: <span class='code'>true</span>"
        ],
        richtigeAntwort: 0,
        tipp: "Welchem Beispiel ist der Preis eines Artikel am ähnlichsten?",
        erklaerung: "Für einen Wert wie 4.99 ist eine <span class='orange'>Fließkommazahl</span> am besten geeignet, da alle andere <span class='orange'>\"Datentypen\"</span> nicht in der Lage sind die Zahl so zu speichern, dass man auch im Nachhinein noch damit arbeiten kann.<br>Beispielsweise könnte man 4.99 auch als String speichern also:<br><span class='code'>meineZahl = \"4.99\";</span><br>Allerdings würde unsere Programmiersprache dies nicht als Zahl, sondern als Text interpretieren, und somit sind wir nicht mehr in der Lage mit diesem Wert Rechnungen durchzuführen.",
    },
    {
        frage: "Gegeben ist die Liste:<br><span class='code'>farben = [\"rot\", \"grün\", \"blau\", \"gelb\"]</span>.<br>Welches Element wird durch den Ausdruck <span class='code'>farben[2]</span> ausgegeben?",
        antworten: [
            "<span class='code'>\"rot\"</span>",
            "<span class='code'>\"grün\"</span>",
            "<span class='code'>\"blau\"</span>",
            "<span class='code'>\"gelb\"</span>"
        ],
        richtigeAntwort: 2,
        tipp: "Erinnere dich daran, wo ein Computer anfängt zu zählen.",
        erklaerung: "Wenn wir anfangen bei <span class='code'>0</span> zu zählen:<br>0. Element: <span class='code'>\"rot\"</span><br>1. Element: <span class='code'>\"grün\"</span><br>2. Element: <span class='code'>\"blau\"</span><br>3. Element: <span class='code'>\"gelb\"</span>",
    },
    {
        frage: "Welches Ergebnis liefert die Berechnung <span class='code'>17 % 5</span> mit dem <span class='orange'>Modulo-Operator?</span>",
        antworten: [
            "3",
            "3.4",
            "2",
            "1"
        ],
        richtigeAntwort: 2,
        tipp: "Der Modulo-Operator gibt den <span class='orange'>Rest einer Division</span> (Geteilt rechnen) zurück, das heißt wie viel bleibt übrig, wenn du 17 durch 5 rechnest, wenn du keine Kommazahl haben darfst?",
        erklaerung: "Der Modulo Operator <span class='code'>%</span> gibt den <span class='orange'>Rest einer Division</span> zurück.<br>Zum Beispiel wenn wir <span class='code'>9 / 3</span> rechnen, wissen wir, dass die <span class='code'>3</span> genau dreimal in die <span class='code'>9</span> passt.<br>Wenn wir aber <span class='code'>10 / 3</span> rechnen, haben wir <span class='code'>3,333...</span>.<br>Normalerweise würden wir es als Kommazahl darstellen, aber wir könnten auch sagen, dass die <span class='code'>3</span> dreimal in die <span class='code'>10</span> passt und wir <span class='code'>1</span> übrig haben.<br>Also <span class='orange'>3 Rest 1</span>. Dieser Rest der bei der Division übrig bleibt, können wir durch den Modulo <span class='code'>%</span> Operator darstellen. Das Bedeutet <span class='code'>17 / 5</span> wäre <span class='orange'>3 Rest 2</span>, da die <span class='code'>5</span> dreimal in die <span class='code'>17</span> reinpasst und genau <span class='code'>2</span> übrig bleiben. Somit bekommen wir <span class='code'>17 % 5 = 2</span>.",
    }
]