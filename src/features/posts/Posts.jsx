import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice'

export const Posts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchPosts())
    }, [])
    const { post, isLoading, isError } = useSelector((state) => state.postR);
    return (
        <div className='p-6'>
            <h1 className='text-2xl text-center font-bold my-2'>Posts</h1>
            {isLoading && <h3>Loading...</h3>}
            {isError && <h3>{isError}</h3>}
            <section className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                {post && post.map((p) => {
                    return <article key={p.id} className='p-2 border-2 rounded-lg'>
                        <p className='text-xl font-medium'>User ID: {p.userId}</p>
                        <p className='text-xl font-medium'>ID: {p.id}</p>
                        <p className='text-base'>Title: {p.title}</p>
                        <p className='text-base'>Desc: {p.body}</p>
                    </article>
                })}
            </section>
        </div>
    )
}
