//CACHE DEL DOM

const prodottoRicevutoInput = document.querySelector("#prodottoRicevuto");
const quantitaRicevutaInput = document.querySelector("#quantitaRicevuta");
const dataDiRicezioneInput = document.querySelector("#dataDiRicezione");
const numeroDiFatturaInput = document.querySelector("#numeroDiFattura");

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
//Prodotto ricevuto (solo alfabetico con spazi, virgola e trattino)
//quantità ricevuta (solo numeri)
//data di ricezione (obbligatorio)  
//numero di fattura (solo numeri) 

//reset errors
for (let error of errorSpans) {
    error.innerHTML = "";
  }
  let valid = true;

//validazione campi
//Prodotto ricevuto (solo alfabetico con spazi, virgola e trattino)
if (prodottoRicevutoInput.value.trim().length == 0 || !isNomeValid(prodottoRicevutoInput.value)) {
    prodottoRicevutoInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

//quantità ricevuta (solo numeri) 
  if (quantitaRicevutaInput.value.trim().length == 0 || !isTelValid(quantitaRicevutaInput.value)) {
    quantitaRicevutaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}

//data di ricezione (obbligatorio)  
if (dataDiRicezioneInput.value.trim().length == 0) {
    dataDiRicezioneInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}

//numero di fattura (solo numeri) 
if (numeroDiFatturaInput.value.trim().length == 0 || !isTelValid(numeroDiFatturaInput.value)) {
    numeroDiFatturaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}  



/* (se tutto è validato...) */

if (valid) {
    messagePar.classList.remove("error");
    messagePar.classList.add("success");
    messagePar.innerHTML = "Ordine registrato con successo";
    let campi = document.querySelector("form").elements;
    for (let campo of campi) {
      if (campo.type != "submit") {
        campo.value = "";
      }
    }
    prodottoRicevutoInput.focus();
  } else {
    messagePar.classList.remove("success");
    messagePar.classList.add("reject");
    messagePar.innerHTML = "Registrazione ordine fallita";
  }
});  