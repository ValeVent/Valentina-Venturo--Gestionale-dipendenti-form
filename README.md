# Gestionale Lato Client

Questo progetto rappresenta un gestionale lato client, sviluppato in gruppo durante la mia attività lavorativa presso Aton Informatica. È uno dei due progetti chiave realizzati in quell'esperienza e consiste in una suite di moduli basati su form HTML/CSS/JavaScript, progettati per facilitare diverse operazioni di gestione aziendale come l'aggiunta di prodotti, la registrazione degli ingressi/uscita dei dipendenti, la registrazione completa dei dipendenti, l'invio di report vendite, la gestione dei resi e la ricezione di merce dal fornitore.


## Descrizione Approfondita del Progetto

Il gestionale è una raccolta di interfacce utente indipendenti, ognuna dedicata a una specifica funzionalità aziendale. La logica di validazione dei campi e la gestione delle interazioni utente sono implementate interamente lato client tramite JavaScript. L'obiettivo è fornire strumenti semplici ed efficaci per l'inserimento e la convalida dei dati operativi quotidiani.


## Moduli Inclusi:

1. Form per Aggiunta Prodotto al Magazzino

 - Scopo: Registrare nuovi prodotti e i loro dettagli nel magazzino aziendale.

 - Campi: Nome prodotto, Descrizione, Quantità iniziale, Categoria, Fornitore, Prezzo di acquisto, Prezzo di vendita, Data di registrazione prodotto, Data scadenza prodotto.

 - Validazione: Controllo su campi obbligatori e formati specifici (es. alfabetico per nomi/categorie, numerico per quantità/prezzi).

2. Form di Ingresso Dipendente

 - Scopo: Registrare l'orario di ingresso dei dipendenti.

 - Campi: Nome, Cognome, Numero Matricola, Ora inizio (auto-compilata), Note per eventuali ritardi.

 - Validazione: Controllo su campi obbligatori e formati (es. alfabetico per nome/cognome, alfanumerico per matricola).

 - Funzionalità Aggiuntive: L'ora di inizio viene automaticamente rilevata e inserita dal sistema.

3. Modulo di Registrazione Dipendente Completa

 - Scopo: Registrare dettagli completi per nuovi dipendenti, inclusi dati personali e di contatto.

 - Campi: Nome, Cognome, Anno di nascita, Luogo di nascita, Via, Città, Provincia, Telefono, Cellulare, Note, Curriculum Vitae (allegato file), Numero Matricola.

 - Validazione: Ampia validazione su tutti i campi, inclusi formati specifici (es. alfabetico, numerico, alfanumerico) e controllo che almeno un contatto telefonico sia presente.

 - Funzionalità Aggiuntive: Opzione per allegare il CV in diversi formati.

4. Form per Report Vendite

 - Scopo: Permettere ai dipendenti di inviare report dettagliati sulle vendite.

 - Campi: Nome dipendente, Prodotto venduto (selezione da lista), Quantità venduta, Unità (Pz, Gr, Kg), Totale (calcolato automaticamente).

 - Validazione: Campi obbligatori.

 - Funzionalità Aggiuntive: Calcolo automatico del prezzo totale basato sul prodotto, quantità e unità di misura selezionati.

5. Form per Reso

 - Scopo: Registrare i resi di prodotti.

 - Campi: Prodotto coinvolto, Tipo di movimento (entrata/uscita), Quantità, Data del movimento, Motivo del reso, Allega documento/foto del prodotto difettoso.

 - Validazione: Tutti i campi sono obbligatori e validati lato JS per assicurare l'integrità dei dati.

 - Funzionalità Aggiuntive: Opzione per allegare documentazione o foto del prodotto reso.

6. Form per Ricezione Merce dal Fornitore

 - Scopo: Registrare l'arrivo di merce in magazzino da parte dei fornitori.

 - Campi: Prodotto ricevuto, Quantità ricevuta, Data di ricezione, Numero di fattura.

 - Validazione: Controllo su campi obbligatori e formati specifici (es. alfabetico per prodotto, numerico per quantità e numero fattura).

7. Form di Uscita Dipendente

 - Scopo: Registrare l'orario di uscita dei dipendenti.

 - Campi: Nome, Cognome, Numero Matricola, Ora uscita (auto-compilata), Note per eventuali motivi di uscita anticipata, straordinario o normale uscita.

 - Validazione: Controllo su campi obbligatori e formati (es. alfabetico per nome/cognome, alfanumerico per matricola).

 - Funzionalità Aggiuntive: L'ora di uscita viene automaticamente rilevata e inserita dal sistema.


## Tecnologie Utilizzate

- HTML5: Base strutturale per tutti i moduli form e per la homepage del gestionale.

- CSS3: Gestione dello stile e del layout per un'interfaccia utente pulita e funzionale in tutte le pagine.

- JavaScript: Logica di validazione dei form, gestione degli eventi utente, manipolazione del DOM, calcoli dinamici (es. nel report vendite)


## Funzionalità Comuni e Caratteristiche Principali

- Validazione Client-Side: Tutti i form includono una robusta validazione JavaScript per assicurare l'integrità dei dati prima dell'invio.

- Feedback Utente: Messaggi di successo o errore chiari e visibili per guidare l'utente nella compilazione dei form.

- Interfaccia Intuitiva: Design pulito e campi ben etichettati per una facile interazione.

- Flessibilità: Il design modulare permette di integrare o disattivare singoli form in base alle necessità.


## Come Avviare il Progetto

Questo progetto è una raccolta di pagine HTML che possono essere avviate direttamente in un browser.


### Prerequisiti

Non sono richiesti particolari prerequisiti oltre a un browser web moderno.


### Installazione

1. Clona il repository (o scarica la cartella del progetto):

git clone https://github.com/ValeVent/gestionale-aton-informatica.git

Assicurati di sostituire 'gestionale-aton-informatica.git' con il nome esatto del tuo repository.

2. Naviga nella directory del progetto:

cd gestionale-aton-informatica


### Avvio dell'Applicazione

- Per visualizzare la homepage del gestionale, apri il file home_page_gestionale_dipendente.html (o il nome del tuo file HTML principale della dashboard) direttamente nel tuo browser web. Da lì potrai navigare tra i vari moduli.

- In alternativa, puoi aprire ciascun file HTML dei moduli (es. aggiunta-prodotto.html, ingresso-dipendente.html, ecc.) direttamente nel tuo browser.

Se hai installato http-server globalmente (opzionale, per un server locale):

npm install -g http-server

http-server .

L'applicazione sarà accessibile all'indirizzo mostrato dal server (es. http://localhost:8080), e potrai navigare tra i diversi moduli aprendo i rispettivi file HTML.


## Stato del Progetto

Questo progetto è una suite funzionale di moduli gestionali lato client, sviluppata per dimostrare capacità di frontend in contesti lavorativi reali e di gestione dati tramite form.


## Contatti

GitHub: https://github.com/ValeVent

LinkedIn: https://www.linkedin.com/in/valentina-venturo

Sito Web: http://www.valentinaventuro.it
