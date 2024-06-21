//CACHE DEL DOM

const nomeInput = document.querySelector("#nome");
const cognomeInput = document.querySelector("#cognome");
const annoInput = document.querySelector("#anno_nascita");
const luogoInput = document.querySelector("#luogo_nascita");
const viaInput = document.querySelector("#via");
const cittaInput = document.querySelector("#citta");
const provInput = document.querySelector("#prov");
const telInput = document.querySelector("#tel");
const celInput = document.querySelector("#cell");
const matricolaInput = document.querySelector("#matricola");

const submitBtn = document.querySelector("#btn");
const errorSpans = document.querySelectorAll("span.error");
const messagePar = document.querySelector("#messaggio");

/* funzioni per la validazione dei campi */

function isNomeCognomeValid(valore) {
  let pattern = /^[A-Za-z\s-,]+$/;
  return pattern.test(valore);
}

function isTelValid(valore) {
  let pattern = /^[0-9\s]+$/;
  return pattern.test(valore);
}

function isTelOrCelFilled() {
  return telInput.value.trim().length > 0 || celInput.value.trim().length > 0;
}

function isNumValid(valore) {
  let numbers = /^[0-9]+$/;
  return numbers.test(valoreInput.trim());
}

function isCampoValorizzato(campo) {
  return nomeInput.value.trim().length != 0;
}

function isLuogoNascitaValid(valore) {
    let pattern = /^[A-Za-z\s-,]+$/;
    return pattern.test(valore);
}

function isViaValid(valore) {
    let pattern = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,10}$/;
    return pattern.test(valore);
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
//numero di telefono solo numerico (quando è valorizzato)
//anno di nascita (obbligatorio)
//luogo di nascita (obbligatorio e alfabetico)
//via (obbligatoria e alfanumerica)
//città (obbligatoria e alfabetica)
//provincia (obbligatoria e alfabetica)
//matricola (non obbligatoria, ma controllo alfanumerico)  

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
  
//validazione tel e cell e verifica che almeno uno dei due campi sia compilato 
  if (!isTelOrCelFilled()) {
    document.querySelector("#error-message").style.display = "block";
    valid = false;
} else {
    document.querySelector("#error-message").style.display = "none";
    if (telInput.value.trim().length > 0 && !isTelValid(telInput.value)) {
        telInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }
    if (celInput.value.trim().length > 0 && !isTelValid(celInput.value)) {
        celInput.nextElementSibling.innerHTML = "campo non valido";
        valid = false;
    }
}

  //anno di nascita (obbligatorio)
  if (annoInput.value.trim().length == 0) {
    annoInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

  //luogo nascita (obbligatorio e alfabetico)
  if (luogoInput.value.trim().length == 0 || !isLuogoNascitaValid(luogoInput.value)) {
    luogoInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

  //via (obbligatorio e alfanumerico)
  if (viaInput.value.trim().length == 0 && !isViaValid(viaInput.value)) {
    viaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }
  
//città (obbligatoria e alfabetico)
if (cittaInput.value.trim().length == 0 || !isLuogoNascitaValid(cittaInput.value)) {
    cittaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

//provincia (obbligatoria e alfabetico)
if (provInput.value.trim().length == 0 || !isLuogoNascitaValid(provInput.value)) {
    provInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }  

//matricola (non obbligatoria, ma controllo alfanumerico)  

if (matricolaInput.value.trim().length < 0 && !isMatricolaValid(matricolaInput.value)) {
    matricolaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
}


/* (se tutto è validato...) */

  if (valid) {
        messagePar.classList.remove("error");
        messagePar.classList.add("success");
        messagePar.innerHTML = "Registrazione effettuata";
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
        messagePar.innerHTML = "credenziali errate";
      }
  });

