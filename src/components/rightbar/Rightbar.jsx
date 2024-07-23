import "./rightbar.css";

import { Users } from "../../Dummydata";
import Online from "../online/Online";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="gifImg" />
          <span>
            <b>Pola Foster</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>

        <img className="rightbarAd" src="/assets/ad.png" alt="" />

        <h4>Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>

        {/* <div className="onlinefriends">
          <img
            className="onlinefriendsPic"
            src="/assets/person/1.jpeg"
            alt=""
          />
          <span>Safak kocago</span>
        </div> */}
      </div>
    </div>
  );
};

export default Rightbar;
