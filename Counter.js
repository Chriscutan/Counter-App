import {useState} from 'react';

function Counter(){
    const [number, setNumber] = useState(0);
    function Increment(){
        setNumber(number + 1);
    }
    
    function Decrement(){   
        setNumber(number - 1);
    }
    return(
        <div className="container">
            <h1 className="number">{number}</h1>
            <button className="btn1" onClick={Increment}>Increment</button>
            <button className="btn2" onClick={Decrement}>Decrement</button>
        </div>
    );
}

export default Counter;