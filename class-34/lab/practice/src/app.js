import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './components/auth/login.js';
import Auth from './components/auth/auth.js';
import Content from './content.js';
import Home from './home.js';
import LoginProvider from './components/auth/context.js';

const App = (props) => {

  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    links: {
      display: 'flex',
      listStyleType: 'none',
      margin: 0,
      padding: 0,
    },
    item: {
      marginRight: '1em',
    },
  };

  return (
    <LoginProvider>
      <nav style={styles.nav}>
        <ul style={styles.links}>
          <li style={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li style={styles.item}>
            <Auth><Link to="/content">Content</Link></Auth>
          </li>
        </ul>
        <Login />
      </nav>
      <hr />
      <Route exact path="/" component={Home} />
      <Route exact path="/content" component={Content} />
    </LoginProvider>
  );

};

export default App;
