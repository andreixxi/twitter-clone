import React from "react";
import "./TweetBox.css";
import { Avatar, Button} from "@material-ui/core"; 

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="avatar.png" />
                    <input
                        placeholder="Hey DAWN! What's going on?"
                        type="text"
                    />
                </div>

                <input
                    className="tweetBox__imageInput"
                    placeholder="insert image URL for a fancy tweet"
                    type="text"
                />

                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;