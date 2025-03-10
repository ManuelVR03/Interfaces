import { useState } from "react";

export default function CounterHookFuncion() {
    const [count, setCount] = useState(0)

    const incrementar = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }
    const decrementar = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div className='row'>
            <div className='col-1 offset-5'>
                <h1>{count}</h1>
            </div>
            <div className='col-6'>
                <button className="btn btn-success" onClick={incrementar}>Incrementar</button>
                <button className="btn btn-danger" onClick={decrementar}>Decrementar</button>
                <button className="btn btn-warning" onClick={reset}>Reset</button>
            </div>
        </div>
    )
}