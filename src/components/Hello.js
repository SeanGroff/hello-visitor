import React, { Component } from 'react';
import Header from './Header';

export default class Hello extends Component {
  state = {
    name: '',
  };

  onChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ name: '' });
  };

  render() {
    return (
      <div className="container-fluid text-center">
        <Header name={this.state.name} />
        <div>
          <input
            type="text"
            placeholder="Type your name here"
            className="col-sm-6 col-sm-offset-3"
            value={this.state.name}
            onChange={this.onChange}
          />
          <div
            className="row justify-content-center"
            style={{ margin: '40px 0' }}
          >
            <button
              type="button"
              className="btn btn-lg btn-danger col-sm-2 col-sm-offset-5"
              onClick={this.handleClick}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    );
  }
}
