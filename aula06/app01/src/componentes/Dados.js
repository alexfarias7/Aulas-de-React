import React from 'react'
export default function Dados(props){//coloca-se props para poder passar seus atributos para outro componente

    return(
        <section>
            <p>Frase1 : {props.frase1}</p>
            <p>Frase 2 : {props.frase2}</p>
            <p>Frase 3 : {props.frase3}</p>
            <p>Frase 4(constante): {props.frase4}</p>
            <p>frase 5(constante):{props.frase5}</p>
            <p>frase 6(constante): {props.frase6}</p>
        </section>
    )
}