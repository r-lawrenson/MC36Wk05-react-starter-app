
import { useState } from "react";
const State = () => {
  //         value    function
  const [persons, setPersons] = useState([
    { name: "leon", age: 31 },
    { name: "christian", age: 29 },
  ]);

  const handleClick = (name) => {
    alert(name);
    
  };

  return (
    <div>

      <h1>i'm a functional component</h1>
      <Person name={persons[0].name} age={persons[0].age} func={handleClick} />
      <Person name={persons[1].name} age={persons[1].age} func={handleClick} />
    </div>
  );
};

const Person = (props) => {
  return (
    <div>
      <p>
        my name is {props.name} and i am {props.age}
      </p>
      <button onClick={() => props.func(props.name)}>hit me</button>
    </div>
  );
};

export default State;









































// import { useState } from "react"

// const State = () => {

//     const [persons, setPersons] = useState([
//         { name: 'Dan', age: 34 },
//         { name: 'Ben', age: 21 }
//     })

//     return (
//         <div>
//             <h1>functional components</h1>
//             <Person name={persons[0].name}/>
//             <Person name={persons[1].name}/>
//         </div>
//     )
// }

// const Person = (props) => {
//     return <p> a person {props.name} and age is {props.age}</p>
// }

// export default State