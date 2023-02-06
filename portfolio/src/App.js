import './App.css';
import Header from './components/Header/header';
import { useTranslation } from "react-i18next"
import Home from './components/Home/Home';


function App() {
  const {t} = useTranslation()
  return (
    <div className="App">
      <Header/>
      <Home/>      
    </div>
  );
}

export default App;
