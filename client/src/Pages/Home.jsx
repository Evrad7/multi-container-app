import { Link } from "react-router-dom"

const Home=()=>{
    return (
        <div style={{textAlign:"center"}}>
            <h1>Welcome to fibonacci calculator build by TML</h1> 
            <h3><Link to="/fibo">Calculate</Link></h3> 
        </div>

    )
}

export default Home