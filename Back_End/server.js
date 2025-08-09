import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet"; // Importa il modulo Helmet.js, che è un middleware per proteggere l'applicazione da attacchi di tipo HTTP
import errorhandler from "errorhandler"; // Importa il modulo Errorhandler.js, che è un middleware per gestire gli errori dell'applicazione
import sgMail from "@sendgrid/mail"; // // Importa il modulo Sendgrid.js, che è un modulo per inviare email tramite Sendgrid

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(errorhandler()); // Middleware per la gestione degli errori
app.use(cors());
app.use(helmet()); // Middleware per la sicurezza della web app e la sicurezza dei dati inviati dal form

// Inizializzazione SendGrid con chiave API
sgMail.setApiKey(process.env.CHIAVE_API_SENDGRID);

app.post("/send-email", async (req, res) => {
  // Validazione dei dati inviati dal form
  const { first_name, last_name, email, phone, date, many_person, message } =
    req.body;

  if (!nome || !cognome || !email || !messaggio) {
    return res.status(400).json({ error: "Tutti i campi sono obbligatori" });
  }
  const msg = {
    to: process.env.TO_EMAIL, // email destinatario
    from: process.env.FROM_EMAIL, // email  mittente
    subject: "Nuovo evento",
    text: `Nome: ${first_name}Cognome: ${last_name}Email: ${email}Telefono: ${phone}Data: ${date} Quante persone: ${many_person} Descrizione: ${message}`,
    html: `
    <h2>Nuovo contatto dal sito eventi</h2>
    <p><strong>Nome:</strong> ${first_name}</p>
    <p><strong>Cognome:</strong> ${last_name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefono:</strong> ${phone}</p>
    <p><strong>Data evento:</strong> ${date}</p>
    <p><strong>Quante persone:</strong> ${many_person}</p>
    <p><strong>Descrizione:</strong><br/>${message}</p>
  `,
    replyTo: email,
  };
  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email inviata con Sucesso" });
  } catch (error) {
    console.error(error);
    console.log(process.env.FROM_EMAIL);
    console.log(process.env.CHIAVE_API_SENDGRID);
    console.log(req.body);
    res.status(500).json({ error: "Errore nell'invio dell'email" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
