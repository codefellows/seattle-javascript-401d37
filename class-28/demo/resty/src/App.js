import React from 'react';
import md5 from 'md5';
import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';
import History from './components/History';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      loading: false,
      request: {},
      history: {},
    };
  }

  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  }

  updateHistory(request) {

    let hash = md5(JSON.stringify(request));

    const history = { ...this.state.history, [hash]: request }

    this.setState({ history }, () => {
      localStorage.setItem('history', JSON.stringify(this.state.history));
    });
  }

  updateResults = (headers, results) => {
    this.setState({ headers, results });
  };

  updateRequest = (request) => {
    this.setState({ request });
  }

  fetchResults = async (request) => {

    try {

      this.toggleLoading();

      this.updateRequest(request);

      let response = await axios(request);

      this.toggleLoading();


      this.updateHistory(request);

      this.updateResults(response.headers, response.data);

    }
    catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('history'));
    this.setState({ history });
  }

  render() {
    return (
      <>
        <Header />
        <Form request={this.state.request} handler={this.fetchResults} />
        <main>
          <History handler={this.updateRequest} calls={this.state.history} />
          <Results loading={this.state.loading} headers={this.state.headers} results={this.state.results} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
