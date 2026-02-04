import React, { Component } from 'react';

class Form_1 extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({ username: evt.target.value });
  }

  render() {
    return (
      <div>
        <h1>Form Demo</h1>

        <form>
          <input
            type='text'
            value={this.state.username}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form_1;
