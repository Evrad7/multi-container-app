import {useState, useEffect} from "react"
import { getAllIndexes, addIndex, getAllFiboEntries } from "../services/fiboService"


const Fibo=()=>{
    const [indexes, setIndexes]=useState([])
    const [fiboEntries, setFiboEntries]=useState({})
    const [value, setValue]=useState({})
    

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response=await addIndex(value)
        refresh()

    }

    const refresh=()=>{
        getAllIndexes().then((ids)=>setIndexes(ids))
        .catch(error=>console.log(error))

        getAllFiboEntries().then(entries=>setFiboEntries(entries))
        .catch(error=>console.log(error))

        setValue("")

    }
    useEffect(()=>{
        refresh()
    }, [])
    return (
       <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1>Welcome to fibonacci calculator</h1> 
        <form onSubmit={handleSubmit}>
            <label>Enter your index: </label>
            <input  type="number" name="index" value={value} onChange={(e)=>setValue(e.target.value)} />
            <button type="submit">submit</button>
        </form>
        <div>

            <h3>Indexes that have been calaculated: </h3>
            <ul>
                {indexes.map((elt, i)=><li key={i}>{elt.index} on {elt.date_created}</li>)}
            </ul>
        </div>

        <h3>
            Calculted values <br/>
            <ul>
                {Object.entries(fiboEntries).map((elt, i)=>
                 <li key={i}>The value of {elt[0]} is {elt[1]}</li>
                )}
            </ul>
            
        </h3>
       </div> 

    )
}

export default Fibo