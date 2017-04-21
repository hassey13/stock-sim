import React from 'react'

const StockHeadlines = ( props ) => (
  <div className='stock-data'>
    <h3>Headlines</h3>
    <ul>
      <li><a href='#'>{ `${props.stock.name} soars on getting a buy rating` }</a></li>
      <li><a href='#'>{ `Better buy ${props.stock.name} vs. Apple` }</a></li>
    </ul>
  </div>
)

export default StockHeadlines
