import { useState } from "react";
import './App.css';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import { Routes, Route , Navigate} from "react-router-dom";
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import Login from './page/Login';
import UserPage from "./page/UserPage";
function App() {
  const [authenticate, setAuthenticate] = useState(true);
  const PrivateRoute = () => {
    return authenticate === true ? <UserPage/> : <Navigate to="/login"/>
  };


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<PrivateRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
