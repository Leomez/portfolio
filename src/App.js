import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './components/Header/header';
import { useTranslation } from "react-i18next"
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom'
import AboutMe from './components/About_me/About_me';
import Contact from './components/Contact/Contact';
import Proyect from './components/Proyect/Proyect';
import NotFound from './components/NotFound/NotFound';


function App() {
  const { t } = useTranslation()
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/' element={<Contact />} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/proyects' element={<Proyect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>      
      <Footer />
    </div>
  );
}

export default App;
