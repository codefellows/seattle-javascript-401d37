import React from 'react';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}



class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      otherStuff: 'maybe someday',
      words: 'nothing to see here',
    }
  }

  handleWord = event => {
    let words = event.target.value;
    this.setState({words});
  }

  handleClick = event => {
    event.preventDefault();
    let words = this.state.words
      .split('')
      .reverse()
      .join('');

    this.setState({ words });

  }

  render() {
    return (<div>
      <h3>{this.state.words}</h3>
      <input onChange={this.handleWord} />
      <button onClick={this.handleClick}>Click Me</button>
    </div>);
  }
}

export default App;
