import React from 'react'
import { useSelector } from 'react-redux'

const ContactItem = ({item}) => {
  return (
    <div className='contactItem'>
      <img src={`${process.env.PUBLIC_URL}/img/user.png`}/>
      <div className='contactItemData'>
        <h5>{item.name}</h5>
        <p>{item.phone}</p>
      </div>
    </div>
  )
}

export default ContactItem