import { gql } from "@apollo/client";

const SIGN_IN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            response
            id
        }
    }
`;

export { SIGN_IN };