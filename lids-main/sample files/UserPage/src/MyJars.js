import { useState } from "react";
import NewJarPopup from "./NewJarPopup";
import LineImage2 from './BlackLineBorder2.png'


function MyJars() {
    const [ newJarPopupState, setNewJarPopupState ] = useState(false);
   
    function togglePopup() {
        setNewJarPopupState(!newJarPopupState);
    }

    return (
        <>
         <img src={LineImage2} className="imageline2" alt = "logo"/>
         <button class="create-button" onClick={togglePopup}>+</button>       
         <NewJarPopup popupOpen={newJarPopupState} setPopupState={{togglePopup}} />
        </>
        
    )
}

export default MyJars;