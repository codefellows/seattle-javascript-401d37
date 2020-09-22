import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { item: {} };
  }
  handleInputChange = e => {
    this.setState({ item: { ...this.state.item, [e.target.name]: e.target.value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    this.props.handleSubmit(this.state.item);
    const item = {};
    this.setState({ item });
  };

  render() {
    return (
      <Card>
        <Card.Body>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formDifficulty">
          <Form.Control type="range" min="0" max="5" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
        </Card.Body>
      </Card>
    )
  }
  renderx() {
    return (
      <>
        <h3>Add Item</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={this.handleInputChange} />
          </label>
          <label>
            <span>Assigned To</span>
            <input type="text" name="assignee" placeholder="Assigned To" onChange={this.handleInputChange} />
          </label>
          <button>Add Item</button>
        </form>
      </>
    );
  }
}

export default TodoForm;
