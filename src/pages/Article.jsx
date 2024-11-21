import React from "react";
import ArticleStructure from "../components/ArticleStruct";
import { listArticles } from "../articles/listarticles";

export default function Article() {

  return (
    <>
      <div className="articleContainer">
        {listArticles.map((art) => (  
          <div className="cardArticles mb-5"key={art.id} >
          
            <ArticleStructure
              title={`${art.title.substring(
                0,
                30
              )}...`}
              date={art.date}
              href={`#article:${art.id}`}
              buttonLabel="Voir l'article"
              image={art.img}
              /> 

          </div>
        )  )}
      </div>
    </>
  );
}
