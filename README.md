<h2> 🎬 Boolflix - Movie Database & Reviews </h2>

<p>
<strong>Progetto singolo - Full-stack Web Development Master by Boolean Tech Academy </strong>
</p>
<p>
Boolflix è una web-app Full Stack ispirata alle popolari piattaforme di streaming. Il progetto permette agli utenti di esplorare un catalogo di film, consultarne i dettagli tecnici e le recensioni, e interagire attivamente lasciando i propri feedback attraverso un sistema di recensioni integrato.
</p>

<h3>🛠 Funzionalità:</h3>

<h4> Backend (Node.js & Express) </h4>

- **RESTful API**: Architettura modulare con rotte e controller dedicati per film e recensioni.
- **Database Relazionale**: Gestione dei dati tramite MySQL (Film, Recensioni).
- **Gestione Recensioni**: Endpoint dedicato per il salvataggio di nuovi feedback utente.
- **Middleware**: Gestione centralizzata degli errori (404 e 500) per una maggiore robustezza.
- **Sicurezza**: Utilizzo di variabili d'ambiente (`.env`) per la protezione dei dati sensibili del DB.

<h4> Frontend (React & Vite)</h4>

- **Single Page Application**: Navigazione fluida tramite React Router.
- **Dashboard Film**: Homepage dinamica che recupera e visualizza due collezioni di film preferiti e sezione film con catalogo completo del database
- **Dettaglio & Feedback**: Pagina dedicata al singolo film con form interattivo per l'invio di nuove recensioni in tempo reale.

🚀 **Tech Stack:**

**Frontend:**

- React.js
- React Router
- Axios
- Bootstrap

**Backend:**

- Node.js
- Express.js
- MySQL
- CORS (Middleware per comunicazione cross-origin)
- dotenv (Variabili d'ambiente)
