import React, { useState } from 'react'
import BookList from './components/book/BookList'
import AddBook from './components/addBook/AddBook'

const App = () => {
  const [bookToEdit, setBookToEdit] = useState(null)
  const handleEdit = (book) => {
    setBookToEdit(book)
  }
  const handleCancel = () => {
    setBookToEdit(null)
  }
  return (
    <div className='min-w-screen'>
      <BookList onHandleEdit={handleEdit} />
      <AddBook bookToEdit={bookToEdit} onCancel={handleCancel} />
    </div>
  )
}

export default App