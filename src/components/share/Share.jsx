import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="sharedWrapper">
        <div className="sharetop">
          <img src="/assets/person/1.jpeg" alt="" className="shareprofileimg" />
          <input type="text" className="shareInput" />
        </div>
        <hr />
        <div className="shareBottom">
          <div className="shareoptions">
            <div className="shareoption">
              <span className="shareIcon">shareIcon</span>
              <span className="shareoptionText">photo orvideo</span>
            </div>
            <div className="shareoption">
              <span className="shareIcon">LocationIcon</span>
              <span className="shareoptionText">Location</span>
            </div>
            <div className="shareoption">
              <span className="shareIcon">TagIcon</span>
              <span className="shareoptionText">tag</span>
            </div>
            <div className="shareoption">
              <span className="shareIcon">feelingsIcon</span>
              <span className="shareoptionText">feelings</span>
            </div>
          </div>
          <button className="sharebtn">share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
