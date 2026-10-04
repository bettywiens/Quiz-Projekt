if (localStorage.getItem("punkteFIAE") === null || localStorage.getItem("punkteFISI") === null) {
    window.location.href = "index.html";
}

const punkteFIAE = Number(localStorage.getItem("punkteFIAE"));
const punkteFISI = Number(localStorage.getItem("punkteFISI"));

const summePunkte = punkteFIAE + punkteFISI;

const prozentFIAE = Math.round((punkteFIAE / summePunkte) * 100);
const prozentFISI = Math.round((punkteFISI / summePunkte) * 100);

let passendeFachrichtung = "";

if (punkteFIAE > punkteFISI) {
    passendeFachrichtung = "Anwendungsentwicklung (FIAE)";
} else if (punkteFISI > punkteFIAE) {
    passendeFachrichtung = "Systemintegration (FISI)";
} else {
    passendeFachrichtung = "Gleichstand (FIAE oder FISI)";
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
            <p>Anwendungsentwicklung: <span class='orange'>${prozentFIAE}%</span></p>
            <div class="balken">
                <div class="balken-fuellung" style="width: ${prozentFIAE}%"></div>
            </div>

            <p>Systemintegration: <span class='orange'>${prozentFISI}%</span></p>
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