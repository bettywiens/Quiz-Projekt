if (localStorage.getItem("punkteFIAE") === null || localStorage.getItem("punkteFISI") === null) {
    window.location.href = "index.html";
}

const punkteFIAE = Number(localStorage.getItem("punkteFIAE"));
const punkteFISI = Number(localStorage.getItem("punkteFISI"));

const prozentFIAE = (punkteFIAE / 12) * 100;
const prozentFISI = (punkteFISI / 12) * 100;

let passendeFachrichtung = "";

if (punkteFIAE > punkteFISI) {
    passendeFachrichtung = "Anwendungsentwicklung";
} else if (punkteFISI > punkteFIAE) {
    passendeFachrichtung = "Systemintegration";
} else {
    passendeFachrichtung = "Gleichstand";
}

console.log("FIAE: ", punkteFIAE);
console.log("FISI: ", punkteFISI);
console.log("Ergebnis: ", passendeFachrichtung);

const ergebnis = document.getElementById("ergebnis");
ergebnis.innerHTML = `
    <div class="ergebnis-darstellung">
        <p>Deine passende Fachrichtung ist:</p>
        <p id="fachrichtung-titel">${passendeFachrichtung}<p>
        <div id="balken-darstellung">
            <p>Anwendungsentwicklung: ${punkteFIAE} / 12 Punkte</p>
            <div class="balken">
                <div class="balken-fuellung" style="width: ${prozentFIAE}%"></div>
            </div>

            <p>Systemintegration: ${punkteFISI} / 12 Punkte</p>
            <div class="balken">
                <div class="balken-fuellung" style="width: ${prozentFISI}%"></div>
            </div>
            </div>
            <div id="weiteres-quiz" class="navigation"></div>
    </div>
`;

const weiteresQuiz = document.getElementById("weiteres-quiz");

weiteresQuiz.innerHTML = `
    <button onclick="window.location.href='fiae-start.html'" class="weiterleiten" id="links"">
        Zum FIAE-Quiz
    </button>

    <button onclick="window.location.href='fisi-start.html'" class="weiterleiten" id="rechts"">
        Zum FISI-Quiz
    </button>
`