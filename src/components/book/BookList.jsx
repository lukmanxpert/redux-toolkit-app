import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../../features/bookSlice'

const BookList = () => {
    const dispatch = useDispatch()
    const books = useSelector(state => state.booksR.book)
    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }
    console.log("Book's", books);
    return (
        <div className='flex items-center flex-col'>
            <h1 className='text-center text-3xl font-bold my-2 border-b-2'>Book List's</h1>
            <ul className=''>
                {
                    books && books.length > 0 ? books.map((book) => {
                        return <li key={book.id} className='flex gap-4 justify-center items-center'>
                            <p className='font-medium'>{book.id}. {book?.name} by {book.author} ${book.price} - {book.quantity}pcs</p>
                            <button onClick={() => handleDelete(book.id)}>Delete</button>
                        </li>
                    }) : "No Book's Available"
                }
            </ul>
        </div>
    )
}

export default BookList