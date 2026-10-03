let aktuelleFrageIndex = 0;
let antwortAusgewaehlt = null;
let ausgewaehlteAntworten = []; 
let gepruefteFragen = [];
let richtigeAntworten = 0;

let istErklaerung = false;
let tippText;
let tippButton;
let antwortButton;
let weiterButton;
let zurueckButton;

const frageElement = document.getElementById("frage");
const antwortenElement = document.getElementById("antworten");
weiterButton = document.getElementById("weiter");
zurueckButton = document.getElementById("zurueck");

function zeigeFrage() {  
    antwortAusgewaehlt = null;
    istErklaerung = false;

    weiterButton.disabled = true;

    if (aktuelleFrageIndex == systemintegrationFragen.length -1) {
        weiterButton.textContent = "Quiz beenden";
    } else {
        weiterButton.textContent = "Weiter";
    }

    zurueckButton.style.display = aktuelleFrageIndex == 0 ? "none" : "block";

    const aktuelleFrage = systemintegrationFragen[aktuelleFrageIndex];

    frageElement.textContent = aktuelleFrage.frage;

    antwortenElement.innerHTML = "";

    aktuelleFrage.antworten.forEach(function(antwort, index) {
        const button = document.createElement("button");

        button.textContent = antwort;
        button.classList.add("antwort-button");

        if (ausgewaehlteAntworten[aktuelleFrageIndex] == index) {
            button.classList.add("ausgewaehlt");
            antwortAusgewaehlt = index;
        }

        button.addEventListener("click", function() {
            if (button.disabled) {
                return;
            }

            antwortAusgewaehlt = index;
            ausgewaehlteAntworten[aktuelleFrageIndex] = index;

            const alleButtons = antwortenElement.querySelectorAll(".antwort-button");

            alleButtons.forEach(function(button) {
                button.classList.remove("ausgewaehlt");
            });

            button.classList.add("ausgewaehlt");
        });

        antwortenElement.appendChild(button);
    });

    tippButton = document.createElement("button");
    tippButton.textContent = "› Tipp";;

    tippText = document.createElement("div");
    tippText.textContent = aktuelleFrage.tipp;
    tippText.style.display = "none";

    tippButton.addEventListener("click", function() {
        if (tippText.style.display == "none") {
            tippText.style.display = "block";
            if (istErklaerung) {
                tippButton.textContent = "⌄ Erklärung";
            } else {
                tippButton.textContent = "⌄ Tipp";
            }

        } else {
            tippText.style.display = "none";
            if (istErklaerung) {
                tippButton.textContent = "› Erklärung";
            } else {
                tippButton.textContent = "› Tipp";
            }
        }
    });

    antwortenElement.appendChild(tippButton);
    antwortenElement.appendChild(tippText);

    antwortButton = document.createElement("button");

    antwortButton.textContent = "Antwort prüfen";
    
    antwortButton.style.display = "block";
    
    antwortButton.addEventListener("click", function() {
        if (antwortAusgewaehlt == null) {
            alert("Bitte wähle zuerst eine Antwort aus.");
            return;
        }

        pruefeAntwort();
    });

    antwortenElement.appendChild(antwortButton);

    if (gepruefteFragen[aktuelleFrageIndex] == true) {
        pruefeAntwort();
    }
}

function pruefeAntwort() {
    const aktuelleFrage = systemintegrationFragen[aktuelleFrageIndex];
    
    const warSchonGeprueft = gepruefteFragen[aktuelleFrageIndex] == true;
    
    if (!warSchonGeprueft && antwortAusgewaehlt == aktuelleFrage.richtigeAntwort) {
        richtigeAntworten++;
    }
    
    const antwortButtons = antwortenElement.querySelectorAll(".antwort-button");

    antwortButtons.forEach(function(button) {
        button.disabled = true;
    });

    if (antwortAusgewaehlt == aktuelleFrage.richtigeAntwort) {
        antwortButtons[antwortAusgewaehlt].classList.add("richtig");
    } else {
        antwortButtons[antwortAusgewaehlt].classList.add("falsch");
        antwortButtons[aktuelleFrage.richtigeAntwort].classList.add("richtig");
    }

    istErklaerung = true;

    tippButton.textContent = "⌄ Erklärung";
    tippText.textContent = aktuelleFrage.erklaerung;
    tippText.style.display = "block";

    antwortButton.style.display = "none";

    weiterButton.disabled = false;

    gepruefteFragen[aktuelleFrageIndex] = true;
}

zeigeFrage();

weiterButton.addEventListener("click", function() {
    if (aktuelleFrageIndex < systemintegrationFragen.length - 1) {
        aktuelleFrageIndex++;
        zeigeFrage();
    } else {
        localStorage.setItem("richtigeAntworten", richtigeAntworten);
        localStorage.setItem("anzahlFragen", systemintegrationFragen.length);
        localStorage.setItem("fachrichtung", "Anwendungsentwicklung");
        
        window.location.href = "ergebnis-fachquiz.html";
    }
});

zurueckButton.addEventListener("click", function() {
    if (aktuelleFrageIndex > 0) {
        aktuelleFrageIndex--;
        zeigeFrage();
    }
});