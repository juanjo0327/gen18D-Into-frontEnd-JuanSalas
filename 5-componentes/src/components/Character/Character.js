import React  from "react";

function Character(){
    const character = {
        display: "block",
        border: "1px solid salmon",
        height: "340px",
        padding: "10px",
        width: "150px",
        color: "black",
        background: "blue"
    }
    const character_header = {
        padding: "10px"
    }
    const character_footer = {
        bachground: "blue"
    }
    return(
        <div style={character}>
            <div style={character_header}>
                <h1>Character</h1>
            </div>
            <div style={character_footer}>
                <h1>Footer</h1>
            </div>
        </div>
    )
}

export default Character