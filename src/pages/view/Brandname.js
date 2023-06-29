import React from 'react'

function Brandname(props) {
  return (
    <div className='card'>
    <img className='product--image' src={props.url} alt="product--image" />
  </div>
  )
}

export default Brandname
