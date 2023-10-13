import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  // 이 값을 redux store 로 보내야함
  const[name, setName] = useState("");
  const[phone, setPhone] = useState("");

  const dispatch = useDispatch();
  
  const addContact = (event) => {
    // 새로 고침 안 되도록
    event.preventDefault();
    // 매개변수 2개
    dispatch({type:'ADD_CONTACT', payload:{name:name, phone:phone}});
  }
  
  return (
    <div className='contactForm'>
      <h2>Save phone number</h2>
      <form onSubmit={addContact}>
        <label htmlFor="name">Name</label>
        <input 
          type='text' 
          placeholder='Enter name' 
          id='name' 
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <label htmlFor="phone">Phone</label>
        <input 
          type='text' 
          placeholder='Phone Number' 
          id='phone'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}  
        ></input>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default ContactForm