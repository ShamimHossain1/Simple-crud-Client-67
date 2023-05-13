import { Button } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    const users = useLoaderData();
    console.log(users)
   const handleDelete=(id)=>{

    console.log(id)
    fetch(`http://localhost:5000/users/${id}`,{
        method:"DELETE"
    })
    .then((res)=>res.json())    
    .then((data)=>{
        if(data.deletedCount>0){
            alert('Deleted successFully')
        }
        console.log(data)})

   }
    return (
        <div className=' ml-96 mt-28'>
            {users.map(user => <p key={user._id}>{user.name} : {user.email} <Button onClick={()=>handleDelete(user._id)}>X</Button></p>)}
            <h2>Hello world</h2>
        </div>
    );
};


export default User;