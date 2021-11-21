import logo from './logo.jpg';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
       
      </header>
     
        <Dictionary />
    
      <footer>
        <a href="/" src="https://github.com/edriophthalma/Dictionary-project.git">Open source code</a> by Giulia D'Angelo, hosted on <a href="/" src="https://keen-wing-5bfc5b.netlify.app">Netlify</a>
      </footer></div>
    </div>
  );
}

