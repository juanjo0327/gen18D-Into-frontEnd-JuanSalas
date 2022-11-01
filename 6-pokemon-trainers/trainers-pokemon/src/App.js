import React from 'react';
import NavBar from './components/NavBar';
import CreatePage from './pages/CreatePages';
import AboutPage from './pages/AboutPages';
import SearchPage from './pages/SearchPages';
import './App.css';


function App() {
  return (
    <React.Fragment>
      
      <NavBar></NavBar>      
      <SearchPage/>
      <CreatePage/>
      <AboutPage/>
      
    </React.Fragment>
  );
}

export default App;