import React from "react";
import './Post.css';
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar,
    }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="avatar.png" />
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Clever Lang Quadrilateral{" "}
                            <span className="post__headerSpecial">
                                <CheckCircleIcon className="post__badge" /> @clq
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Say NO to homework!</p>
                    </div>
                </div>
                <img src="image1.jpg" alt="check source" />
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
     </div>
    );
}

export default Post;