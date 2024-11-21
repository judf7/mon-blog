import React, { useState } from "react";
import { listArticles } from "../articles/listarticles";
import { Button } from "./Button";

export default function ArticleStructure({
  image,
  title,
  description,
  date,
  href,
  buttonLabel,
}) {
  const showButton = !!(href && buttonLabel);

  return (
    <>
          <div className="imgArticles">
            {image && <img src={image} className="card-img" />}
          </div>
          <div className="card-body">
            {title && <h5 className="card-title">{title}</h5>}
            {description && <p className="card-text">{description}</p>}
            <p className="card-text">
              <small className="text-body-secondary">
                publié le {date}
              </small>
            </p>
            {showButton && (
              <Button variant="dark" href={href}>
                {buttonLabel}
              </Button>
              
            )}
          </div>
        
      
    </>
  );
}


