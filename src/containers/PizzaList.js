import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    let pizzas = this.props.pizzas.map(pizza => <Pizza key={pizza.id} pizza={pizza} pizzaEdit={this.props.pizzaEdit}/>)
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            pizzas
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
