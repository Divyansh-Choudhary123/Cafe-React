import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Online from './Components/Online/Online';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route>
          <Route path="/" element={<Home/>} />
          <Route path="Online" element={<Online/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="Menu" element={<Menu/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
