let aktuelleFrageIndex = 0;
let antwortAusgewaehlt = null;
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

    weiterButton.disabled = true;

    const aktuelleFrage = anwendungsentwicklungFragen[aktuelleFrageIndex];

    frageElement.textContent = aktuelleFrage.frage;

    antwortenElement.innerHTML = "";

    aktuelleFrage.antworten.forEach(function(antwort, index) {
        const button = document.createElement("button");

        button.textContent = antwort;
        button.classList.add("antwort-button");

        button.addEventListener("click", function() {
            if (button.disabled) {
                return;
            }

            antwortAusgewaehlt = index;

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
            tippButton.textContent = "⌄ Tipp";
        } else {
            tippText.style.display = "none";
            tippButton.textContent = "› Tipp";
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
}

function pruefeAntwort() {
    const aktuelleFrage = anwendungsentwicklungFragen[aktuelleFrageIndex];

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

    tippButton.textContent = "⌄ Erklärung";
    tippText.textContent = aktuelleFrage.erklaerung;
    tippText.style.display = "block";

    antwortButton.style.display = "none";

    weiterButton.disabled = false;
}

zeigeFrage();

weiterButton.addEventListener("click", function() {
    if (aktuelleFrageIndex < anwendungsentwicklungFragen.length - 1) {
        aktuelleFrageIndex++;
        zeigeFrage();
    }
});

zurueckButton.addEventListener("click", function() {
    if (aktuelleFrageIndex > 0) {
        aktuelleFrageIndex--;
        zeigeFrage();
    }
});
