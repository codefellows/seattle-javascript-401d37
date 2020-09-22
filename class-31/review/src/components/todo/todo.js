import React from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



import './todo.scss';

class ToDo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    this.setState({ list: [...this.state.list, item] });
  };

  toggleComplete = id => {

    let item = this.state.list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list = this.state.list.map(listItem => listItem._id === item._id ? item : listItem);
      this.setState({ list });
    }

  };

  componentDidMount() {
    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];

    this.setState({ list });
  }

  render() {
    return (
      <>
        <header>
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
          </Navbar>

        </header>

        <Container>

          <Row>

            <Col >

              <header>
                <Navbar bg="dark" variant="dark">
                  <Nav className="mr-auto">
                    {/* <Nav.Link href="#home">Home</Nav.Link> */}
                    <Navbar.Brand>
                      To Do List Manager ({this.state.list.filter(item => !item.complete).length})

          </Navbar.Brand>
                  </Nav>
                </Navbar>

              </header>
            </Col>
          </Row>

          <Row>

            <Col md={4}>
              <div>
                <TodoForm handleSubmit={this.addItem} />
              </div>
            </Col>
            <Col md={8}>
              <div>
                <TodoList
                  list={this.state.list}
                  handleComplete={this.toggleComplete}
                />
              </div>
            </Col>
          </Row>


        </Container>
      </>
    );
  }
}

export default ToDo;
