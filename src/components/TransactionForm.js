import React from 'react'

const TransactionForm = ( props ) => {

  const submitButtonClass = props.valid ? 'submit-button green' : 'submit-button red'
  const textClass = props.valid ? 'green-font' : 'red-font'
  const text = props.valid ? 'Your order is ready to submit!' : 'Error: You do not have enough funds or order quantity is too low.'

  return (
    <div>
      <p className={ textClass }>{ text }</p>
      <form onSubmit={ props.onSubmit } >
        <label>Quantity: <input type='text' onChange={ props.onChange } value={ props.transactionQuantity }></input></label>
        <br></br>
        <input type='submit' value='Submit' className={ submitButtonClass } />
      </form>
    </div>
  )
}

export default TransactionForm
