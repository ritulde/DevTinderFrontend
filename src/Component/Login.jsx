import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constant";

export const Login = () => {


  const [email,setEmailId]=useState("");
  const [password,setPassword]=useState("");

  const dispach= useDispatch();
  const navigate = useNavigate()

  const handleLogin = async ()=>{
    try{
       const res= await axios.post(BASE_URL + "/login",{
        email,
        password
      },{withCredentials:true})
      dispach(addUser(res.data));
      return navigate("/")
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
