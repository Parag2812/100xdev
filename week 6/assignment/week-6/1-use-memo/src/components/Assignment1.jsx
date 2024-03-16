import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here
    const expensiveValue = useMemo(()=>{
        function factorial(n) {
            if (n === 0) {
                return 1;
            } else {
                return n * factorial(n - 1);
            }
        }
        return factorial(input);
    },[input]);
    //const expensiveValue = 0; 
    // Your solution ends here
    // const expensiveValue = useMemo(() => {
    //     function factorial(n) {
    //         if (n === 0) {
    //             return 1;
    //         } else {
    //             return n * factorial(n - 1);
    //         }
    //     }
        
    //     return factorial(input);
    // }, [input]);

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}