import React from 'react';

class Form extends React.Component {

  handleSubmit = async e => {

    e.preventDefault();

    this.props.toggleLoading();


    // fetch the data...

    let raw = await fetch('https://swapi.dev/api/people/');
    let data = await raw.json();

    // fetch done

    let count = data.count;

    let people = data.results.reduce((list, person) => {
      list[person.name] = person.url;
      return list;
    }, {});

    this.props.handler(count, people);
    this.props.toggleLoading();

  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button>{this.props.prompt}</button>
      </form>
    );
  }
}

export default Form;
