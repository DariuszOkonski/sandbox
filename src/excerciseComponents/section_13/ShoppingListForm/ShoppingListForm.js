import { Component } from 'react';

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      qty: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.addItem(this.state);

    this.setState({
      name: '',
      qty: '',
    });
  }

  render() {
    return (
      <div>
        <h1>Shopping List Form...</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='name'>Name: </label>
            <input
              type='text'
              id='name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor='qty'>Quantity: </label>
            <input
              type='text'
              name='qty'
              id='qty'
              value={this.state.qty}
              onChange={this.handleChange}
            />
          </div>

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ShoppingListForm;
