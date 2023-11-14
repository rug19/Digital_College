import { useState } from 'react'
import './Cart.css'
import { BsFillCartFill } from 'react-icons/bs'

export default function Cart() {

    const [count, setCount] = useState(0)

    return (
        <button className='btn btn-primary'  onClick={() => setCount(prevState => prevState + 1)}>
            <div className="badge" value={count}>
                <BsFillCartFill fontSize='1.5rem' />
            </div>
        </button>
    )
}