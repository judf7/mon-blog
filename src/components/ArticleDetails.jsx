import React, { useState } from "react";
import { listArticles } from "../articles/listarticles";
import { useHashNavigation } from "../hooks/useHashNavigation";
import { useEffect } from "react";

export default function ArticleDetail({ artId }) {
  const { page, param } = useHashNavigation();
  const articleId = param ? Number(param): Number(artId)

  const [post, setPost] = useState(articleId);
  
  useEffect(() => {
    if (param) {
      setPost(Number(param));
    }
  }, [param]);

  const article = listArticles.find((art) => art.id === post);

function indexPost(postpayload){
let newpost= post + postpayload
const articlereal= listArticles.some((art)=>art.id===newpost)

if(!articlereal){
  newpost=post
}
setPost(newpost)
window.location.hash = `#article:${newpost}`;
}
const articleNext= listArticles.some((art)=> art.id === post+1)
const articlePrev= listArticles.some((art)=>art.id === post-1)

  if (!article) {
    return <p>Article non trouvé</p>;
}

const btnReturnArt= ()=>{
  window.location.hash = '#articles';

  }
  return (
    <><div className="btnReturnArt">
      <button onClick={btnReturnArt} type="button " className="btn btn-outline-secondary">Revenir aux articles

      </button>
      </div>
      <div className="articleDetail">
        <img src={article.img} alt={article.title} />
        <h1>{article.title}</h1>
        <div className="detailContent">
          <p className="detailArticle" dangerouslySetInnerHTML={{__html:article.description}}></p>
        </div>

        <a href={`#article:${article.id}`}></a>
      </div>
      <div className="dateDetail">
        <p>Publié le {article.date}</p>
      </div>
      <div className="btn-article">
        {articlePrev && <button onClick={()=> indexPost(-1)} type="button" className="btn btn-dark">
          Article précédent
        </button>}
      {articleNext && <button onClick={()=> indexPost(+1)} type="button" className="btn btn-dark">
          Article suivant
        </button>}
     </div>
    </>
  );
}
