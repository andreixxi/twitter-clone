import React from "react";
import './Feed.css';
import TweetBox from "./TweetBox";
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            {/*header*/}
            <div className="feed__header">
                <h2>Latest Tweets</h2>
            </div>

            {/*tweet box*/}
            <TweetBox />

            {/*posts*/}
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default Feed;