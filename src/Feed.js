import React from "react";
import './Feed.css';
import { TweetBox } from "./TweetBox";
import Post from './Post';
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";
import FlipMove from 'react-flip-move';

function Feed(props) {
    const {
        address,
        username,
        displayname,
        avatar,
        verified
    } = props;

    var [posts, setPosts] = useState([]);
    var [userID, setID] = useState("");

    useEffect(() => {
        // aici sa iau postarile de la userul logat !!!!!!!! TODO (atat afisarea, cat si poisbilitatea de a posta)
        const fetch = async () => {
           await db.collection("users").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    //console.log(doc.id, " => ", doc.data());
                    var dbEmail = doc.data().email; //emailul curent din bd
                    if (address === dbEmail) {// emailul primit coincide cu emailul in baza de date 
                        //console.log(username, doc.id);
                        userID = doc.id;
                        setID(userID); // retin id ul userului logat  
                    }
                });
            })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });

            await db.collection("posts").where("creator", "==", userID) // gets posts from the db
                .onSnapshot((snapshot) =>
                    setPosts(snapshot.docs.map((doc) => doc.data())) // for every doc(post) map the data(posts' fields)
                );
        }
        fetch();
    }, []);

    //get the post id
    var postID = null;
    db.collection("posts").where("creator", "==", userID)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                postID = doc.id;
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });;



    return (
        <div className="feed">
            {/*header*/}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/*tweet box*/}
            <TweetBox
                userID={userID}
            />

            <FlipMove>
                {/*posts*/}
                {posts.map((post) => (
                    <Post
                        displayName={displayname}
                        key={postID}
                        username={username}
                        verified={verified}
                        text={post.text}
                        avatar={avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>
        </div>
    );
}

export default Feed;