import React from 'react'
import LastArticle from '../components/LastArticle'

export default function Accueil() {
  return (<>
  <div className='main'>
    <div className='title'>
    <p className='text'>HELLO WORD</p>
    </div>

<div className='presentation'>
 <h4>Bonjour à tous et bienvenue sur mon blog personnel dédié à ma reconvertion professionelle .</h4> 
  ici je posterais des articles de mes divers aprentissages et sources trouvées.
  En tant que débutante pure et dure, l'apprentissage du développement web en autodidacte est un vrai challenge !
</div>
<LastArticle/>
</div>
  
    

    
    </>  )
}
