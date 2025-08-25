/**
 * Pagina NotFound che visualizza un messaggio di errore quando la pagina richiesta non esiste.
 */

import "./../css/NotFound.scss";
export default function NotFound() {
  return (
    <>
      <main className="bg-notfound">
        <div className="container  p-5">
          <h1 className="text-center">Page not found</h1>
        </div>
      </main>
    </>
  );
}
