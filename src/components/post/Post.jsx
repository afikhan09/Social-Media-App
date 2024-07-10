import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postwrapper">
        <div className="Posttop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <span className="postusername">safak </span>
            <span className="PostDate"> 5 mins ago</span>
          </div>
          <div className="posttopright">3DotIcon</div>
        </div>
        <div className="postcenter">
          <div className="caption">love for all hatred for none </div>
          <img className="feedimg" src="/assets/post/1.jpeg" alt="" />
        </div>
        <div className="postBottom">
          <div className="bottomleft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />

            <span className="postLikeCounter">61 people liked it</span>
          </div>
          <div className="postbottomright">
            <div className="postcommenttext"> Comment_rightIcon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
