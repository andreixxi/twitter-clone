import React from "react";
import "./TweetBox.css";
import { Avatar, Button} from "@material-ui/core"; 
import { useState } from "react";
import { db } from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetMedia, setTweetMedia] = useState("");
    const sendTweet = e => {
        e.preventDefault(); //prevents refresh

        //db.collection("posts").add({
        //    displayName: 'maria',
        //    username: 'mariaaaaaa',
        //    verified: false,
        //    text: tweetMessage,
        //    image: tweetMedia,
        //    avatar: 'avatar.png'
        //});

        setTweetMessage("");//reset
        setTweetMedia("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="avatar.png" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="Hey DAWN! What's going on?"
                        type="text"
                    />
                </div>

                <input
                    onChange={e => setTweetMedia(e.target.value)}
                    value={tweetMedia}
                    className="tweetBox__imageInput"
                    placeholder="insert image URL for a fancy tweet"
                    type="text"
                />

                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;