import React from 'react';
import { connect } from 'react-redux'
import { increment, reset } from '../store/votes';

const VotesCounter = props => {

  return (
    <section className="counter">
      <ul>
        {props.candidates.map(person =>
          <li onClick={() => props.increment(person.name)} key={person.name}>{person.name} : {person.votes}</li>
        )}
      </ul>
      <button onClick={props.reset}>Reset</button>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    candidates: state.counter.candidates
  }
}

const mapDispatchToProps = {
  increment,
  reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(VotesCounter);
