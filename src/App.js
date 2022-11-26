import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import {Routes, Route} from 'react-router-dom';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
