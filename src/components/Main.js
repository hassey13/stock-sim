import React from 'react'

import StockData from './StockData'
import StockGraph from './StockGraph'
import StockHeadlines from './StockHeadlines'

const Main = (
  props
) => (
  <div className='header'>
    <StockData />
    <StockGraph />
    <StockHeadlines />
  </div>
)

export default Main
