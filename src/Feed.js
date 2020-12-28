import React from "react";
import './Feed.css';
import TweetBox from "./TweetBox";
import Post from './Post';
import { useState } from "react";
import { useEffect } from "react";
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts') // gets posts from the db
            .onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data)) // for every doc(post) map the data(posts' fields)
        ))
    }, []);
    return (

        <div className="feed">
            {/*header*/}
            <div className="feed__header">
                <h2>Latest Tweets</h2>
            </div>

            {/*tweet box*/}
            <TweetBox />

            {/*posts*/}
            {posts.map(post => (
                <Post displayName={post.displayName}
                    username={post.userName}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
                ))}
           
        </div>
    );
}

export default Feed;