import React from 'react'
import Products from '../Products/Products'

const Home = () => {
  return (
    <div>

      <div className="h-[300px] relative">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('../../../src/assets/Home.jpg')] opacity-50"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className=" text-4xl font-bold">Welcome to Pedrito Store</h1>
        </div>
      </div>
      <div>
        <Products />
      </div>
    </div >

  )
}

export default Home