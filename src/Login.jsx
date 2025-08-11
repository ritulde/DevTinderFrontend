import axios from "axios";
import React, { useState } from "react";

export const Login = () => {


  const [email,setEmailId]=useState("");
  const [password,setPassword]=useState("");

  const handleLogin = async ()=>{
    try{
       await axios.post("http://localhost:3000/login",{
        email,
        password
      },{withCredentials:true})
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <div className="flex justify-center my-10">
      <div className="card card-dash bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
              <input type="email" className="input" value={email} placeholder="Type here" onChange={(e)=>setEmailId(e.target.value)}/>
            </fieldset>
          </div>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input type="password" className="input" value={password} placeholder="Type here" onChange={(e)=>setPassword(e.target.value)} />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
