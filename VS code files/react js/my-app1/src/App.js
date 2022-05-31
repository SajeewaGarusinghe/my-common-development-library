import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
//import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
//import { BrowserRouter, Routes, Route,Router,Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
