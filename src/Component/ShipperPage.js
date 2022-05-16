import React from 'react'
import ShipperCard from './ShipperCard'
import Product from './Product'
import CommentCard from './CommentCard'
import '../static/ShipperPage.css'

const ShipperPage = () => {
  return (
    <>
      <div className='shipper-page'>
        <div className='shipper-page-left'>
          <ShipperCard/>
        </div>
        <div className='shipper-page-center'>
          <Product/>
        </div>
        <div className='shipper-page-right'>
          <CommentCard/>
        </div>
      </div>
    </>
  )
}

export default ShipperPage