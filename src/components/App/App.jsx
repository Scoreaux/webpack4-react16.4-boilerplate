import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0,
  }

  increment = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <div onClick={this.increment}>Counter is at {count}</div>
    );
  }
}

export default App;
