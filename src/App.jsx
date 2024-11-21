import { useState } from 'react'
import Header from './components/Header'
import './App.css'
import { useHashNavigation } from './hooks/useHashNavigation';
import Accueil from './pages/accueil';
import Contact from './pages/Contact';
import Article from './pages/Article';
import { NotFound } from './pages/NotFound';
import ArticleDetail from './components/ArticleDetails';

function App() {
  const { page, param } = useHashNavigation();
  const pageContent= getPageContent(page, param)

  return (
    <>
   <Header page={page}/>
   {pageContent}
   
    </>
  )
}




function getPageContent(page,artId) {
  if (page === "accueil") {
    return <Accueil />;
  }
  if  (page === "articles") {
    return <Article />;
  }
  if(page === "article"){
    return <ArticleDetail artId={artId} />;
  }
  if(page === "contact") {
    return <Contact />;
  }
  return <NotFound page={page} />;
  
 
}


export default App
