let ausgewaehlteAntwort = null;

let aktuelleFrageIndex = 0;

let ausgewaehlteAntworten = [];

let punkteFIAE = 0;
let punkteFISI = 0;

let vorherigePunkteFIAE = []; /* wir brauchen vorheige Punkte für alle Fragen */
let vorherigePunkteFISI = [];

function zeigeFrage(){
    ausgewaehlteAntwort = null; /* Antwortauswahl wird bei jeder Frage zurückgesetzt */

    if (ausgewaehlteAntworten[aktuelleFrageIndex] != null) {
        ausgewaehlteAntwort = ausgewaehlteAntworten[aktuelleFrageIndex];
    }

    const quiz = document.getElementById("quiz"); /* sucht div id="quiz" */

    const aktuelleFrage = fachrichtungsFragen[aktuelleFrageIndex]; /* holt erstmal die erste Frage */

    quiz.innerHTML = aktuelleFrage.frage; /* greifen auf den Text der Frage zu */     

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

            punkteFIAE -= vorherigePunkteFIAE[aktuelleFrageIndex] || 0; /* vorherige Punkte werden abgezogen, falls Antwort geändert wird */
            punkteFISI -= vorherigePunkteFISI[aktuelleFrageIndex] || 0;

            punkteFIAE += aktuelleFrage.punkteFIAE[i]; /* die Punkte der aktuellen Frage werden hinzugefügt */
            punkteFISI += aktuelleFrage.punkteFISI[i];

            vorherigePunkteFIAE[aktuelleFrageIndex] = aktuelleFrage.punkteFIAE[i]; /* jetzige Punkte werden als vorherige Punkte festgelegt */
            vorherigePunkteFISI[aktuelleFrageIndex] = aktuelleFrage.punkteFISI[i];

            console.log("FIAE:", punkteFIAE);
            console.log("FISI:", punkteFISI);

            ausgewaehlteAntworten[aktuelleFrageIndex] = ausgewaehlteAntwort; /* Antwort wird gespeichert */
            
            console.log(ausgewaehlteAntworten);
        });

        if(aktuelleFrageIndex == 0) {
            zurueckButton.style.display = "none";
        } else {
            zurueckButton.style.display = "block";
        }
        
        quiz.appendChild(button); /* setzte button auf die website */
    }
}


function zeigeErgebnis() {
    let prozentFIAE = (punkteFIAE / 12) * 100;
    let prozentFISI = (punkteFISI / 12) * 100;
    let passendeFachrichtung = "";
    
    const ergebnis = document.getElementById("ergebnis");

    if (punkteFIAE > punkteFISI) {
        passendeFachrichtung = "Anwendungsentwicklung";
    } else if (punkteFISI > punkteFIAE) {
        passendeFachrichtung = "Systemintegration";
    } else {
        passendeFachrichtung = "Gleichstand";
    }

    ergebnis.innerHTML = `
        <div>
            <p>Deine passende Fachrichtung ist:</p>
            <h2>${passendeFachrichtung}</h2>
            <p>Anwendungsentwicklung: ${punkteFIAE} / 12 Punkte</p>
            <div class="balken">
                <div class="balken-fuellung" style="width: ${prozentFIAE}%"></div>
            </div>

            <p>Systemintegration: ${punkteFISI} / 12 Punkte</p>
            <div class="balken">
                <div class="balken-fuellung" style="width: ${prozentFISI}%"></div>
            </div>
        </div>
    `;
    
    console.log("FIAE Prozent: ", prozentFIAE);
    console.log("FISI Prozent: ", prozentFISI);

    
    /*ergebnis.textContent = "FISI Punkte: " + punkteFISI + "\nFIAE Punkte: " + punkteFIAE;*/

    
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