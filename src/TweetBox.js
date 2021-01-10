import React from "react";
import "./TweetBox.css";
import { Avatar, Button} from "@material-ui/core"; 
import { useState } from "react";
import { db } from './firebase';
import { MDBBtn, MDBIcon} from "mdbreact";
import { makeStyles } from '@material-ui/core/styles';


const TweetBox = (props) => {
    const { username } = props;
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetMedia, setTweetMedia] = useState("");
    const [ID, setID] = useState("");

    db.collection("users").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            //console.log(doc.id, " => ", doc.data());
            var dbEmail = doc.data().email; //emailul curent din bd
            if (username === dbEmail.substring(0, dbEmail.lastIndexOf("@"))) {// emailul primit coincide cu emailul in baza de date 
                //console.log(username, doc.id);
                setID(doc.id); // retin id ul userului logat  
            }
        });

    })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });

    const sendTweet = (e) => {
        e.preventDefault(); //prevents refresh

        if (tweetMessage == "") //pt a evita tweeturi goale 
            alert('no empty tweets')
        else {
            db.collection("posts").add({
                creator: ID,
                text: tweetMessage,
                image: tweetMedia,
            });
        }
        setTweetMessage("");//reset
        setTweetMedia("");
        setID("");
    };
    const deleteTweet = (e) => {
        e.preventDefault(); //prevents refresh

        db.collection("posts").doc("vezi cum iei id postare").delete();

        setTweetMessage("");//reset
        setTweetMedia("");
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