import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getSomething } from './store/'


function App(props) {
  return (
    <div className="App">
      {props.loading ?
        <p>Loading...</p>
      :
        <h1>{props.value}</h1>
      }
       <>

        <button onClick={props.getSomething}>Immediate</button>
        <button onClick={() => props.getSomething('async')}>Delayed</button>
        </>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    value: state.doSomethingReducer.value,
    loading: state.loadingReducer,
  }
}


const mapDispatchToProps = {
  getSomething,
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
