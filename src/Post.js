import React, { Fragment } from "react";
import './Post.css';
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublishIcon from '@material-ui/icons/Publish';
import { forwardRef } from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import { useState, useEffect } from "react";
import { db } from './firebase';

const Post = forwardRef(({ displayName, username, verified, text, avatar, image }, ref) => {

    {
        //var [postId, setPostId] = useState([]);
        //var [posts, setPosts] = useState([]);

        //useEffect(() => { // caut in postarile din db postarea curenta(cu doc.id = key)
        //    const FetchData = async () => {

        //        await db.collection("posts")
        //            .get()
        //            .then(function (querySnapshot) {
        //                querySnapshot.forEach(function (doc) {
        //                    if (doc.id == key) {
        //                        //postID = doc.id;
        //                        setPostId(doc.id);
        //                    }
        //                });
        //            })
        //            .catch(function (error) {
        //                console.log("Error getting documents: ", error);
        //            });


        //        await db.collection("posts").where("creator", "==", userID) // gets posts from the db
        //            .onSnapshot((snapshot) =>
        //                setPosts(snapshot.docs.map((doc) => doc.data())) // for every doc(post) map the data(posts' fields)
        //        );

        //    }

        //    FetchData();
        //}, []);


        //const deleteTweet = (e) => {
        //    console.log(posts);
        //    console.log("key", key);
        //    e.preventDefault(); //prevents refresh
        //let postRef = this.db.ref('posts/' + postId);
        // postRef.remove();
        //db.collection("posts").doc(postId).remove();
        //};
    }
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
                    <div class="view overlay">
                        <img src={image}
                            class="img-fluid img-thumbnail"
                            alt=""   />
                        <div class="mask near-moon-gradient"></div>
                    </div>

                    <div className="post__footer">
                        <Fragment>
                            {/*<ChatBubbleOutlineIcon fontSize="small" />*/}
                            {/*<RepeatIcon fontSize="small" />*/}
                            {/* <FavoriteIcon fontSize="small" />*/}
                            {/*<PublishIcon fontSize="small" />*/}
                            <MDBBtn tag="a" size="sm" floating gradient="near-moon">
                                <MDBIcon icon="comment-slash" size="lg" />
                            </MDBBtn>
                            <MDBBtn tag="a" size="sm" floating gradient="near-moon">
                                <MDBIcon icon="retweet" size="lg" />
                            </MDBBtn>
                            <MDBBtn tag="a" size="sm" floating gradient="near-moon">
                                <MDBIcon fab icon="gratipay" size="lg" />
                            </MDBBtn>
                            {/*buton de delete cu functionalitate -inf ..*/}
                            <MDBBtn tag="a" size="sm" floating gradient="near-moon" /*onClick={deleteTweet}*/>
                                <MDBIcon icon="trash-alt" size="lg" />
                            </MDBBtn>
                        </Fragment>
                    </div>

                </div>
            </div>
        </div>
    );
})

export default Post;