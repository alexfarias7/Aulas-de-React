import React,{useState, useEffect} from 'react'
import Pagina1 from './components/Pagina1'
import Pagina2 from './components/Pagina_2'
export default function App(){

const[pagina,setPagina]  =useState(1)

const retornapagina=()=>{
if(pagina==1){
  return<Pagina1/>
}else if (pagina ==2){
  return<Pagina2/>
}else{
  return <div>
  <button onClick=''>
  Pagina1
  </button>
  <button onClick=''>
  Pagina2
  </button>
</div>
}


}


return(
  <>

  {retornapagina()}
 

  </>
)
}