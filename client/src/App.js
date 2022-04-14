import React from 'react';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/header';
import About from '../src/pages/about';
import Game from '../src/pages/game';
// import Scoreboard from '../src/pages/scoreboard';
import Footer from './components/footer';
import Login from '../src/pages/login';
import Signup from '../src/pages/signup';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
    // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route  path="/" element={<About />} />
            <Route  path="/game" element={<Game />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;