import React from 'react'

const Heading = ( props ) => (
  <div className='heading'>
    <h1>{ props.stock.name }</h1>
    <p className='heading-sub'>Symbol: { props.stock.ticker }</p>
  </div>
)

export default Heading
