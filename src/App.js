import './App.css';
import logo from './assets/logo-trivia.png';
import {  Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <img src={logo}  width="40%"/>
      <Link class="button-main" to="/categories">JUGAR</Link>
    </div>
  );
}

export default App;
