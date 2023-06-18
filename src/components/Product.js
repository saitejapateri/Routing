import React from 'react'

function Product(props) {
    console.log(props)
  return (
    <div className='card card-body text-center '>
        <h4>{props.children}</h4>
        <img src={props.productObj.productImage} alt="" />
        <h2>{props.productObj.productName}</h2>
    </div>
  )
}

export default Product
