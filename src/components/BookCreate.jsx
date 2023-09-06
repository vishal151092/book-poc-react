import React, { useState } from 'react'

const BookCreate = ({onBookCreate}) => {

    const [bookTitle, setBookTitle] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        onBookCreate(bookTitle);
        setBookTitle('');
    }

  return (
    <div className='add-book-wrapper'>
        <form onSubmit={handleSubmit}>
            <label>Title of Book</label>
            <input type='text' value={bookTitle} onChange={(event)=> setBookTitle(event.target.value)}/>
            <button>Create</button>
        </form>
    </div>
  )
}

export default BookCreate