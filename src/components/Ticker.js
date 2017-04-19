import React from 'react'

const Ticker = ( props ) => {
  const tickerClass = props.stock.price - props.stock.open >= 0 ? 'ticker green' : 'ticker red'

  return (
    <div className={ tickerClass }>
      <div className='ticker-price'>
        <p>{ props.stock.price }</p>
      </div>
      <div className='ticker-price-change'>
        <p className='larger'>{ (props.stock.price - props.stock.open).toFixed(2) }</p>
        <p>{ `${((props.stock.price - props.stock.open)/ props.stock.open * 100).toFixed(2)}%` }</p>
      </div>
      <div className='clear'></div>
    </div>
  )
}

export default Ticker
