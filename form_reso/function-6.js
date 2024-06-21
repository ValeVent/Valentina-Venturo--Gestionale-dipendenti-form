//CACHE DEL DOM

const prodottoCoinvoltoInput = document.querySelector("#prodottoCoinvolto");
const tipoDiMovimentoInput = document.querySelector("#tipoDiMovimento");
const quantitaInput = document.querySelector("#quantita");
const dataDelMovimentoInput = document.querySelector("#dataDelMovimento");
const motivoDelResoInput = document.querySelector("#motivoDelReso");
const allegaDocumentoInput = document.querySelector("#allegaDocumento");

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
//Prodotto coinvolto (solo alfabetico con spazi, virgola e trattino)
//Tipo di movimento (solo obbligatorietà)
//quantità (solo numeri)
//Data del movimento (solo obbligatorietà)
//Motivo del reso (solo obbligatorietà)

//reset errors
for (let error of errorSpans) {
    error.innerHTML = "";
  }
  let valid = true;

//validazione campi
//Prodotto coinvolto (solo alfabetico con spazi, virgola e trattino)
if (prodottoCoinvoltoInput.value.trim().length == 0 || !isNomeValid(prodottoCoinvoltoInput.value)) {
    prodottoCoinvoltoInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }


//Tipo di movimento (solo obbligatorietà)
if (tipoDiMovimentoInput.value.trim().length == 0) {
    tipoDiMovimentoInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}  


//quantità (solo numeri)
if (quantitaInput.value.trim().length == 0 || !isTelValid(quantitaInput.value)) {
    quantitaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}

//Data del movimento (solo obbligatorietà)
if (dataDelMovimentoInput.value.trim().length == 0) {
    dataDelMovimentoInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}  


//Motivo del reso (solo obbligatorietà)
if (motivoDelResoInput.value.trim().length == 0) {
    motivoDelResoInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}  




/* (se tutto è validato...) */

if (valid) {
    messagePar.classList.remove("error");
    messagePar.classList.add("success");
    messagePar.innerHTML = "Reso registrato con successo";
    let campi = document.querySelector("form").elements;
    for (let campo of campi) {
      if (campo.type != "submit") {
        campo.value = "";
      }
    }
    prodottoCoinvoltoInput.focus();
  } else {
    messagePar.classList.remove("success");
    messagePar.classList.add("reject");
    messagePar.innerHTML = "Registrazione reso fallita";
  }
});  