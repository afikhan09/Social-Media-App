import "./closefriends.css";

const CloseFriends = ({ users }) => {
  return (
    <li className="sidebarFriend">
      <img src={users.profiePicture} alt="" className="sideBarFriendImg" />
      <span className="sidebarFriendName">{users.username}</span>
    </li>
  );
};

export default CloseFriends;
