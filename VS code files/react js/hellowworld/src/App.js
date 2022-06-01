// import logo from './logo.svg';
import './App.css';

function App() {
const name='sajeewa';
const x=100;

  return (
    <div className="Container">
     <h1>Hellow {name}</h1>
     <h2>Hellow{x<10 ? 'yes':'no'} </h2>
    </div>
  );
}

export default App;
