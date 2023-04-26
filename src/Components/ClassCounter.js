import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        }
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
      }
      handleIncrease(e) {
        e.preventDefault();
        this.setState({count: this.state.count + 1})
      }
      handleDecrease(e) {
        e.preventDefault();
        this.setState({count: this.state.count - 1})
      }
      render() {
        return (
          <div>
            <h1>Counter: {this.state.count}</h1>
            <div className="buttons">
              <button onClick={this.handleIncrease}>Increase Count</button>
              <button onClick={this.handleDecrease}>Decrease Count</button>
            </div>
          </div>
        )
      }
}

export default ClassCounter