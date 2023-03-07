// Write your code here
import React from 'react'

const DenominationItem = props => {
  const {details, amount} = props
  const {id, value} = details

  const clickHandler = () => {
    amount(details.value)
  }
  return (
    <li>
      <button onClick={clickHandler} key={id}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
