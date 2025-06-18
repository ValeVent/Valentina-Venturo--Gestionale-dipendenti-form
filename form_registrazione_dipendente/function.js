// CACHE DEL DOM
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

// FUNZIONI DI VALIDAZIONE

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
  return numbers.test(valore.trim());
}

function isCampoValorizzato(campo) {
  return campo.value.trim().length !== 0;
}

function isLuogoNascitaValid(valore) {
  let pattern = /^[A-Za-z\s-,]+$/;
  return pattern.test(valore);
}

function isViaValid(valore) {
  let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
  return pattern.test(valore);
}

function isMatricolaValid(valore) {
  let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
  return pattern.test(valore);
}

// GESTIONE EVENTO SUBMIT
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // Reset messaggi di errore
  for (let error of errorSpans) {
    error.innerHTML = "";
  }

  let valid = true;

  // Nome e Cognome
  if (!isCampoValorizzato(nomeInput) || !isNomeCognomeValid(nomeInput.value)) {
    nomeInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

  if (!isCampoValorizzato(cognomeInput) || !isNomeCognomeValid(cognomeInput.value)) {
    cognomeInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

  // Telefono o Cellulare (almeno uno obbligatorio)
  const telefonoMsg = document.querySelector("#error-message");
  if (!isTelOrCelFilled()) {
    telefonoMsg.style.display = "block";
    valid = false;
  } else {
    telefonoMsg.style.display = "none";
    if (telInput.value.trim().length > 0 && !isTelValid(telInput.value)) {
      telInput.nextElementSibling.innerHTML = "campo non valido";
      valid = false;
    }
    if (celInput.value.trim().length > 0 && !isTelValid(celInput.value)) {
      celInput.nextElementSibling.innerHTML = "campo non valido";
      valid = false;
    }
  }

  // Anno di nascita
  if (annoInput.value.trim().length === 0) {
    annoInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

  // Luogo di nascita
  if (!isCampoValorizzato(luogoInput) || !isLuogoNascitaValid(luogoInput.value)) {
    luogoInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

  // Via
  if (!isCampoValorizzato(viaInput) || !isViaValid(viaInput.value)) {
    viaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

  // Città
  if (!isCampoValorizzato(cittaInput) || !isLuogoNascitaValid(cittaInput.value)) {
    cittaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

  // Provincia
  if (!isCampoValorizzato(provInput) || !isLuogoNascitaValid(provInput.value)) {
    provInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

  // Matricola (se presente, deve rispettare il pattern)
  if (matricolaInput.value.trim().length > 0 && !isMatricolaValid(matricolaInput.value)) {
    matricolaInput.nextElementSibling.innerHTML = "campo non valido";
    valid = false;
  }

  // Risultato finale
  if (valid) {
    messagePar.classList.remove("error", "reject");
    messagePar.classList.add("success");
    messagePar.innerHTML = "Registrazione effettuata";

    // Reset campi (escluso file)
    let campi = document.querySelector("form").elements;
    for (let campo of campi) {
      if (campo.type !== "submit" && campo.type !== "file" && campo.tagName !== "BUTTON") {
        campo.value = "";
      }
    }

    nomeInput.focus();
  } else {
    messagePar.classList.remove("success");
    messagePar.classList.add("reject");
    messagePar.innerHTML = "Credenziali errate";
  }
});
