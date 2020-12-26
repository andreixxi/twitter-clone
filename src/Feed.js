import React from "react";
import './Feed.css';
import TweetBox from "./TweetBox";

function Feed() {
    return (
        <div>
            {/*header*/}
            <div className="feed">
                <div className="feed__header">
                    <h2>Latest Tweets</h2>
                </div>
            </div>

            {/*tweet box*/}
            <TweetBox />

            {/*posts*/}
            <Post />
        </div>
        )
}

export default Feed;