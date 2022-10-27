import Title from './components/Title';
import Description from './components/Description';
import Character from './components/Character/Character';
import React from 'react';

function App() {
  return (
    <div>
      <Title/>
      <Description title="Esta es una descripcion ejemplo de props"/>
      <cuadroMadre/>
      <Character/>
      {/* <Circle/> */}
    </div>
  );
}

export default App;
