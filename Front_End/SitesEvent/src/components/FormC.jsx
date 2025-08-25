/**
 * Componente FormC che gestisce il form di contatto.
 * Invia un'email al server quando il form viene inviato.
 */
import "./../css/FormC.scss";
import { useState } from "react";

export default function FormC() {
  const url = import.meta.env.VITE_URL_EMAIL;
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    date: "",
    many_person: "",
    message: "",
  });
  function sendEmail(e) {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        alert("Email inviata con successo");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          date: "",
          many_person: "",
          message: "",
        });
      }
    });
  }

  return (
    <>
      <div className="container  py-5">
        <div className="text-center p-3">
          <h3 className="fw-bold">
            Every great event starts with a conversation
          </h3>
          <p className="fw-semibold">
            We’re here to turn them into something truly unforgettable. Get in
            touch with Janas Events, we can’t wait to meet you. Please fill out
            the form below, and let’s see what magic we can create together!
          </p>
        </div>

        <form
          onSubmit={sendEmail}
          className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2"
        >
          <div className="col d-flex flex-wrap">
            <div className="first_name col-12 col-sm-6 p-2   ">
              <label htmlFor="inputEmail4" className="form-label">
                Firt Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                value={formData.first_name}
                onChange={(e) =>
                  setFormData({ ...formData, first_name: e.target.value })
                }
              />
            </div>

            <div className="last_name col-12 col-sm-6  p-2  ">
              <label htmlFor="inputLasttName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLasttName"
                value={formData.last_name}
                onChange={(e) =>
                  setFormData({ ...formData, last_name: e.target.value })
                }
              />
            </div>

            <div className="email col-12  col-sm-6 p-2   ">
              <label htmlFor="inputEmail" className="form-label ">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="phone col-12 col-sm-6  p-2   ">
              <label htmlFor="inputPhone" className="form-label ">
                Phone
              </label>
              <input
                type="number"
                className="form-control"
                id="inputPhone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>

            <div className="date_event col-12 col-sm-6  p-2   ">
              <label htmlFor="inputDateEvent" className="form-label">
                Did you already set a date?
              </label>
              <input
                type="date"
                className="form-control"
                id="inputDateEvent"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>

            <div className="many_person col-12 col-sm-6 p-2    ">
              <label htmlFor="inputManyPerson" className="form-label ">
                How many guests do you plan to invite?
              </label>
              <input
                type="number"
                className="form-control"
                id="inputManyPerson"
                value={formData.many_person}
                onChange={(e) =>
                  setFormData({ ...formData, many_person: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col">
            <div className="p-2">
              <label htmlFor="inputAboutEvent" className="form-label">
                Tell me a little about your event
              </label>
              <textarea
                className="form-control h-100"
                name="inputAboutEvent"
                id="inputAboutEvent"
                rows="11"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div className="d-flex justify-content-center my-5">
            <button type="submit" className="btn px-5">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
