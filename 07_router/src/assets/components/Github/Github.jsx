import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
function Github() {
    const data=useLoaderData();
    // const [data,setdata]=useState({});
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary').then((e)=>e.json()).then((data=>{
    //         console.log(data);
    //         setdata(data);
    //     }))
    // },[])
  return (
    <div className='flex justify-center bg-gray-700 text-4xl'>Github followers: {data.followers}</div>
  )
}

export default Github

// yaa we should have seperate file but lets do it

export const GithubInfoLoader=async () => {
    const response=await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}