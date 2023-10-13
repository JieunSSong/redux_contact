import React, { useEffect, useState } from "react";
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'
const ContactList = () => {
  const { contact, keyword } = useSelector((state) => state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (keyword !== "") {
      let list = contact.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contact);
    }
  }, [keyword]);
  return (
    <div className='contactList'>
      <h2>Find phone number</h2>
      <p>저장한 연락처를 검색하세요</p>
      <SearchBox/>
      <h4>Name : {filteredList.length}</h4>
      {
        filteredList.map((item, index)=>(
          <ContactItem item={item} key={index} />
        ))
      }
    </div>
  )
}

export default ContactList