import React from 'react'

const Investment = ( props ) => {
  const textColor = props.quantity * props.currentPrice - props.quantity * props.price >= 0 ? 'green-font' : 'red-font'
  const investment = {
    id: props.id,
    quantity: props.quantity,
    price: props.price,
    type: 'sell'
  }

  return (
    <li>
      { `${ props.quantity } shares @ ${ props.price } - ROI: $` }
      <span className={ textColor }> { `${ (props.quantity * props.currentPrice - props.quantity * props.price).toFixed(2)  }` } </span>

      <button
        onClick={ () => { props.onSellClick( investment ) } }
        className='sell-button red'>Sell</button>
    </li>
  )}

export default Investment
