//CACHE DEL DOM

const nomeProdottoInput = document.querySelector("#nomeProdotto");
const descrizioneInput = document.querySelector("#descrizione");
const quantitaInput = document.querySelector("#quantitaIniziale");
const categoriaInput = document.querySelector("#categoria");
const fornitoreInput = document.querySelector("#fornitore");
const prezzoAcquistoInput = document.querySelector("#prezzoDiAcquisto");
const prezzoVenditaInput = document.querySelector("#prezzoDiVendita");

const submitBtn = document.querySelector("#btn");
const errorSpans = document.querySelectorAll("span.error");
const messagePar = document.querySelector(".success");

/* funzioni per la validazione dei campi */

function isNomeValid(valore) {
    let pattern = /^[A-Za-z\s-,]+$/;
    return pattern.test(valore);
  }

function isCampoValorizzato(campo) {
    return nomeInput.value.trim().length != 0;
  }  
 
function isTelValid(valore) {
    let pattern = /^[0-9\s]+$/;
    return pattern.test(valore);
  }

  function isPrezzoValid(valore) {
    // L'espressione regolare permette numeri (0-9) e simboli specifici.
    let pattern = /^[0-9.,:;!?\-+@#&*€]+$/;
    return pattern.test(valore);
}


//GESTIONE EVENTI

submitBtn.addEventListener("click", function (e) {
    e.preventDefault(); //blocco della submit
    
//criteri di validazione:
//Nome prodotto (solo alfabetico con spazi, virgola e trattino)
//quantità iniziale (solo numeri)
//Categoria prodotto (solo alfabetico con spazi, virgola e trattino)
//Fornitore (solo alfabetico con spazi, virgola e trattino)
//Prezzo di acquisto (numeri e lettere (per la valuta))
//Prezzo di vendita (numeri e lettere (per la valuta))


//reset errors
for (let error of errorSpans) {
    error.innerHTML = "";
  }
  let valid = true;

//validazione campi
//Nome prodotto (solo alfabetico con spazi, virgola e trattino)
if (nomeProdottoInput.value.trim().length == 0 || !isNomeValid(nomeProdottoInput.value)) {
    nomeProdottoInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

//quantità iniziale (solo numeri)  
if (quantitaInput.value.trim().length == 0 || !isTelValid(quantitaInput.value)) {
    quantitaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}


//Categoria prodotto (solo alfabetico con spazi, virgola e trattino)
if (categoriaInput.value.trim().length == 0 || !isNomeValid(categoriaInput.value)) {
    categoriaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

//Fornitore (solo alfabetico con spazi, virgola e trattino)
if (fornitoreInput.value.trim().length == 0 || !isNomeValid(fornitoreInput.value)) {
    fornitoreInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

//Prezzo di acquisto (numeri e lettere (per la valuta))
if (prezzoAcquistoInput.value.trim().length == 0 && !isPrezzoValid(prezzoAcquistoInput.value)) {
    prezzoAcquistoInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}

//Prezzo di vendita (numeri e lettere (per la valuta))
if (prezzoVenditaInput.value.trim().length == 0 && !isPrezzoValid(prezzoVenditaInput.value)) {
    prezzoVenditaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }




/* (se tutto è validato...) */

if (valid) {
    messagePar.classList.remove("error");
    messagePar.classList.add("success");
    messagePar.innerHTML = "Prodotto aggiunto al magazzino";
    let campi = document.querySelector("form").elements;
    for (let campo of campi) {
      if (campo.type != "submit") {
        campo.value = "";
      }
    }
    nomeProdottoInput.focus();
  } else {
    messagePar.classList.remove("success");
    messagePar.classList.add("reject");
    messagePar.innerHTML = "Registrazione prodotto fallita";
  }
});