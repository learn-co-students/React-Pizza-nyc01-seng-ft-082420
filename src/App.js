import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaApi: [],
    editPizza: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => this.setState({ pizzaApi: pizzas}))
  }

  handlePizzaEdit = (pizzaObj) => {
    this.setState(() => ({
      editPizza: pizzaObj
    }))
  }


  handleFormEdit = (e) => {
    if (e.target.type === 'radio') {
      let vegOrNot = e.target.value === 'Vegetarian' ? true : false
      this.setState((previousState) => ({
        editPizza: {
          ...previousState.editPizza,
          vegetarian: vegOrNot
        }
      }))
    } else {
      this.setState((previousState) => ({
        editPizza: {
          ...previousState.editPizza,
          [e.target.name]: e.target.value
        }
      }))
    }
  }

  submitHandler = e => {
    fetch(`http://localhost:3000/pizzas${this.state.editPizza.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(this.state.editPizza)
    })
    .then(resp => resp.json())
    .then(editedPizza => {
      let newArray = [...this.state.pizzaApi]
      let found = newArray.find(pizza => pizza.id === editedPizza.id)
      newArray[newArray.indexOf(found)] = editedPizza

      this.setState({ pizzaApi: newArray })
    })
  }


  
  render() {
    
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizza={this.state.editPizza} handleFormEdit={this.handleFormEdit} submitHandler={this.submitHandler}/>
        <PizzaList pizzas={this.state.pizzaApi} pizzaEdit={this.handlePizzaEdit}/>
      </Fragment>
    );
  }
}

export default App;
