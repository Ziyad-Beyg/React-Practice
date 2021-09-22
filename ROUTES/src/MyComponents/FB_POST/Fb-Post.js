import React from "react"
import "./Fb-Post.css"

function FbPostUI({userDp, userName, postTitle, postImg, commentDp, commentUserName, commentTitle}){
    return(
        <div className="main-container">
            <div className="username-dp-div">
                <img className="dp" src={userDp}/>
                <div>
                    <h3 className="username">
                        {userName}
                    </h3>
                    <h6 className="timer">
                        4 mins
                    </h6>
                </div>
            </div>
            <div className="post-title-div">
                <h3 className="post-title-text">
                    {postTitle}
                </h3>
            </div>
            <div>
                <img className="post-main-img" src={postImg}/>
            </div>
            <div className="commet-heading-div">
                <h4 className="comment-txt">
                    Comments
                </h4>
            </div>
            <div className="comments-info">
                <img src={commentDp} className="comment-dp" />
                <div className="comment-sec-user-info">
                    <h5 className="comment-username">
                        {commentUserName}
                    </h5>
                    <h5 className="comment-usertext">
                        {commentTitle}
                    </h5>
                </div>
            </div>
        </div>
    )
}


export default FbPostUI