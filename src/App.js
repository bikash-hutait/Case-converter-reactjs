import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, {useState} from 'react';
import ColorPicker from './components/ColorPicker';
import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
   
  

    <Navbar mode={mode} toggleMode={toggleMode} />
   <div className="container my-2" >
    <Alert alert={alert}/>
    </div>
   
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Textform />} />
        <Route exact path="/color-picker" element={<ColorPicker />} />
      </Routes>
    </BrowserRouter>




   </>
  );
}

export default App;
