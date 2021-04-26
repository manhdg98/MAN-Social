import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <div className="topbar stick d-flex align-items-center justify-content-between pt-3 pb-3">
        <div className="logo h-100">
          <a href="newsfeed.html" className="h-100 d-block">
            <img src="static/logo.png" className="mh-100 mw-100" />
          </a>
        </div>
        <div className="top-area">
          <div className="top-search">
            <form method="post">
              <input type="text" placeholder="Search People, Pages, Groups etc" />
              <button data-ripple>
                <i className="ti-search" />
              </button>
            </form>
          </div>
          <ul className="setting-area">
            <li>
              <a href="newsfeed.html" title="Home" data-ripple>
                <i className="fa fa-home" />
              </a>
            </li>
            <li>
              <a href="#" title="Friend Requests" data-ripple>
                <i className="fa fa-user" />
                <em className="bg-red">5</em>
              </a>
            </li>
            <li>
              <a href="#" title="Notification" data-ripple>
                <i className="fa fa-bell" />
                <em className="bg-purple">7</em>
              </a>
            </li>
            <li>
              <a href="#" title="Messages" data-ripple>
                <i className="fa fa-commenting" />
                <em className="bg-blue">9</em>
              </a>
            </li>
            <li>
              <a href="#" title="Languages" data-ripple>
                <i className="fa fa-globe" />
                <em>EN</em>
              </a>
            </li>
            <li>
              <a href="#" title="Help" data-ripple>
                <i className="fa fa-question-circle" />
              </a>
            </li>
          </ul>
          <div className="user-img">
            <h5>Jack Carter</h5>
            <img src="images/avatars/side-friend2.jpg" />
            <span className="status f-online" />
            <div className="user-setting">
              <ul className="chat-setting">
                <li>
                  <a href="#">
                    <span className="status f-online" />
                    online
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="status f-away" />
                    away
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="status f-off" />
                    offline
                  </a>
                </li>
              </ul>
              <span className="seting-title">
                User setting <a href="#">see all</a>
              </span>
              <ul className="log-out">
                <li>
                  <a href="about.html">
                    <i className="ti-user" /> view profile
                  </a>
                </li>
                <li>
                  <a href="setting.html">
                    <i className="ti-pencil-alt" />
                    edit profile
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-target" />
                    activity log
                  </a>
                </li>
                <li>
                  <a href="setting.html">
                    <i className="ti-settings" />
                    account setting
                  </a>
                </li>
                <li>
                  <a href="logout.html">
                    <i className="ti-power-off" />
                    log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
