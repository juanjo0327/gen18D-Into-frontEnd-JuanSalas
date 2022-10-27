import React from 'react';
import NavBar from "./components/NavBar";
import CreatePages from './pages/CreatePages';
import AboutPages from './pages/AboutPages';
import SearchPages from './pages/SearchPages';

function App() {
  return (
    <React.Fragment>
      <div>
        <span>Componente App!</span>
      </div>
      
      <NavBar/>

      <SearchPages/>
      <CreatePages/>
      <AboutPages/>
      
    </React.Fragment>
  );
}

export default App;
