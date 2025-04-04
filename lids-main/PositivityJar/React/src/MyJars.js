import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { useCookies } from "react-cookie";
import { LOAD_JARS, CREATE_JAR, ADD_TO_JAR } from './Jars'
import NewJarPopup from "./NewJarPopup";
import LineImage2 from './BlackLineBorder2.png'


function MyJars() {
    const [ newJarPopupState, setNewJarPopupState ] = useState(false);
    const [ cookies, setCookie ] = useCookies(['session']);
    const [ jsonData, setJsonData ] = useState("");
   
    useEffect(() => {
        fetch('/src/sampleJarData.json') // loading sample data
            .then (response => {
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
                    //throw new Error("Error parsing JSON");
                } 
            })
            .catch(e => {
                console.log("Error reading file");
            })
    }, []); 

    function togglePopup() {
        setNewJarPopupState(!newJarPopupState);
    }
//query call to load jars
    const { data: jarData, loading: loadingJarData, error: errorLoadingJarData } = useQuery(LOAD_JARS, {
        variables: {
            id: cookies.id
        }
    })


    if (loadingJarData) return (<p className = 'loading'> Loading... </p>)
    else if (errorLoadingJarData) return <p className = 'error'>Error :({JSON.stringify(errorLoadingJarData, null, 2)}</p>;
    else if (jarData != undefined) {
        console.log(jarData);
    } 



    function CreateJar() {
        const [ createJar, { data: createJarResponse, loading: loadingCreateJarResponse, error: errorLoadingCreateJarResponse }] = useMutation(CREATE_JAR);
        const [ jarName, setJarName ] = useState("");

    return (
            <form onSubmit={(e) => {
            e.preventDefault();

            createJar({
                variables: {
                    jarName: jarName
                }
            })
         }}></form>
    )
}

    return (
        <>
         <img src={LineImage2} className="imageline2" alt = "logo"/>
         <button class="create-button" onClick={togglePopup}>+</button>       
         <NewJarPopup popupOpen={newJarPopupState} setPopupState={{togglePopup}} />
        {jarData.loadJars.map((jar) => (
        <p key={jar.id} value={jar.data}>
          {jar.data}
        </p>
        ))}
        </>
        
    );
}

export default MyJars;