import React from 'react'

const BookShow = ({book, onDelete}) => {

  const deleteClickHandler = ()=>{
    onDelete(book._id);
  }


  return (
    <div className='book-wrapper'>
    
      <h2>{book.title}</h2> | 
      <div><span><button onClick={deleteClickHandler} >Delete</button></span></div>
      </div>
  )
}

export default BookShow