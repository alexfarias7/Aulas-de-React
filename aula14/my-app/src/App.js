import React , {useState} from 'react'

export default function App(){

  const [nome, setNome] = useState('Digite seu nome aqui') 

  const hanleChangeNome =(e)=>{
    setNome(e.target.value)
  }

  const [carro, setCarro] = useState('HRV')



  return (
    <>
    <label>Digite o seu nome</label>
    <input type='text' name='fnome' value={nome}
     onChange={(e)=>hanleChangeNome(e)}></input>
    <p>Nome digitado : {nome}</p>
    <label>selecio um carro</label>
    <select value={carro} onChange ={(e)=>setCarro(e.target.value)}>
      <option value='Fusca'>Fusca</option>
      <option value='HRV'>HRV</option>
      <option value='Chevete'>Chevete</option>
      <option value='Jipi'>Jipi</option>
      <option value='Honda Civic'>Honda Civic</option>
      <option value='Gol'>Gol</option>


    </select>
    <p>Carro selecionado : {carro}</p>

    </>
    
  )
/*
  return (
    <>
    <label>Digite o seu nome</label>
    <input type='text' name='fnome' value={nome}
     onChange={(e)=>setNome(e.target.value)}></input>
    <p>Nome digitado : {nome}</p>
    </>
  )*/
}