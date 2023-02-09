import './App.css';
import Header from './components/Header/header';
import { useTranslation } from "react-i18next"
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import {Routes, Route} from 'react-router-dom'
import AboutMe from './components/About_me/About_me';


function App() {
  const {t} = useTranslation()
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/aboutMe' element={<AboutMe/>} />        
      </Routes>
      <Footer/>     
    </div>
  );
}

export default App;
