import React, { useEffect, useState} from "react";
import { db } from './firebase';
import { sendTweet } from "./TweetBox";
import Post from './Post'


function DBSTUFF(props) {
    const {
        email,
        password,
        text,
        image
    } = props; 

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // aici sa iau postarile de la userul logat !!!!!!!! TODO (atat afisarea, cat si poisbilitatea de a posta)
        db.collection("users")
            .onSnapshot((snapshot) =>
                setUsers(snapshot.doc.map((doc) => doc.data()))
            );

        db.collection("posts") // gets posts from the db
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => doc.data())) // for every doc(post) map the data(posts' fields)
            );
    }, []);

}
export default DBSTUFF;