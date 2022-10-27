import React  from "react";

function cuadroHijo(props){
    const character = {

        background: "cyan",
        height: "100px",
        width: "100px",
        color: "black"
    }
    return(
        <div style={character} info="Este es un ejemplo de props 2">
            <cuadroHijo/>
        </div>
    )
}

export default cuadroHijo