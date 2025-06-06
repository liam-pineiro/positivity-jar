import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NewJarPopup({ popupOpen, setPopupState }) {
    const [title, setTitle] = useState("");

    const navigate = useNavigate();

    function onChange(event) { 
        var newValue = event.target.value;

        setTitle(newValue);
    }

    function openJar() {
        navigate('/my-jars', {
            state: {
                jarNumber: 0
            }
        });
    } 

    if (popupOpen) {
        return (
            <div className="new-jar-popup" onDragEnter={openJar}>
                <input class ="create-input" type="text" name="title" value={title} onChange={onChange} />
            </div>
        )
    }
}

export default NewJarPopup;