import React, { Component } from 'react';

class MultipleForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    console.log('you submitted');
    this.setState({
      username: '',
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <div>
        <h1>Form Multiple Inputs</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.username}
            onChange={this.handleChange}
            placeholder='username'
            name='username'
          />
          <input
            type='email'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
            name='email'
          />
          <input
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
            name='password'
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MultipleForm;
