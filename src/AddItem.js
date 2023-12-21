import React from 'react'
import { FaPlus } from 'react-icons/fa6'
export const AddItem = ({newItem, setnewItem,handleSubmit}) => {
  return (
    <form className ='addform'onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor ='additem'>AddItem</label>
        <input
        autoFocus
        id ='additem'
        type ='text'
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e)=> setnewItem(e.target.value)}/>
        <button
        type='submit'
        aria-label='Add Item'
        >
            <FaPlus/></button></form>
  )
}
