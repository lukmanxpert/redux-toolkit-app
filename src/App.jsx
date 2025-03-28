import React, { useState } from 'react'
import BookList from './components/book/BookList'
import AddBook from './components/addBook/AddBook'
import { Posts } from './features/posts/Posts'

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
      <AddBook bookToEdit={bookToEdit} onCancel={handleCancel} setBookToEdit={setBookToEdit} />
      <Posts />
    </div>
  )
}

export default App