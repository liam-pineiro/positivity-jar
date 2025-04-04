import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';


import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom'

import App from './App'
import Dashboard from './Dashboard'
import MyJars from './MyJars'
import Account from './Account'
import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from '@apollo/client';


const httpLink = createHttpLink({
    uri: 'http://localhost:9080/graphql'
  })
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers
      }
    }
  })
  
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
  
  const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
    /*{
      path: '/create-account',
      element: <CreateAccount />
    }, */
   /* {
      path: '/sign-in',
      element: <SignIn />
    }, */
     
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/my-jars',
      element: <MyJars />
    },
   /* {
      path: '/friends',
      element: <Friends />
    },*/
    {
      path: '/account',
      element: <Account />
     
    }
    ]
    }
    
]);
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <ApolloProvider client={client}>
        <RouterProvider router={router} />
    </ApolloProvider>
  );