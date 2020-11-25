import React,{useState} from 'react'
import "./css/Login.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button, TextField } from '@material-ui/core';
import {Link} from "react-router-dom"
function Login() {
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    return (
        <div className="login">
            <AccountCircleIcon/>
            <h1>Welcome!</h1>
            <h2>Sign in to continue</h2>
            <form action="#">
            <TextField className="input" id="outlined-basic" label="Enter Email" variant="outlined" type="email" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <TextField className="input" id="outlined-basic" label="Enter Password" variant="outlined" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <p className="information">“A good physician treats the disease, the great physician treats the patient who has the disease.”</p>
            <Link to={`${username}`}>
            <Button variant="contained" color="primary" type="submit" >
            Login
            </Button>
            </Link>
            
            </form>


            
        </div>
    )
}

export default Login
