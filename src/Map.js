import { useState } from "react"

const Map = () => {
        // value
    const [names, setNames] = useState([
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta",
        "Echo"
    ])

    return (
        <div>  
            <h1>Name is </h1>
                {/* paramater 1 */}
            {names.map((name, index) => {
                // return name to the HTML element and 
                // iterrate through the array
                // return <div>{name}</div>

                // return component Person
                // map second paramater is index (as unique id key)
                return <Person key={index} name={name} />
            })}
        </div>
    )
}
// make a person component
const Person = (props) => {
    return <h2>{props.name}</h2>
}

export default Map