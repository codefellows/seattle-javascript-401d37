import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { doSomething } from './store/index.js';


function App({doSomething, message}) {

  useEffect(() => {
    doSomething();
  }, [doSomething])


  return (
    <div className="App">
      <h1>{message}</h1>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    message: state.fetcher
  }
}

const mapDispatchToProps = { doSomething }


export default connect(mapStateToProps, mapDispatchToProps)(App);


