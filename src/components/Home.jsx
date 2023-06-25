import React, { useEffect, useState } from "react";
import Profile from "./Profile";


const Home = () => {
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)
    useEffect(() => {
        setCount(count + 1)
    }, [name])
    return(
        <>
            <input value={name} onChange={(event) => setName(event.target.value)} />
            <p>{count}</p>
            <Profile name={name} />
        </>
    )
}

export default Home