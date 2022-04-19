import { useState } from "react"
const Common =() => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4])
    const [inputText, setInputText] = useState("")

    const addHandler = () => {
        let storedNums = [...numbers]
        storedNums.push(storedNums[storedNums.length - 1] + 1)
        setNumbers(storedNums)
    }
// add in a remove handler
    const removeHandler = index => {
        let storedNums = [...numbers]
// splice removers a specific item in the array
        storedNums.splice(index, 1)
        setNumbers(storedNums)
    }

    const inputHandler = (Event) = () => {
        setInputText(Event.target.value)
    }

    return (
        // key={index}
        <div > 
            <h1>Common</h1>
            <input onChange={inputHandler}/>

            {/* render button click button to add number PLACE AT TOP TO SHOW AT THE TOP!*/}
            <button onClick={addHandler}>add one</button>
            {/* <button key={index} onClick={() => removeHandler(index)}>{number}removeone</button> */}

            <h2>{inputText}</h2>
            {numbers.map((number, index) => {
                return (
                // <h2 key={index}></h2>
                    // render text, click text to remove
                    <p key={index} onClick={() => removeHandler(index)}>{number}</p>
                    // darn! renders a button!
                    // <button key={index} onClick={() => removeHandler(index)}>{number}removeone</button>
            )
            })}
            {/* render button click button to add number */}
            {/* <button onClick={addHandler}>add one</button> */}
            {/* <button key={index} onClick={() => removeHandler(index)}>{number}removeone</button> */}
            
        </div>
    )
}

export default Common

