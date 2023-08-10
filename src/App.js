
import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import Signin from './component/signin/Signin';
import Register from './component/register/Register';
import Home from './component/home/Home';
function App() {
  return (
    <div className="App">
  
     <BrowserRouter>
     <Routes>
     <Route  path="/" element={<Signin/>}/>
     <Route  path="/register" element={<Register/>}/>
     <Route  path="/home" element={<Home/>}/>

     
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
