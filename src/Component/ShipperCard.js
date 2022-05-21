import React from 'react'
import { useSelector } from 'react-redux'
import '../static/ShipperCard.css'

const ShipperCard = () => {

  const user = useSelector(state => state.user.user)


  return (
      <>
      <div className='shipper-card'>
        <div className='shipper-card-avatar'>
          {user.avatar != null
          ? <img src={user.avatar}></img>
          : <img src='/avt.png'></img>}
        </div>
        <div>
          <span>Shipper: {user.first_name} {user.last_name}</span>
        </div>
        <div>
          <span>star</span>
        </div>
        <div>
          <span>sdt: {user.phone}</span>
        </div>
        <div>
          <span>doanh thu: {user.cash}</span>
        </div>
        <div>
          <span>xem chi tiet</span>
        </div>
      </div>
      </>
  )
}

export default ShipperCard