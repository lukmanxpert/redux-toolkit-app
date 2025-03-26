import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByAmount, increment, reset } from './counterSlice';

export default function CounterView() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    console.log(count);
    return (
        <div className='flex justify-center flex-col items-center '>
            <h1 className='text-3xl font-bold'>Count: {count}</h1>
            <div className='all-button flex gap-4'>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(increaseByAmount(5))}>Increase 5</button>
            </div>
        </div>
    )
}
