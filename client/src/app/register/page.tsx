'use client'
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from 'axios'
const Register = () => {
    const router=useRouter()
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handlesubmit=async(event)=>{
        event.preventDefault();
        try{
            const res=axios.post('http://localhost:5000/api/auth/register',{username:username,email:email,password:password})
            if((await res).status===200)
            {
              if((await res).data.success===true)
                router.push('/login')
              else{
                alert('Username exists')
              }
            }
            else{
              router.push('/')
            }
        }catch(err)
        {
            console.log(err)
        }
        
    }
  return (
    <div className="flex h-screen justify-center items-center bg-lime-100">
      <form action="" method="post" className="flex flex-col  gap-5 p-10 bg-red-800 w-1/2 rounded-xl" onSubmit={handlesubmit}>
        <h2 className="text-center text-white text-3xl font-bold">Register Page</h2>
        <input type="text" name="username" value={username} className="py-3 px-4 rounded-full" onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter username" />
        <input type="text" name="email" value={email} className="py-3 px-4 rounded-full" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email" />
        <input type="text" name="password" value={password} className="py-3 px-4 rounded-full" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter password" />
        <button className="bg-blue-200  p-3 hover:bg-blue-100 rounded-full text-xl " type="submit">Register here</button>
      </form>
    </div>
  );
};

export default Register;
