import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./NavBar";
import Jarlogo from './JarReactTest2.png'
import LineImage from './BlackLineBorder.png'

import './BlackLineBorder.png'

const App = () => {
    return (
        <>
          <img src={Jarlogo} className="imagejar" alt="logo" />          
          <img src={LineImage} className="imageline" alt="logo"/>
            <Navbar />
                
            <Outlet />
        </>
    );
};

export default App;