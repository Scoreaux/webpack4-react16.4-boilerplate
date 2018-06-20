import React, { Component } from 'react';

import styles from './App.scss';

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
      <div className={styles.container} onClick={this.increment}>
        Counter is at {count}
      </div>
    );
  }
}

export default App;
