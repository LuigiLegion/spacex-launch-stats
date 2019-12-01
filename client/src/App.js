import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Launches from './components/Launches';
import Launch from './components/Launch';
import logo from '../src/logo.png';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container">
          <img src={logo} alt="SpaceX" className="logo" />

          <Route exact path="/" component={Launches} />
          <Route exact path="/launches/:flight_number" component={Launches} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
