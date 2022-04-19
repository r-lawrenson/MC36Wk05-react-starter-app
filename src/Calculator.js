
import './Calculator.css';
import { useState } from "react"
import { evaluate } from "mathjs"


const Calculator = () => {
    const buttons = ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "="]
    const [display, setDisplay] = useState("")



    const clickHandler = (value) => {
        if(value === "c") {
            // set display value to an empty string
            setDisplay("")
        } else if(value === "="){
            // if equals use evaluate from mathjs
            setDisplay(evaluate(display))
        } else {setDisplay(display + value) // don't forget to add else... otherwise it dosent work!
        // any other key (number and math operators) append to display value
        }
    }
    return (
        <div>
            <h1>calculator</h1>
            <h2>{display}</h2> 
            {/* use map on buttons array */}
            {buttons.map((button, index) => {
                
                // NO PROPS EXAMPLE FOR RETURN
                return (
                    <div >
                        {/* use onclick to call clickhandler on button so clickhandler gets button value in array */}
                        <button id="btnCalc" onClick={() => clickHandler(button)}>{button}</button>
                    </div>
                )

                // PROPS EXAMPLE FOR RETURN - NEED TO USE THESE MORE!
                // return <Button clickHandler={clickHandler} button={button}/>;
            })}
        </div>
    )
}

// PROPS EXAMPLE FOR RETURN ABOVE
// use onclick to call clickhandler on button so clickhandler gets button value in array 

// const Button = ({clickHandler, button}) => { // don't forget curly brackets!
//     return (
//         // div or no div? REMEMBER FRAGMENT IS <> OPEN and </> CLOSE IN PLACE OF div
//         <>
//             <button id="btnCalc" onClick={() => clickHandler(button)}>{button}</button>
//         </>
//     )
// }







export default Calculator
