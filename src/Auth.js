import React, {useState}from "react";
import { Link } from "react-router-dom";
import Mood from "./Mood";

const Auth = () =>{

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    return(
        <div className="auth">
        <form action="" className="form">
            <div>
            <label className="label">User Name</label>
            <input type="text" name="username" value = {userName} onChange = {(e) => setUserName(e.target.value)}/>
            </div>
            <div className="gap">
            <label className="label">Password</label>
            <input type="text" name="password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
            </div>
        </form>
        <div className="login-btn">
        <Link to={"/mood"}><span className="btnn">Login</span></Link>
        </div>
        </div>
    )
}


export default Auth