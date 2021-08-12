import React from 'react'

export default class Carro  extends React.Component{
    constructor(props){
        super(props)
        this.modelo ="HONDA CIVIC"
        this.state = {
            ligado:false,
            veloATual : 50,
        }

        this.ld =this.ligaDESLIGAR.bind(this)

    }

    ligaDESLIGAR (){
//this.setState({ligado:!this.state.ligado})
//ATUALIZAÇÃO COM FUNÇÃO
/*
this.setState(
    function(state){
        return{
            ligado:!state.ligado
        }
    }
)    */


//atualização com arrow function
this.setState(
    (state)=>(
        {ligado:!state.ligado}
    )
)


}




acerelar (){
    this.setState(
        (state,props)=>(
        {veloATual:state.veloATual + props.fator}

        )
    )
}





    render(){
        return(
            <div>
                <h1>MEU Carro</h1>
                <p>Modelo : {this.modelo}</p>
            <p>Ligado: {this.state.ligado?"SIM":"NÃO"}</p>
                <p>Velocidade atual : {this.state.veloATual}</p>
                <button onClick={this.ld}>
                   {this.state.ligado?"Desligar carro":"ligar carro"} 
                </button>

                <button onClick={()=>this.acerelar()}>
                    acerelar
                </button>
            </div>
        )
    }
}