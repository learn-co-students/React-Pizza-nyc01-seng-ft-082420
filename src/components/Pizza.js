import React from "react"

const Pizza = ({pizza, clickHandler}) => {
  const {topping, size, vegetarian} = pizza

  const localClickHandler = () => {
    clickHandler(pizza)
  }

  return(
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={localClickHandler}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
