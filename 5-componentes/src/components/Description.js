import React from 'react';
import {Titulo} from './Description-styled';
function Description(props){
    
    return(
        <div>
            <Titulo>{props.title}</Titulo>
        </div>
    )
}

export default Description