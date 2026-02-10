import { Component } from 'react';
import ShoppingListForm from '../ShoppingListForm/ShoppingListForm';
import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: uuidv4(), name: 'Milk', qty: '2 gallons' },
        { id: uuidv4(), name: 'Bread', qty: '2 loaves' },
      ],
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    this.setState((prevState) => ({
      items: [...prevState.items, { id: uuidv4(), ...item }],
    }));
  }

  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.name}: {item.qty}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}

export default ShoppingList;
