import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import { useState } from "react";
import { db } from './firebase';
import { MDBBtn, MDBIcon } from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';


const TweetBox = (props) => {
    const { //username,
        userID
    } = props;
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetMedia, setTweetMedia] = useState("");

    const sendTweet = (e) => {
        e.preventDefault(); //prevents refresh

        if (tweetMessage == "") //pt a evita tweeturi goale 
            alert('no empty tweets')
        else {
            db.collection("posts").add({
                creator: userID,
                text: tweetMessage,
                image: tweetMedia,
            });
        }
        setTweetMessage("");//reset
        setTweetMedia("");
    };
    const deleteTweet = (e) => {
        e.preventDefault(); //prevents refresh

        db.collection("posts").doc("vezi cum iei id postare").delete();
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="avatar.png" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="Hey DAWN! What's going on?"
                        type="text"
                    />
                </div>

                <input
                    onChange={(e) => setTweetMedia(e.target.value)}
                    value={tweetMedia}
                    className="tweetBox__imageInput"
                    placeholder="insert image URL for a fancy tweet"
                    type="text"
                />

                <MDBBtn rounded color="info" onClick={sendTweet} ><MDBIcon far icon="gem" className="mr-2" />Tweet  <MDBIcon far icon="gem" className="mr-2" /></ MDBBtn>
            </form>
        </div>
    );
};
export { TweetBox };