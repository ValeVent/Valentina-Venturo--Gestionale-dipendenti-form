//CACHE DEL DOM

const nomeInput = document.querySelector("#nome");
const cognomeInput = document.querySelector("#cognome");
const matricolaInput = document.querySelector("#matricola");
const oraUscitaInput = document.querySelector("#oraUscita");

const submitBtn = document.querySelector("#btn");
const errorSpans = document.querySelectorAll("span.error");
const messagePar = document.querySelector("#messaggio");

/* funzioni per la validazione dei campi */

function isNomeCognomeValid(valore) {
    let pattern = /^[A-Za-z\s-,]+$/;
    return pattern.test(valore);
  }

function isCampoValorizzato(campo) {
    return nomeInput.value.trim().length != 0;
  }  

function isMatricolaValid(valore) {
    let pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,10}$/;
    return pattern.test(valore);
}

//GESTIONE EVENTI

submitBtn.addEventListener("click", function (e) {
    e.preventDefault(); //blocco della submit
    
//criteri di validazione:
//Nome e cognome (solo alfabetici con spazi e virgola e trattino)
//matricola (obbligatoria e controllo alfanumerico)

//reset errors
for (let error of errorSpans) {
    error.innerHTML = "";
  }
  let valid = true;

//validazione campi
//Nome e cognome (solo alfabetici con spazi e virgola e trattino)
  if (!isCampoValorizzato(nomeInput) || !isNomeCognomeValid(nomeInput.value)) {
    nomeInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }
  if (
    !isCampoValorizzato(cognomeInput) ||
    !isNomeCognomeValid(cognomeInput.value)
  ) {
    cognomeInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

//matricola (obbligatoria e controllo alfanumerico)  
if (matricolaInput.value.trim().length == 0 && !isMatricolaValid(matricolaInput.value)) {
    matricolaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}


/* (se tutto è validato...) */

if (valid) {
    messagePar.classList.remove("error");
    messagePar.classList.add("success");
    messagePar.innerHTML = "Uscita registrata";
    let campi = document.querySelector("form").elements;
    for (let campo of campi) {
      if (campo.type != "submit") {
        campo.value = "";
      }
    }
    nomeInput.focus();
  } else {
    messagePar.classList.remove("success");
    messagePar.classList.add("reject");
    messagePar.innerHTML = "Registrazione uscita fallita";
  }
});

//Per far apparire l'orario automaticamente dal sistema (lo slice elimina i secondi)
document.addEventListener('DOMContentLoaded', (event) => {
    const currentDateTime = new Date().toLocaleTimeString().slice(0,-3);
    document.getElementById('oraUscita').value = currentDateTime;
});

//Funzione per impostare autocomplete dei campi 
document.addEventListener('DOMContentLoaded', function() {
    // Esempio di dati pre-compilati (lascio vuoti i campi)
    const userData = {
      nome: "",
      cognome: "",
      matricola: ""
    };

    // Popola il form con i dati
    document.getElementById('nome').value = userData.nome;
    document.getElementById('cognome').value = userData.cognome;
    document.getElementById('matricola').value = userData.matricola;
  });

