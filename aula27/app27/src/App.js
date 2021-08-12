import React ,{useState} from 'react'
import Globais from './components/Globais'
import Info from './components/Info'

export default function App(){

  const [resumo,setResumo] =useState (Globais.resumo)
 const gravarRESUMO =()=>{
  Globais.resumo = resumo

 }
 const verresumo =()=>{
  alert(Globais.resumo)
 }
  return(
    <>
       <Info/>

    <p>{"aula : " + Globais.aula}</p>
    <p>{"curso : " + Globais.curso}</p>
    <p>{"ANO : " + Globais.ano}</p>
    <hr/>


    <input type='text' value={resumo} onChange-={(e)=>setResumo(e.target.value)}>
    
    </input>

    <button onClick={()=>gravarRESUMO()}>
      gravar resumo
    </button>

    <button onClick={()=>verresumo()}>
      ver resumo
    </button>
 
    </>
  )
}