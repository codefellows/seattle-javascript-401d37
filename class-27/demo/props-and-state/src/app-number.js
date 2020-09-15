import React from 'react';

import './styles.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    }
  }

  numChangeHandler = num => {
    this.setState({ num });
  }

  render() {
    return (
      <>
        <h1>Number Fun</h1>
        <Number num={this.state.num} otherProp="otherThing" />
        <h3>Playing around {this.state.num}</h3>
        <NumberForm onNumChange={this.numChangeHandler} />
      </>
    );
  }
}

function Number(props) {
  return <h2 data-testid="output">Number here: {props.num}</h2>
}

function NumberForm(props) {

  function changeHandler(event) {
    props.onNumChange(event.target.value);
  }

  return (
    <form>
      <input data-testid="num" type="number" placeholder="0" onChange={changeHandler} />
    </form>
  )
}

export default App;
