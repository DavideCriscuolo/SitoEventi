# Sito di Janas Event

Il sito di Janas Event è un'applicazione web creata per fornire informazioni e servizi sull' azienda e di poter inviare una richiesta di Nuovo Evento.

## Funzionalità

- Visualizzazione delle info rigurdanti l'azienda e i loro servizi
- Invio di email tramite unb form per prenotare un nuovo evento

## Tecnologie utilizzate

- React per la creazione dell'interfaccia utente
- Boostrap FrameWork per il front
- Node.js per la gestione del server
- Express per la creazione dell'API
- Sendgrid per l'invio di email

## Backend

Il backend del sito è stato creato utilizzando Node.js e Express. La rotta principale del backend è `/send-email`, che accetta richieste POST e invia un'email tramite la libreria Sendgrid.

### Rotte

- `/send-email`: rotta POST per inviare un'email
