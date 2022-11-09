// import React, { Fragment } from 'react';
// import '../estilosInicio.css';

const Card = ({color}) => {

  return (
    <> 
        <div className="card">
            <div className={color.color}>
              <p>{color.pelicula1}</p>
            </div>
        </div>
        
    </>
  )
}

export default Card