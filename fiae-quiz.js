let ausgewaehlteAntwort = null;

let aktuelleFrageIndex = 0;

let ausgewaehlteAntworten = [];


function zeigeFrage(){
    ausgewaehlteAntwort = null; /* Antwortauswahl wird bei jeder Frage zurückgesetzt */

    if (ausgewaehlteAntworten[aktuelleFrageIndex] != null) {
        ausgewaehlteAntwort = ausgewaehlteAntworten[aktuelleFrageIndex];
    }

    /*const quiz = document.getElementById("quiz");  sucht div id="quiz" */
    const frage = document.getElementById("frage");
    const antworten = document.getElementById("antworten");

    antworten.innerHTML = "";

    const aktuelleFrage = anwendungsentwicklungFragen[aktuelleFrageIndex]; /* holt erstmal die erste Frage */
    
    frage.textContent = aktuelleFrage.frage;

    /*antworten.innerHTML = aktuelleFrage.frage;  greifen auf den Text der Frage zu */     

    for (let i = 0; i < aktuelleFrage.antworten.length; i++) {
        const button = document.createElement("button"); /* erstellt für jedes Element einen button */

        button.textContent = aktuelleFrage.antworten[i]; /* gibt button den jeweiligen Text von der Antwort */

        if(ausgewaehlteAntwort == aktuelleFrage.antworten[i]) {
            button.classList.add("ausgewaehlt");
        }

        button.addEventListener("click", function(){
            const vorherigeAuswahl = quiz.querySelector(".ausgewaehlt"); /* Sucht nach einem button mit der jeweiligen Klasse */

            if (vorherigeAuswahl) {
                vorherigeAuswahl.classList.remove("ausgewaehlt"); /* Wenn gefunden wurde entfernen wir es */
            }

            button.classList.add("ausgewaehlt"); /* wir markieren den ausgeahlten button */
            

            ausgewaehlteAntwort = aktuelleFrage.antworten[i]; /* Wenn eine Antwort ausgewählt wird, wird diese Auswahl gespeichert */

            ausgewaehlteAntworten[aktuelleFrageIndex] = ausgewaehlteAntwort; /* Antwort wird gespeichert */
            
            console.log(ausgewaehlteAntworten);
        });

        if(aktuelleFrageIndex == 0) {
            zurueckButton.style.display = "none";
        } else {
            zurueckButton.style.display = "block";
        }

        if (aktuelleFrageIndex == fachrichtungsFragen.length - 1) {
            weiterButton.textContent = "Ergebnis anzeigen";
        } else {
            weiterButton.textContent = "Weiter";
        }
        
        antworten.appendChild(button); /* setzte button auf die website */
    }
}

const weiterButton = document.getElementById("weiter");

weiterButton.addEventListener("click", function(){
    
    /* Überpüfen ob eine Antwort ausgewählt wurde */
    if (ausgewaehlteAntwort == null) { 
        alert("Bitte wähle zuerst eine Antwort aus.");
        return;
    }

    if (aktuelleFrageIndex == fachrichtungsFragen.length - 1){
        zeigeErgebnis();
    } else {
        aktuelleFrageIndex++;
        zeigeFrage();
    }

})

const zurueckButton = document.getElementById("zurueck");

zurueckButton.addEventListener("click", function(){
    if(aktuelleFrageIndex > 0) {
        aktuelleFrageIndex--;
        zeigeFrage();
    }
})

zeigeFrage();