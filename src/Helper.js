import { db } from "./firebase";
import React, { useState, useEffect } from 'react';

function Helper() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await db.collection("users").get();
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            console.log(users);

            for (var i = 0; i < users.entries(); i++) { 
            alert(i);
        }

            // in loc de 1 sa iau idul userilor
            const posts = await db.collection("users").doc('1').collection("posts").get();
            setPosts(posts.docs.map(doc => doc.data()));
            console.log(posts)
           
            } 
        
        fetchData()
    }, []);

    return (
        <div>
            {users.map(user => (

                posts.map(post => (
                    <div>
                        <li key={user.id}> id: {user.id} </li>
                        <li key={user.email}> email: {user.email} </li>
                        <li key={user.password}> pass: {user.password} </li>

                        <li key={post.text}> {post.text} </li>
                        <li key={post.username}> {post.username} </li>
                        <li></li>
                </div>
                ))))
                }
        </div>
    );
}

export default Helper;