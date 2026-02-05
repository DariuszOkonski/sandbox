import { Component } from 'react';
import ShoppingListForm from '../ShoppingListForm/ShoppingListForm';

class ShoppingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: '1', name: 'Milk', qty: '2 gallons' },
        { id: '2', name: 'Bread', qty: '2 loaves' },
      ],
    };
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
        <ShoppingListForm />
      </div>
    );
  }
}

export default ShoppingList;
