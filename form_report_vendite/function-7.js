//CACHE DEL DOM

const nomeDipendenteInput = document.querySelector("#nomeDipendente");
const prodottoVendutoInput = document.querySelector("#prodottoVenduto");
const quantitaVendutaInput = document.querySelector("#quantitaVenduta");
const totaleInput = document.querySelector("#totale");

const submitBtn = document.querySelector("#btn");
const errorSpans = document.querySelectorAll("span.error");
const messagePar = document.querySelector(".success");

/* funzioni per la validazione dei campi */

function isNomeValid(valore) {
    let pattern = /^[A-Za-z\s-,]+$/;
    return pattern.test(valore);
  }

function isTelValid(valore) {
    let pattern = /^[0-9\s]+$/;
    return pattern.test(valore);
  }  

//GESTIONE EVENTI

submitBtn.addEventListener("click", function (e) {
    e.preventDefault(); //blocco della submit
    
//criteri di validazione:
//Nome dipendente (solo alfabetico con spazi, virgola e trattino)
//Prodotto venduto (solo obbligatorietà)
//Quantità venduta (solo obbligatorietà)
//Totale (read only)  


//reset errors
for (let error of errorSpans) {
    error.innerHTML = "";
  }
  let valid = true;

//validazione campi
//Nome dipendente (solo alfabetico con spazi, virgola e trattino)
if (nomeDipendenteInput.value.trim().length == 0 || !isNomeValid(nomeDipendenteInput.value)) {
    nomeDipendenteInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

//Prodotto venduto (solo obbligatorietà)
if (prodottoVendutoInput.value.trim().length == 0) {
    prodottoVendutoInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}  


//Quantità venduta (solo obbligatorietà)
if (quantitaVendutaInput.value.trim().length == 0) {
    quantitaVendutaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}  

//Totale (read only)  


/* (se tutto è validato...) */

if (valid) {
    messagePar.classList.remove("error");
    messagePar.classList.add("success");
    messagePar.innerHTML = "Report vendite inviato con successo";
    let campi = document.querySelector("form").elements;
    for (let campo of campi) {
      if (campo.type != "submit") {
        campo.value = "";
      }
    }
    nomeDipendenteInput.focus();
  } else {
    messagePar.classList.remove("success");
    messagePar.classList.add("reject");
    messagePar.innerHTML = "Invio report fallito";
  }
});  


//funzione per il calcolo del totale

function calcolaTotale() {
    const prodotto = document.getElementById("prodottoVenduto").value;
    const quantita = parseFloat(document.getElementById("quantitaVenduta").value);
    const unita = document.getElementById("unita").value;
    let prezzoUnitario;

    // Definisci i prezzi per unità dei prodotti
    const prezzi = {
        'Prodotto1': 1, // esempio prezzo per pezzo
        'Prodotto2': 2, // esempio prezzo per grammo
        'Prodotto3': 3, // esempio prezzo per kilogrammo
    };

    // Assegna il prezzo unitario in base al prodotto selezionato
    if (prezzi[prodotto]) {
        prezzoUnitario = prezzi[prodotto];
    } else {
        alert("Seleziona un prodotto valido.");
        return;
    }

    // Calcola il totale
    let totale;
    if (unita === "Pz") {
        totale = quantita * prezzoUnitario;
    } else if (unita === "Gr") {
        totale = quantita * prezzoUnitario;
    } else if (unita === "Kg") {
        totale = quantita * prezzoUnitario;
    } else {
        alert("Seleziona un'unità valida.");
        return;
    }

    // Mostra il totale
    document.getElementById("totale").value = totale.toFixed(2) + " €";
}

// Aggiungi event listeners per calcolare il totale in tempo reale
quantitaVendutaInput.addEventListener('input', calcolaTotale);
unitaSelect.addEventListener('change', calcolaTotale);
prodottoSelect.addEventListener('change', calcolaTotale);

