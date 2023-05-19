import React,{useState} from 'react'

const Search = ({enteredVal,onSubmitting}) => {
console.log(enteredVal)
  return (
    <div>
        <input  type='text' value={enteredVal} placeholder='Search by Country' onChange={onSubmitting}/>
        <button onClick={onSubmitting}>Search</button>
    </div>
  )
}

export default Search