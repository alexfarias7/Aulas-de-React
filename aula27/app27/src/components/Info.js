import React ,{useState} from 'react'
import Globais from './Globais'
export default function Info(){
  return(
    <>

    <p>{"aula : " + Globais.aula}</p>
    <p>{"curso : " + Globais.curso}</p>
    <p>{"ANO : " + Globais.ano}</p>
    <hr/>
    </>
  )
}