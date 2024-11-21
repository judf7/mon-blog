import React from 'react'
import { useToggle } from '../hooks/useToggle';
import { activeClassIf } from '../utils/classnames';

export default function Header({page}) {
    const [expanded, toggleExpanded] = useToggle(false);

  return (
    <div className='header'>
    <h5 className='class="display-6" m-3'> MonBlog <br />by Josette</h5>
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Menu</a>

    <button  onClick={toggleExpanded} 
    className="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarNavAltMarkup" 
    aria-controls="navbarNavAltMarkup" 
    aria-expanded={expanded}
    aria-label="Toggle navigation">

      <span className="navbar-toggler-icon"></span>
    </button>

    <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}  id="navbar">

      <div className="navbar-nav">

        <a className={activeClassIf(page === 'accueil', 'nav-link')} aria-current="page" href="#accueil">Accueil</a>
        <a className={activeClassIf(page === 'articles', 'nav-link')} href="#articles">Articles</a>
        <a className={activeClassIf(page === 'contact', 'nav-link')} href="#contact">Contact</a>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
