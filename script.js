let ausgewaehlteAntwort = null;

let aktuelleFrageIndex = 0;

let ausgewaehlteAntworten = [];

let punkteFIAE = 0;
let punkteFISI = 0;

let vorherigePunkteFIAE = 0;
let vorherigePunkteFISI = 0;

function zeigeFrage(){
    ausgewaehlteAntwort = null; /* Antwortauswahl wird bei jeder Frage zurückgesetzt */

    const quiz = document.getElementById("quiz"); /* sucht div id="quiz" */

    const aktuelleFrage = fachrichtungsFragen[aktuelleFrageIndex]; /* holt erstmal die erste Frage */

    quiz.innerHTML = aktuelleFrage.frage; /* greifen auf den Text der Frage zu */     

    for (let i = 0; i < aktuelleFrage.antworten.length; i++) {
        const button = document.createElement("button"); /* erstellt für jedes Element einen button */

        button.textContent = aktuelleFrage.antworten[i]; /* gibt button den jeweiligen Text von der Antwort */

        button.addEventListener("click", function(){
            const vorherigeAuswahl = quiz.querySelector(".ausgewaehlt"); /* Sucht nach einem button mit der jeweiligen Klasse */

            if (vorherigeAuswahl) {
                vorherigeAuswahl.classList.remove("ausgewaehlt"); /* Wenn gefunden wurde entfernen wir es */
            }

            button.classList.add("ausgewaehlt"); /* wir markieren den ausgeahlten button */
            

            ausgewaehlteAntwort = aktuelleFrage.antworten[i]; /* Wenn eine Antwort ausgewählt wird, wird diese Auswahl gespeichert */

            punkteFIAE -= vorherigePunkteFIAE;
            punkteFISI -= vorherigePunkteFISI;

            punkteFIAE += aktuelleFrage.punkteFIAE[i];
            punkteFISI += aktuelleFrage.punkteFISI[i];

            vorherigePunkteFIAE = aktuelleFrage.punkteFIAE[i];
            vorherigePunkteFISI = aktuelleFrage.punkteFISI[i];

            console.log(punkteFIAE);
            console.log(punkteFISI);

            ausgewaehlteAntworten[aktuelleFrageIndex] = ausgewaehlteAntwort; /* Antwort wird gespeichert */
            
            console.log(ausgewaehlteAntworten);
        });
        
        quiz.appendChild(button); /* setzte button auf die website */
    }
}


function zeigeErgebnis() {
    const ergebnis = document.getElementById("ergebnis");
    
    ergebnis.textContent = ausgewaehlteAntworten;
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

zeigeFrage();