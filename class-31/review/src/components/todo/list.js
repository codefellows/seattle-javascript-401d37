import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

class TodoList extends React.Component {

  render() {
    return (
      <ListGroup>
        {this.props.list.map(item => (
          <ListGroup.Item action variant={item.complete ? "success" : "danger"}

            key={item._id}
          >
            <span onClick={() => this.props.handleComplete(item._id)}>
              {item.text}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

export default TodoList;
