import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../../context/ProductContext/ProductState'
import Product from '../Product/Product'
import { UserContext } from '../../context/UserContext/UserState'
import ProductsAdmin from '../ProductsAdmin/ProductsAdmin'

const Products = () => {
  const { getProducts } = useContext(ProductContext)
  const { user } = useContext(UserContext)
  if (user == null) {
    useEffect(() => {
      getProducts()
    }, [])

    return (
      <div>
        <Product />
      </div>
    )
  } else if (user.role == "user") {
    useEffect(() => {
      getProducts()
    }, [])

    return (
      <div>
        <Product />
      </div>
    )
  } else if (user.role == "admin") {
    return (
      < div >
      <ProductsAdmin />
      </div>
    )
    
  }
    
    
    
    
}

export default Products