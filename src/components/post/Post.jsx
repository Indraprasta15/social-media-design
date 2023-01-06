import "./post.css";
import {MoreVert} from "@mui/icons-material";
import { Users } from '../../dummyData';  
import { useState } from "react";

export default function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike (isLiked ? like -1 : like + 1);
        setIsLiked (!isLiked)
    };

  return (
    <div className="post">
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="" className="posttopleftimg" />
                    <span className="postusername">
                        {Users.filter((u) => u.id === post.userId)[0].username}
                    </span>
                    <span className="postdate">{post.date}</span>
                </div>
                <div className="posttopright">
                    <MoreVert />
                </div>
            </div>
            <div className="postcenter">
                <span className="posttext">{post?.desc}</span>
                <img src={post.photo} alt="" className="postimg" />
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    <img src="/assets/post/like.png" alt="" onClick={likeHandler} className="postbottomicon" />
                    <img src="/assets/post/heart.png" alt="" onClick={likeHandler} className="postbottomicon" />
                    <span className="postlikecounter">{like} people like it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcomment">{post.comment} comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
