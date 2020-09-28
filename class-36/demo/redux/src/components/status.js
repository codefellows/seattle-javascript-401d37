import React from 'react';
import { connect } from 'react-redux'

const Status = props => {

  return (
    <section className="status">
      {props.votes}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    votes: state.counter.totalVotes
  }
}

export default connect(mapStateToProps)(Status);
