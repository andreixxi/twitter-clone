import React from "react";
import './Feed.css';
import TweetBox from "./TweetBox";
import Post from './Post';
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";
import FlipMove from 'react-flip-move';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts") // gets posts from the db
            .onSnapshot((snapshot) =>
                setPosts(snapshot.docs.map((doc) => doc.data())) // for every doc(post) map the data(posts' fields)
            );
    }, []);

    //get the post id
    const docRef = db.collection("posts");
    var docId = 0;
    if (!docRef.exists) {
        console.log('no such doc');
    } else {
        docId = docRef.id;
    }

    return (
        <div className="feed">
            {/*header*/}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/*tweet box*/}
            <TweetBox />

            <FlipMove>
            {/*posts*/}
            {posts.map((post) => (
                <Post displayName={post.displayName}
                    key={docId}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
                ))}
           </FlipMove>
        </div>
    );
}

export default Feed;