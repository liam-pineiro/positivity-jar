import { useState, useRef } from "react";
import { useCookies } from "react-cookie";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { SIGN_IN } from "../queries/accounts"

import FormTextField from "../components/FormTextField";
import WideButton from "../components/buttons/WideButton";

import "../style/style.css";
import "../style/forms.css";

function SignIn() {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const [ signIn, { data, loading, error }] = useMutation(SIGN_IN);

    let signedIn = useRef(false);
     
    const navigate = useNavigate();

    const [ cookies, setCookie ] = useCookies(['session']);

    const setTextFieldInput = (type, value) => {
        if (type === "Email") setEmail(value);
        else setPassword(value);
    }

    if (loading) return <p>Loading...</p>; 
    else if (error) return <p>Error :({JSON.stringify(error, null, 2)}</p>;
    else if (data != undefined && !signedIn.current) {
        signedIn.current = true;

        setCookie("id", data.signIn.id, {
            options: {
                maxAge: 7200
            }
        })

        navigate('/dashboard')
    }

    return (
        <div className="page flex col">
             <form className="form centered" onSubmit={(e) => {
                e.preventDefault()

                signIn({
                    variables: {
                        email: email,
                        password: password
                    }
                })
             }}>
                <h2 className="title centered">Sign In</h2>
                <FormTextField label="Email" value={email} setValue={setTextFieldInput} />
                <FormTextField label="Password" value={password} setValue={setTextFieldInput} />
                <WideButton addedClass="sign-in-button" label="Continue" />
             </form>
        </div>
            
    )
}

export default SignIn;