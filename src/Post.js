import React from "react";
import './Post.css';
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublishIcon from '@material-ui/icons/Publish';
import { forwardRef } from "react";

const Post = forwardRef(({ displayName, username, verified, text, image, avatar }, ref) => 
{
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>

            <div class="container-sm">
                <div className="post__body" >
                    <div className="post__header">
                        <div className="post__headerText">
                            <h3>
                                {displayName}{" "}
                                <span className="post__headerSpecial">
                                    {/*if verified then show badge*/}
                                    {verified && < CheckCircleIcon className="post__badge" />} 
                                    @{username}
                                </span>
                            </h3>
                        </div>
                        <div className="post__headerDescription">
                          <p> {text} </p>
                        </div>
                        </div>
                    <img src={image} alt="" class="img-thumbnail" />
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteIcon fontSize="small"/>
                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div>
     </div>
    );
})

export default Post;