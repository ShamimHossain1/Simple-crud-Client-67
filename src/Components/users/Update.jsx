import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData()

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = { name, email }

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(updateUser)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if(data.modifiedCount>0){
                    alert('user updated successfully')
                    
                }
            })

        }
        return (
            <div className='flex flex-col justify-center items-center'>
                <h3 className=' mt-32 text-xl font-bold '>update information of {loadedUser.name}</h3>
                <form onSubmit={handleUpdate} action="">
                    <input type="text" name='name' defaultValue={loadedUser.name} /><br />
                    <input type="email" name='email' defaultValue={loadedUser.email} /><br />
                    <input className='border-pink-400 border rounded-lg p-2 mt-2 w-full' type="submit" value="update" /><br />
                </form>

            </div>
        );
    };

    export default Update;