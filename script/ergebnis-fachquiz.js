const richtigeAntworten = Number(localStorage.getItem("richtigeAntworten"));
const anzahlFragen = Number(localStorage.getItem("anzahlFragen"));
const fachrichtung = localStorage.getItem("fachrichtung"); 
const balkenfuellung = document.getElementById("balken-fuellung");

const prozent = (richtigeAntworten / anzahlFragen) * 100;
balkenfuellung.style.width = prozent + "%";

const ergebnisElement = document.getElementById("ergebnis");

ergebnisElement.innerHTML = "Du hast <span class='orange'>" + richtigeAntworten + " / " + anzahlFragen + "</span> Fragen richtig beantwortet.";

const ueberschriftElement = document.getElementById("ueberschrift");

ueberschriftElement.textContent = "Quiz " + fachrichtung + " abgeschlossen!";

const zurueckButton = document.getElementById("zurueck-zum-ersten-quiz");

zurueckButton.addEventListener("click", function() {
    window.location.href = "ergebnis.html";
})