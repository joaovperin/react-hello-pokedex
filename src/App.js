import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Pokepage from './pages/pokedex/pokepage';
import Pokedex from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' Component={Pokedex}/>
        <Route path='/pokepage/:nomePokemon' Component={Pokepage}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
