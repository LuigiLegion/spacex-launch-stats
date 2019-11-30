import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Launches from './components/Launches';
import logo from '../src/logo.png';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <img src={logo} alt="SpaceX" className="logo" />

        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
