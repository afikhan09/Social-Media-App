import React from "react";
import Topbar from "../../components/topbar/Topbar";
import SideBar from "../../components/sidebar/SideBar";
import Feed from "../../components/feeds/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;
