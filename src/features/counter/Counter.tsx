import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import { RootState } from '../../app/store'

export const Counter = () => {
    const dispatch = useDispatch()
    const [incAmount, setIncAmount]: any = useState(0)
    const  count  = useSelector((state:  RootState)  => state.counter.value)
  return (
    <div>
        <div>
            <button
            aria-label='Increment value'
            onClick={() => dispatch(increment())}
            >Incerement</button>
            <span>{count}</span>
            <button
            aria-label='Decrement value'
            onClick={() => dispatch(decrement())}
            >Decerement</button>
            <input
            aria-label="Set increment amount"
            type="number"
            value={incAmount}
            onChange={e => setIncAmount(e.target.value)}
            />
            <button
            onClick={()=> dispatch(incrementByAmount(Number(incAmount) || 0))}
            >
                Add amount
            </button>
        </div>
    </div>
  )
}
