import React , { useState}from 'react'
export default function App(){

 /* localStorage.setItem("nome","ALEX")//cria uma chave
  localStorage.setItem("nome","roberto")//troca o valor de uma chave uma chave
  localStorage.getItem('nome')//recupera uma chave
  localStorage.removeItem('nome')//remove uma chave*/

  const[nome,setNome]= useState()

  const armazenar=(chave,valor)=>{
    localStorage.setItem(chave,valor)
  }
  const consultar =(chave)=>{
    alert(localStorage.getItem(chave))
  }
  const apagar=(chave)=>{
    localStorage.removeItem(chave)
  }

return(
  <>
  <label>Digite um nome</label><br></br>
<input type='text' value={nome} onChange={(e)=>setNome(e.target.value)}>
</input>  <br/>
<button onClick={()=>armazenar('ls_nome',nome)}>
Gravar nome
</button>
<button onClick={()=>consultar('ls_nome',nome)}>
consultar nome
</button>
<button onClick={()=>apagar('ls_nome',nome)}>
Remover nome
</button>


  </>
)
}