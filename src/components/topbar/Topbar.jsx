import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <span className="searchIcon">search-Icon</span>
          <input
            placeholder="search for a friend,post or video"
            className="searchinput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarlinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <span>PersonIcon</span>
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <span>PchatIcon</span>
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <span>NotificationIcon</span>
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
