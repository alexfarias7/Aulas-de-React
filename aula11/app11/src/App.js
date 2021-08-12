import React,{useState} from 'react'
import Led from './componentes/Led'
export default function App(){
  const[ligado,setligado] = useState(false)

  const cancelar =(obj)=>{
return obj.preventDefault() 
 }

 return(
    <>
    <Led ligado={ligado} setligado={setligado}/>
    <a
     href='https://pt-br.reactjs.org/' target='_blank' onClick={(e)=>cancelar(e)}>
      cancelamento de operações
    </a>
    </>
  )
}