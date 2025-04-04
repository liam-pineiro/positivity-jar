import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useCookies } from "react-cookie";
import NewJarPopup from "../components/NewJarPopup";
import { LOAD_JARS, CREATE_JAR, ADD_TO_JAR } from "../queries/jars"

function MyJars() {
    const [ newJarPopupState, setNewJarPopupState ] = useState(false);
    const [ cookies, setCookie ] = useCookies(['session']);
    const [ jsonData, setJsonData ] = useState("");

    function togglePopup() {
        setNewJarPopupState(!newJarPopupState);
    }

    /* query call to load jars
    const { data: jarData, loading: loadingJarData, error: errorLoadingJarData } = useQuery(LOAD_JARS, {
        variables: {
            id: cookies.id
        }
    })

    if (loadingJarData) return ( <p> Loading... </p>)
    else if (errorLoadingJarData) return <p>Error :({JSON.stringify(errorLoadingJarData, null, 2)}</p>;
    else if (jarData != undefined) {
        console.log(jarData);
    }*/

    useEffect(() => {
        fetch('/src/sampleJarData.json') // loading sample data
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                console.log(response);
                
                return response.text();
            })
            .then(text => {
                try {
                    const json = JSON.parse(text);
                    setJsonData(json);
                } catch (e) {
                    setError("Error parsing JSON");
                }
            })
            .catch(e => {
                console.log("Error reading file");
            })
    }, []);
        
    return (
        <>
         <p onClick={togglePopup}>My Jars</p>
         <NewJarPopup popupOpen={newJarPopupState} setPopupState={{togglePopup}} />
         {jsonData.jars.map(jar => { 
            // display jar data
         })}
        </>
        
    )
}

export default MyJars;