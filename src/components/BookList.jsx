import React from 'react'
import BookShow from './BookShow'

const BookList = ({books, onDelete}) => {

  const deleteHandler= (id)=>{
    
    onDelete(id);
  }

  const renderBooks = ()=>{
    return books.map((book)=> <BookShow key={book._id} book={book} onDelete={deleteHandler} />)
  }

  return (
    <>
    <div className='list-title'><span>BookList</span></div>
    <div className='book-list-wrapper'>
    {renderBooks()}
    </div>
    </>
  )
}

export default BookList