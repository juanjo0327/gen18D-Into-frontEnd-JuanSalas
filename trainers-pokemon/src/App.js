import React from 'react';
import Dashboard from './components/Dashboard';
import NavBar from "./components/NavBar";
import SearchFilters from './components/SearchFilters';
function App() {
  return (
    <React.Fragment>
      <div>
        <span>componente App</span>
      </div>
      <NavBar></NavBar>
      <SearchFilters></SearchFilters>
      <Dashboard></Dashboard>

    </React.Fragment>
    );
}

export default App;
