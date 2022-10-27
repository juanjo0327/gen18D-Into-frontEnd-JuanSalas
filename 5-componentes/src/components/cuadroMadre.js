import React  from "react";
import cuadroHijo from "./cuadroHijo";

function cuadroMadre(props){
    const character = {
        border: "15px solid salmon",
        margin: "50px",
        background: "black",
        height: "340px",
        width: "340px",
    }
    return(
        <div style={character}>
            {props.info}
            <cuadroHijo/>
        </div>
    )
}

export default cuadroMadre