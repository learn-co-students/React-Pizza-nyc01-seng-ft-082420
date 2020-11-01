import React from "react"

const PizzaForm = ({pizza, changeHandler, submitHandler}) => {
  const {topping, size, vegetarian} = pizza

  return(
    <div className="form-row" onChange={changeHandler}>
      <div className="col-5">
          <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" value={topping}/>
      </div>
      <div className="col">
        <select value={size} className="form-control" name="size">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input className="form-check-input" type="radio" value="Vegetarian" checked={vegetarian}/>
          <label className="form-check-label">
            Vegetarian
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!vegetarian}/>
          <label className="form-check-label">
            Not Vegetarian
          </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={submitHandler} >Submit</button>
      </div>
    </div>
  )
  

}

export default PizzaForm
