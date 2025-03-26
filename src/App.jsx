import React from 'react'
import BookList from './components/book/BookList'
import AddBook from './components/addBook/AddBook'

const App = () => {
  return (
    <div className='min-w-screen'>
      <BookList />
      <AddBook />
    </div>
  )
}

export default App