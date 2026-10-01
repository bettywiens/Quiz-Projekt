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
    </div>
`;

const weiteresQuiz = document.getElementById("weiteres-quiz");

if (passendeFachrichtung == "Anwendungsentwicklung") {
    weiteresQuiz.innerHTML = `
        <button onclick="window.location.href='FIAE-Quiz.html'" class="weiterleiten">
            Zum FIAE-Quiz
        </button>
    `;
} else if (passendeFachrichtung == "Systemintegration") {
    weiteresQuiz.innerHTML = `
        <button onclick="window.location.href='FISI-Quiz.html'" class="weiterleiten">
            Zum FISI-Quiz
        </button>
    `;
}