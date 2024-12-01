
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Donate from './components/Donate/Donate';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
