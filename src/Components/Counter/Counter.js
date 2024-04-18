import {useState} from "react";

const Counter = () =>{
    // Hooks (Es una funcion)
    
    const [counter,setCounter] = useState(0)
    const sumar = ()  => {
        setCounter(counter + 1);
    };

    const restar = ()  => {
        setCounter(counter - 1);
    }

    console.log(counter);

    return(
        <> 
            <h1>Contador: 🔥{counter}</h1>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </>
    )

};

export default Counter;