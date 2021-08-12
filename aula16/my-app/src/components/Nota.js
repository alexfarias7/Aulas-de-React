import React from 'react'

export default function Nota (props){
    return(
        <div>
            <legend>Informa a nota : {props.num}</legend>
            <input type='text' value={props.Nota} onChange={(e)=>props.setNota(e.target.value)}>
            </input>
        </div>
    )
}