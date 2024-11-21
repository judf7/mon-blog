import React, { useEffect, useState } from "react";

export default function Contact() {
  const[checked, setChecked]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const elements = form.elements;
    const name = elements.name.value;
    const mail = elements.mail.value;
    const sujet = elements.sujet.value;
    const message = elements.message.value;
   
    alert(
      `votre nom est ${name}, votre Email est ${mail}, le sujet est ${sujet} votre message dit : ${message}`
    );
    form.reset()
    setChecked(false)
  };

const toggleChecked= ()=> {
  setChecked(!checked)
}


  return (
    <>
      <h2 className="titleContact">
        Vous souhaitez prendre contact avec moi, c'est ici:
      </h2>
      <div className="formulaire">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label  htmlFor="name" className="form-label">
              Nom / Pseudonyme
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="emailHelp"
              placeholder='nom'
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mail" className="form-label">
              Adresse Mail
            </label>
            <input
              type="email"
              className="form-control"
              id="mail"
              aria-describedby="emailHelp"
              placeholder='mail'
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sujet" className="form-label">
              Sujet
            </label>
            <input type="text" className="form-control" id="sujet" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea type="text" className="form-control" id="message" />
          </div>

          <div className="mb-3 form-check">
            <input
             checked={checked}
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={toggleChecked}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Je confirme vouloir envoyer ma demande
            </label>
          </div>

          <button type="submit" className="btn btn-primary"
          disabled={!checked}>
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
