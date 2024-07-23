import "./post.css";
import { Users } from "../../Dummydata";

const Post = ({ post }) => {
  // const users = Users.filter((u) => u.id === 1);
  // console.log(users[0].username);
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="Posttop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postusername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="PostDate"> {post.date}</span>
          </div>
          <div className="posttopright">3DotIcon</div>
        </div>
        <div className="postcenter">
          <div className="caption">{post?.desc}</div>
          <img className="feedimg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="bottomleft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />

            <span className="postLikeCounter">{post.like}people liked it</span>
          </div>
          <div className="postbottomright">
            <div className="postcommenttext"> {post.comment} Comment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
