import React from 'react'
import Product from './Product'

function Products() {

    let productsList=[
        {
            productName: "Wet food",
            productImage: "https://media.istockphoto.com/id/1216756472/photo/ready-to-eat-tasty-seafood-poke-bowls-staying-at-home.jpg?s=612x612&w=0&k=20&c=gpExoyMu-y4IK56yMgNH_nKIIk5HKP_ZXGgq3QgFoP8="
        },
        {
            productName: "Wet food",
            productImage: "https://media.istockphoto.com/id/1216756472/photo/ready-to-eat-tasty-seafood-poke-bowls-staying-at-home.jpg?s=612x612&w=0&k=20&c=gpExoyMu-y4IK56yMgNH_nKIIk5HKP_ZXGgq3QgFoP8="
        }
    ]

  return (
    <div>
      <p className="display-4 text-info text-center lead">Products</p>
      <hr />
      <div className="d-flex container">
        {/* {
            productsList.map((productObj,index)=> <Product key={index} productObj={productObj}>
                <h3>This is new Data</h3>
            </Product>)
        } */}
        <Product productObj={productsList[0]}>
            <span>This is new information</span>
        </Product>
        <Product productObj={productsList[1]}>
            This is old information
        </Product>
      </div>
    </div>
  )
}

export default Products
