import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const loadedUsers = useLoaderData();
    console.log(loadedUsers)

    const [users, setUsers] = useState(loadedUsers)



   const handleDelete=(id)=>{

    console.log(id)
    fetch(`http://localhost:5000/users/${id}`,{
        method:"DELETE"
    })
    .then((res)=>res.json())    
    .then((data)=>{
        if(data.deletedCount>0){
            alert('Deleted successFully')
            const remaining = users.filter(user => user._id !== id)
            setUsers(remaining);
        }
        console.log(data)})

   }
    return (
        <div className='flex flex-col items-center mt-36'>
            {users.map(user => <p className='flex items-center gap-2 mb-2 text-xl font-semibold' key={user._id}>{user.name} : {user.email}
            
            <Link to={`/update/${user._id}`}>
            <button className='border rounded-lg p-1' >Update</button>
            </Link>

             <button className='border rounded-lg p-2' onClick={()=>handleDelete(user._id)}>X</button></p>)}
            <h2>Hello world</h2>
        </div>
    );
};


export default User;