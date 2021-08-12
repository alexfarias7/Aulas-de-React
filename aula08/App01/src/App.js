import React  from 'react'
import "./App.css"



export default function App() {
  
  //sempre que tiver uma palavra cameo(font-size),utilizar a conatação de palavras(fontSize), com s segunda palavra sendo Máiucula.
  //Utilizado para quando estiver trabalhando diretamente do componente.
  // não uttiliza ; mas sim ,
  //pode criar a formatação de CSS com constantes

  const textoDestaque ={
    color:'#00f',
    fontSize: ' 3em'
  }
  return (
<>
<section className = 'caixa'> 
  <h1 style ={{color:'red', fontSize:'3em'}}>AULA 08 - Usando raect com CSS</h1>
  <h2>Apredendo a usar react com CSS</h2>
  <p>Aplicando formatações em CSS!</p>
  <p style={textoDestaque}>formatação com Css usando constantes</p>
  <p  className='texto'>Formatação usando o CSS EXTERNO </p>
  <a href="https://pt-br.reactjs.org/" target='_blank'>React JS- Utilizanbdo formatação com CSS com classes</a>
</section>

</>
  )
}


