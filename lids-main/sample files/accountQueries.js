/*
    "response" and "id" are the return parameters that the GraphQL query needs to return. 
*/
import { gql } from "@apollo/client";

const SIGN_IN = gql`
    mutation SignIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
            response
            id
        }
    }
`;

export { SIGN_IN };
