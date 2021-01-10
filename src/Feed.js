import React from "react";
import './Feed.css';
import { TweetBox }from "./TweetBox";
import Post from './Post';
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";
import FlipMove from 'react-flip-move';

function Feed(props) {
    const { username,
    } = props;

    const [posts, setPosts] = useState([]);
    const [userID, setID] = useState("");
    const [avatar, setAvatar] = useState("");
    const [verified, setVerified] = useState("");
    const [displayname, setDisplayname] = useState("");

    db.collection("users").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            //console.log(doc.id, " => ", doc.data());
            var dbEmail = doc.data().email; //emailul curent din bd
            if (username === dbEmail.substring(0, dbEmail.lastIndexOf("@"))) {// emailul primit coincide cu emailul in baza de date 
                //console.log(username, doc.id);
                setID(doc.id); // retin id ul userului logat  
                setAvatar(doc.data().avatar);
                setVerified(doc.data().verified);
                setDisplayname(doc.data().displayname);
            }
        });
    })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });

    console.log("username=", username,
                    ", displayname=", displayname,
                    ", avatar= ", avatar,
                    ", verified= ", verified
    );

    useEffect(() => {
        // aici sa iau postarile de la userul logat !!!!!!!! TODO (atat afisarea, cat si poisbilitatea de a posta)
        db.collection("posts").where("creator", "==", userID) // gets posts from the db
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => doc.data())) // for every doc(post) map the data(posts' fields)
        );

    }, []);

    //get the post id
    var postID = db.collection("posts").where("creator", "==", userID)
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
                username={username} />

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