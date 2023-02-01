import React from "react";
import { SideBarWrapper } from "./styled";
import logo from "../../assets/logo.svg";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { IoIosHeartEmpty } from "react-icons/io";

function SideBar() {
  return (
    <SideBarWrapper>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="/">
              <AiFillHome size={24} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <BsSearch size={24} />
              <span>Search</span>
            </a>
          </li>
          <li>
            <a href="/">
              <BiLibrary size={24} />
              <span>Your Library</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="playlists">
        <ul>
          <li>
            <a href="/">
              <AiFillPlusCircle size={24} />
              <span>Create Playlist</span>
            </a>
          </li>
          <li>
            <a href="/">
              <IoIosHeartEmpty size={24} />
              <span>Liked Songs</span>
            </a>
          </li>
        </ul>
      </div>

     <div className="divisor"></div>
    </SideBarWrapper>
  );
}

export default SideBar;
