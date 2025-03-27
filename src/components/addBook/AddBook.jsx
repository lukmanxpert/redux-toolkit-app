import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid'
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../../features/bookSlice';

const AddBook = ({ bookToEdit, onCancel }) => {
    const dispatch = useDispatch()
    const [book, setBook] = useState({
        name: "",
        author: "",
        price: "",
        quantity: ""
    })
    useEffect(() => {
        if (bookToEdit) {
            setBook(bookToEdit)
        }
    }, [bookToEdit])

    const handleChange = (event) => {
        const { name, value } = event.target
        setBook((prevBook) => ({ ...prevBook, [name]: value, id: nanoid() }))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (bookToEdit) {
            dispatch(updateBook(book))
            setBook({
                name: "",
                author: "",
                price: "",
                quantity: ""
            });
        } else {
            dispatch(addBook(book))
            setBook({
                name: "",
                author: "",
                price: "",
                quantity: ""
            });
        }
    }
    console.log(book);
    return (
        <div className='flex flex-col items-center mt-10'>
            <h1 className='font-bold text-xl mb-4 border-b-2'>Add Book Form</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                <input required value={book.name} onChange={handleChange} className='border-2 rounded-lg px-4 py-2' type="text" name='name' placeholder='Name' />
                <input required value={book.author} onChange={handleChange} className='border-2 rounded-lg px-4 py-2' type="text" name='author' placeholder='Author' />
                <input required value={book.price} onChange={handleChange} className='border-2 rounded-lg px-4 py-2' type="number" name='price' placeholder='Price' />
                <input required value={book.quantity} onChange={handleChange} className='border-2 rounded-lg px-4 py-2' type="number" name='quantity' placeholder='Quantity' />
                <button className='border-2 border-black' type="submit">{bookToEdit ? "Edit Book" : "Add Book"}</button>
                {bookToEdit && <button onClick={() => {
                    onCancel()
                    setBook({
                        name: "",
                        author: "",
                        price: "",
                        quantity: ""
                    });
                }}>Cancel</button>}
            </form>
        </div>
    );
};

export default AddBook;