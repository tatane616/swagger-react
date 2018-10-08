import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: []
    };
    this._onClick = this._onClick.bind(this);
  }

  _onClick(status) {
    fetch(`http://localhost:8081/v2/pet/findByStatus?status=${status}`, {
      headers: { accept: 'application/json' }
    })
      .then(res => res.json())
      .then(res => this.setState({ result: res }));
  }

  renderItems(item, index) {
    return (
      <div key={index}>
        name: {item.name}, status: {item.status}
      </div>
    );
  }

  render() {
    console.log(this.state.result);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Swagger stub server</h1>
          <p>
            <a href="https://petstore.swagger.io/">Swagger Petstore</a>
          </p>
          <button onClick={() => this._onClick('available')}>
            GET /pet/findByStatus available
          </button>
          <h2>Result</h2>
          {this.state.result.map((item, index) =>
            this.renderItems(item, index)
          )}
        </header>
      </div>
    );
  }
}

export default App;
