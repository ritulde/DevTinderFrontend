import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";

export const Body = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const userData=useSelector((store)=>store.user);
    const fetchUser = async (req,res) => {
      if(userData) return;
      try{
        const user= await axios.get(BASE_URL+"/profile/view",{
          withCredentials: true
        });
        dispatch(addUser(res.data))
      }catch(err){
        if(err.status===401){
          navigate("/login");
        }
        console.log(err);
      }
    };
    useEffect(()=>{
        fetchUser(); 
      },[]);
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
