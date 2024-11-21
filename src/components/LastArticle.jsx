import React from "react";
import { listArticles } from "../articles/listarticles";
import { Button } from "./Button";

export default function LastArticle() {
  return (
    <>
      <div className="cardLastArticle">
        {listArticles.slice(-1).map((art) => (
          <div key={art.date}className="card-body-LastArticle">
            <h4 className="card-header-LastArticle">
              Dernier Article publié le {art.date}
            </h4>
            <br></br>
            <img className="img-fluid max-width: 100%;height:auto ;" src={art.img} alt={art.alt} />
              <h5 className="card-title-LastArticle mb-3"> {art.title}</h5>
            
          <Button variant="dark"
          href={`#article:${art.id}`}>
          Voir l'article
          </Button>
          </div>
        ))}
      </div>
    </>
  );
}
