import "./sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <span className="sidebarIcon">FeedIcon</span>
            <span className="didebarListItemTetx">Feed</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarIcon">messageIcon</span>
            <span className="didebarListItemTetx">chat</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarIcon">videoIcon</span>
            <span className="didebarListItemTetx">video</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarIcon">groupIcon</span>
            <span className="didebarListItemTetx">groups</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarIcon">bookmarksIcon</span>
            <span className="didebarListItemTetx">bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarIcon">questionIcon</span>
            <span className="didebarListItemTetx">question</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarIcon">jobIcon</span>
            <span className="didebarListItemTetx">job</span>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarIcon">eventIcon</span>
            <div className="didebarListItemTetx">event</div>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarIcon">courseIcon</span>
            <span className="didebarListItemTetx">course</span>
          </li>
        </ul>
        <button className="sidebarbutton">Show More</button>
        <hr />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sidebarFriendName">Jane Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;