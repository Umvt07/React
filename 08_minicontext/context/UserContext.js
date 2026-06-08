import React from 'react'

const UserContext=React.createContext()

export default UserContext  // throw this variable 

// so context will give you a things which is known as provider

//  so is context ke liye provider bhi use karna hoga what does provider do it provides the data

// so how to use the data of provider just wrap then in UserContext thing 
// so it will work

// <UserContext>
// <Login />
//   <Card>
//     <Data/>
//   <Card/>
//   <UserContext />

// so in this way u can use the provider
