import React, { Component } from "react"
import { render } from "react-dom"

class PizzaForm extends Component {



  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitHandler(e)
  } 

  changeHandler = (e) => {
    this.props.handleFormEdit(e)
    
  }

  render () {
    
    return(
      <div className="form-row" >
        <div className="col-5">
            <input name="topping"  onChange={this.changeHandler} type="text" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                this.props.currentPizza.topping
              }/>
        </div>
        <div className="col">
          <select name='size' onChange={this.changeHandler} value={this.props.currentPizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={this.changeHandler} type="radio" value="Vegetarian" checked={this.props.currentPizza.vegetarian ? true : false}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={this.changeHandler} type="radio" value="Not Vegetarian" checked={this.props.currentPizza.vegetarian ? false : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
      )
  }

}

export default PizzaForm
