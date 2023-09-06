import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App() {
  const [books, setBooks] = useState([])

  const createBookHandler = (title)=>{
    console.log('add ', title )
    setBooks([...books, {_id:books.length+1, title: title}]);
  }

  const deleteHandler = (id)=>{
    console.log(id)
    setBooks( books.filter((book)=> book._id !== id ))
  }

  return (
    <>
    <div className='screen-wrapper'>
      <BookList books={books} onDelete={deleteHandler} />
      <BookCreate onBookCreate = {createBookHandler} />
      </div>
    </>
  )
}

export default App
