import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state= {
    pizzas: [],
    selectedPizza: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(resp => resp.json())
      .then(pizzas => this.setState({ pizzas }))
  }

  populateForm = pizzaObj => {
    this.setState({selectedPizza: pizzaObj})
  }

  changeHandler = e => {
    if(e.target.type === 'radio') {
      let updatedVegetarian = e.target.value === 'Vegetarian' ? true : false
      this.setState((prevState) => (
        {selectedPizza: {
          ...prevState.selectedPizza,
          vegetarian: updatedVegetarian
        }}
      ))
    } else {
      const {name, value} = e.target
      this.setState((prevState) => (
        {selectedPizza: {
          ...prevState.selectedPizza,
          [name]: value
        }}
      ))
    }
  }

  submitHandler = e => {
    e.preventDefault()
    fetch(`http://localhost:3000/pizzas/${this.state.selectedPizza.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      }, 
      body: JSON.stringify(this.state.selectedPizza)
    })
    .then(resp => resp.json())
    .then(updatedPizza => {
      let pizzaCopy = [...this.state.pizzas]
      let foundPizza = pizzaCopy.find(el => el.id === updatedPizza.id)
      pizzaCopy[pizzaCopy.indexOf(foundPizza)] = updatedPizza

      this.setState({pizzas: pizzaCopy})
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.selectedPizza} changeHandler={this.changeHandler} submitHandler={this.submitHandler}/>
        <PizzaList pizzas={this.state.pizzas} clickHandler={this.populateForm} />
      </Fragment>
    );
  }
}

export default App;
