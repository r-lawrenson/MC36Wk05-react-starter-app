

const Conditional = () => {
    const [open, setOpen] = useState(false)

    if(open === false) {
        return (
            <>
            <h2>open set to false</h2>
            <button onClick={() => setOpen(true)}>click</button>
            
            </>
        )
    }

    return (
        <div>
            <h1>hello and welcome</h1>
           
        </div>
    )








}