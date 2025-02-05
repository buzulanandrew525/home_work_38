import React, { Component } from 'react';

interface State {
  count: number;
}

class ClickCounter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Лічильник: {this.state.count}</p>
        <button onClick={this.increment}>Збільшити</button>
      </div>
    );
  }
}

export default ClickCounter;
