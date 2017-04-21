import React from 'react'

const StockData = ( props ) => (
  <div className='stock-data'>
    <h3>Summary</h3>
      <table className='inline'>
        <tbody>
        <tr>
            <td className='left'>Open:</td>
            <td className='right'>{ props.stock.open }</td>
          </tr>
          <tr>
            <td className='left'>Close:</td>
            <td className='right'>{ props.stock.close }</td>
          </tr>
          <tr>
            <td className='left'>High:</td>
            <td className='right'>{ props.stock.high }</td>
          </tr>
          <tr>
            <td className='left'>Low:</td>
            <td className='right'>{ props.stock.low }</td>
          </tr>
        </tbody>
      </table>
      <table className='inline'>
        <tbody>
          <tr>
            <td className='left'>52 Week Low:</td>
            <td className='right'>{ props.stock.yearLow }</td>
          </tr>
          <tr>
            <td className='left'>52 Week High:</td>
            <td className='right'>{ props.stock.yearHigh }</td>
          </tr>
          <tr>
            <td className='left'>Market Cap:</td>
            <td className='right'>{ props.stock.marketCap }</td>
          </tr>
          <tr>
            <td className='left'>Volume:</td>
            <td className='right'>{ props.stock.volume }</td>
          </tr>
        </tbody>
      </table>
  </div>
)

export default StockData
