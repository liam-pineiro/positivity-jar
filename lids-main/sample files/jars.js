import { gql } from "@apollo/client";

const LOAD_JARS =  gql`
    query LoadJars($id: ID!) {
        loadJars(id: $id) {
            jars
        }
    }
`;

const CREATE_JAR = gql`
    mutation CreateJar($id: ID!, $title: String!, $endDate: String!, $visiblity: Bool) {
        createJar(title: $title, endDate: $endDate, visibility: $visibility) {
            response
            jarId
        }
    }
`;

const ADD_TO_JAR = gql`
    mutation AddToJar($jarId: ID!, $id: ID!, $entry: String!) {
        addToJar(jarID: $jarId, id: $id, entry: $entry) {
            response
        }
    }
`;

export { LOAD_JARS, CREATE_JAR, ADD_TO_JAR };