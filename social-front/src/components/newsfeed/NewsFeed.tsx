import React from "react";

const NewsFeed = () => {
  return (
    <section>
      <div className="gap2 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row merged20" id="page-contents">
                <div className="col-lg-3">
                  <aside className="sidebar static left">
                    <div className="widget">
                      <div className="weather-widget low-opacity bluesh">
                        <div
                          className="bg-image"
                          style={{
                            backgroundImage:
                              "url(https://res.cloudinary.com/manteam/image/upload/v1628845422/images/resources/weather_crjr91.jpg)"
                          }}
                        />
                        <span className="refresh-content">
                          <i className="fa fa-refresh" />
                        </span>
                        <div className="weather-week">
                          <div className="icon sun-shower">
                            <div className="cloud" />
                            <div className="sun">
                              <div className="rays" />
                            </div>
                            <div className="rain" />
                          </div>
                        </div>
                        <div className="weather-infos">
                          <span className="weather-tem">25</span>
                          <h3>
                            Cloudy Skyes<i>Sicklervilte, New Jersey</i>
                          </h3>
                          <div className="weather-date skyblue-bg">
                            <span>
                              MAY<strong>21</strong>
                            </span>
                          </div>
                        </div>
                        <div className="monthly-weather">
                          <ul>
                            <li>
                              <span>Sun</span>
                              <a href="#">
                                <i className="wi wi-day-sunny" />
                              </a>
                              <em>40°</em>
                            </li>
                            <li>
                              <span>Mon</span>
                              <a href="#">
                                <i className="wi wi-day-cloudy" />
                              </a>
                              <em>10°</em>
                            </li>
                            <li>
                              <span>Tue</span>
                              <a href="#">
                                <i className="wi wi-day-hail" />
                              </a>
                              <em>20°</em>
                            </li>
                            <li>
                              <span>Wed</span>
                              <a href="#">
                                <i className="wi wi-day-lightning" />
                              </a>
                              <em>34°</em>
                            </li>
                            <li>
                              <span>Thu</span>
                              <a href="#">
                                <i className="wi wi-day-showers" />
                              </a>
                              <em>22°</em>
                            </li>
                            <li>
                              <span>Fri</span>
                              <a href="#">
                                <i className="wi wi-day-windy" />
                              </a>
                              <em>26°</em>
                            </li>
                            <li>
                              <span>Sat</span>
                              <a href="#">
                                <i className="wi wi-day-sunny-overcast" />
                              </a>
                              <em>30°</em>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Weather Widget */}
                    </div>
                    {/* weather widget*/}
                    <div className="widget whitish low-opacity">
                      <div
                        style={{
                          backgroundImage:
                            "url(https://res.cloudinary.com/manteam/image/upload/v1628845460/images/resources/dob2_aednlu.png"
                        }}
                        className="bg-image"
                      />
                      <div className="dob-head">
                        <img
                          src="https://res.cloudinary.com/manteam/image/upload/v1628845515/images/resources/sug-page-5_lzyvcr.jpg"
                          alt=""
                        />
                        <span>22nd Birthday</span>
                        <div className="dob">
                          <i>19</i>
                          <span>September</span>
                        </div>
                      </div>
                      <div className="dob-meta">
                        <figure>
                          <img
                            src="https://res.cloudinary.com/manteam/image/upload/v1628845484/images/resources/dob-cake_siyme6.gif"
                            alt=""
                          />
                        </figure>
                        <h6>
                          <a href="#">Lucy Carbel</a> valentine's birthday
                        </h6>
                        <p>leave a message with your best wishes on his profile.</p>
                      </div>
                    </div>
                    {/* birthday widget */}
                    <div className="widget">
                      <h4 className="widget-title">Twitter feed</h4>
                    </div>
                    {/* twitter feed*/}
                    <div className="advertisment-box">
                      <h4>advertisment</h4>
                      <figure>
                        <a href="#" title="Advertisment">
                          <img
                            src="https://res.cloudinary.com/manteam/image/upload/v1628845424/images/resources/ad-widget_ttxbpa.gif"
                            alt=""
                          />
                        </a>
                      </figure>
                    </div>
                    {/* advertisment box */}
                    <div className="widget">
                      <h4 className="widget-title">Shortcuts</h4>
                      <ul className="naves">
                        <li>
                          <i className="ti-clipboard" />
                          <a href="newsfeed.html">News feed</a>
                        </li>
                        <li>
                          <i className="ti-mouse-alt" />
                          <a href="inbox.html">Inbox</a>
                        </li>
                        <li>
                          <i className="ti-files" />
                          <a href="fav-page.html">My pages</a>
                        </li>
                        <li>
                          <i className="ti-user" />
                          <a href="timeline-friends.html">friends</a>
                        </li>
                        <li>
                          <i className="ti-image" />
                          <a href="timeline-photos.html">images</a>
                        </li>
                        <li>
                          <i className="ti-video-camera" />
                          <a href="timeline-videos.html">videos</a>
                        </li>
                        <li>
                          <i className="ti-comments-smiley" />
                          <a href="messages.html">Messages</a>
                        </li>
                        <li>
                          <i className="ti-bell" />
                          <a href="notifications.html">Notifications</a>
                        </li>
                        <li>
                          <i className="ti-share" />
                          <a href="people-nearby.html">People Nearby</a>
                        </li>
                        <li>
                          <i className="fa fa-bar-chart-o" />
                          <a href="insights.html">insights</a>
                        </li>
                        <li>
                          <i className="ti-power-off" />
                          <a href="landing.html">Logout</a>
                        </li>
                      </ul>
                    </div>
                    {/* Shortcuts */}
                    <div className="widget">
                      <h4 className="widget-title">Recent Activity</h4>
                      <ul className="activitiez">
                        <li>
                          <div className="activity-meta">
                            <i>10 hours Ago</i>
                            <span>
                              <a href="#">Commented on Video posted </a>
                            </span>
                            <h6>
                              by <a href="time-line.html">black demon.</a>
                            </h6>
                          </div>
                        </li>
                        <li>
                          <div className="activity-meta">
                            <i>30 Days Ago</i>
                            <span>
                              <a href="#">
                                Posted your status. “Hello guys, how are you?”
                              </a>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="activity-meta">
                            <i>2 Years Ago</i>
                            <span>
                              <a href="#">Share a video on her timeline.</a>
                            </span>
                            <h6>
                              "<a href="#">you are so funny mr.been.</a>"
                            </h6>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* recent activites */}
                    <div className="widget stick-widget">
                      <h4 className="widget-title">Who's follownig</h4>
                      <ul className="followers">
                        <li>
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845476/images/resources/friend-avatar2_xh2mbr.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="friend-meta">
                            <h4>
                              <a href="time-line.html">Kelly Bill</a>
                            </h4>
                            <a href="#" className="underline">
                              Add Friend
                            </a>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845477/images/resources/friend-avatar4_y0cqwt.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="friend-meta">
                            <h4>
                              <a href="time-line.html">Issabel</a>
                            </h4>
                            <a href="#" className="underline">
                              Add Friend
                            </a>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845478/images/resources/friend-avatar6_waag9v.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="friend-meta">
                            <h4>
                              <a href="time-line.html">Andrew</a>
                            </h4>
                            <a href="#" className="underline">
                              Add Friend
                            </a>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845478/images/resources/friend-avatar8_x1oyts.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="friend-meta">
                            <h4>
                              <a href="time-line.html">Sophia</a>
                            </h4>
                            <a href="#" className="underline">
                              Add Friend
                            </a>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845477/images/resources/friend-avatar3_pwyblm.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="friend-meta">
                            <h4>
                              <a href="time-line.html">Allen</a>
                            </h4>
                            <a href="#" className="underline">
                              Add Friend
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* who's following */}
                  </aside>
                </div>
                {/* sidebar */}
                <div className="col-lg-6">
                  <div className="central-meta postbox">
                    <span className="create-post">Create post</span>
                    <div className="new-postbox">
                      <figure>
                        <img
                          src="https://res.cloudinary.com/manteam/image/upload/v1628845423/images/resources/admin_ubxdud.jpg"
                          alt=""
                        />
                      </figure>
                      <div className="newpst-input">
                        <form method="post">
                          <textarea
                            rows={2}
                            placeholder="Share some what you are thinking?"
                            defaultValue={""}
                          />
                        </form>
                      </div>
                      <div className="attachments">
                        <ul>
                          <li>
                            <span className="add-loc">
                              <i className="fa fa-map-marker" />
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-music" />
                            <label className="fileContainer">
                              <input type="file" />
                            </label>
                          </li>
                          <li>
                            <i className="fa fa-image" />
                            <label className="fileContainer">
                              <input type="file" />
                            </label>
                          </li>
                          <li>
                            <i className="fa fa-video-camera" />
                            <label className="fileContainer">
                              <input type="file" />
                            </label>
                          </li>
                          <li>
                            <i className="fa fa-camera" />
                            <label className="fileContainer">
                              <input type="file" />
                            </label>
                          </li>
                          <li className="preview-btn">
                            <button
                              className="post-btn-preview"
                              type="submit"
                              data-ripple
                            >
                              Preview
                            </button>
                          </li>
                        </ul>
                        <button className="post-btn" type="submit" data-ripple>
                          Post
                        </button>
                      </div>
                      <div className="add-location-post">
                        <span>Drag map point to selected area</span>
                        <div className="row">
                          <div className="col-lg-6">
                            <label className="control-label">Lat :</label>
                            <input type="text" id="us3-lat" />
                          </div>
                          <div className="col-lg-6">
                            <label>Long :</label>
                            <input type="text" id="us3-lon" />
                          </div>
                        </div>
                        {/* map */}
                        <div id="us3" />
                      </div>
                    </div>
                  </div>
                  {/* add post new box */}
                  <div className="central-meta">
                    <span className="create-post">
                      Recent Stories <a href="#">See All</a>
                    </span>
                    <div className="story-postbox">
                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                          <div className="story-box">
                            <figure>
                              <img
                                src="https://res.cloudinary.com/manteam/image/upload/v1628845513/images/resources/story-1_lwmuly.jpg"
                                alt=""
                              />
                              <span>Add Your Story</span>
                            </figure>
                            <div
                              className="story-thumb"
                              data-toggle="tooltip"
                              title="Add Your Story"
                            >
                              <i className="fa fa-plus" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                          <div className="story-box">
                            <figure>
                              <img
                                src="https://res.cloudinary.com/manteam/image/upload/v1628845514/images/resources/story-2_onibdh.jpg"
                                alt=""
                              />
                              <span>Adam James</span>
                            </figure>
                            <div
                              className="story-thumb"
                              data-toggle="tooltip"
                              title="Adam James"
                            >
                              <img
                                src="https://res.cloudinary.com/manteam/image/upload/v1628845517/images/resources/thumb-2_bz0by6.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                          <div className="story-box">
                            <figure>
                              <img
                                src="https://res.cloudinary.com/manteam/image/upload/v1628845514/images/resources/story-3_ofjdnm.jpg"
                                alt=""
                              />
                              <span>Emily grey</span>
                            </figure>
                            <div
                              className="story-thumb"
                              data-toggle="tooltip"
                              title="Emily grey"
                            >
                              <img
                                src="https://res.cloudinary.com/manteam/image/upload/v1628845517/images/resources/thumb-3_fmkbcd.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                          <div className="story-box">
                            <figure>
                              <img
                                src="https://res.cloudinary.com/manteam/image/upload/v1628845514/images/resources/story-4_daigfq.jpg"
                                alt=""
                              />
                              <span>Jhon Deo</span>
                            </figure>
                            <div
                              className="story-thumb"
                              data-toggle="tooltip"
                              title="Jhon Deo"
                            >
                              <img
                                src="https://res.cloudinary.com/manteam/image/upload/v1628845517/images/resources/thumb-4_cj5zwn.jpg"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="stories-wraper">
                        <div className="status-story">
                          <span className="close-story">
                            <i className="ti-close" />
                          </span>
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="stories-users">
                                <h5>Stories</h5>
                                <div className="my-status">
                                  <figure>
                                    <img
                                      src="https://res.cloudinary.com/manteam/image/upload/v1628845479/images/resources/friend-avatar10_ajprrc.jpg"
                                      alt=""
                                    />
                                  </figure>
                                  <a href="#" className="main-btn">
                                    Add New
                                  </a>
                                  <div className="story-user">
                                    <span>My Story</span>
                                    <ins>No updates</ins>
                                  </div>
                                </div>
                                <ul className="frnds-stories">
                                  <li>
                                    <figure>
                                      <img
                                        src="https://res.cloudinary.com/manteam/image/upload/v1628845479/images/resources/friend-avatar11_vhjty1.jpg"
                                        alt=""
                                      />
                                    </figure>
                                    <div className="story-user">
                                      <span>Emily doll</span>
                                      <ins>yesterday</ins>
                                    </div>
                                  </li>
                                  <li>
                                    <figure>
                                      <img
                                        src="https://res.cloudinary.com/manteam/image/upload/v1628845480/images/resources/friend-avatar15_xd9h1e.jpg"
                                        alt=""
                                      />
                                    </figure>
                                    <div className="story-user">
                                      <span>Jhon Borny</span>
                                      <ins>3 days ago</ins>
                                    </div>
                                  </li>
                                  <li>
                                    <figure>
                                      <img
                                        src="https://res.cloudinary.com/manteam/image/upload/v1628845479/images/resources/friend-avatar12_kp0v3k.jpg"
                                        alt=""
                                      />
                                    </figure>
                                    <div className="story-user">
                                      <span>Sarah Khan</span>
                                      <ins>2 days ago</ins>
                                    </div>
                                  </li>
                                  <li>
                                    <figure>
                                      <img
                                        src="https://res.cloudinary.com/manteam/image/upload/v1628845479/images/resources/friend-avatar13_e32sor.jpg"
                                        alt=""
                                      />
                                    </figure>
                                    <div className="story-user">
                                      <span>Zara Hayat</span>
                                      <ins>1 day ago</ins>
                                    </div>
                                  </li>
                                  <li>
                                    <figure>
                                      <img
                                        src="https://res.cloudinary.com/manteam/image/upload/v1628845480/images/resources/friend-avatar14_bpdvl3.jpg"
                                        alt=""
                                      />
                                    </figure>
                                    <div className="story-user">
                                      <span>Zing Jang</span>
                                      <ins>2 days ago</ins>
                                    </div>
                                  </li>
                                  <li>
                                    <figure>
                                      <img
                                        src="https://res.cloudinary.com/manteam/image/upload/v1628845480/images/resources/friend-avatar16_jp86ms.jpg"
                                        alt=""
                                      />
                                    </figure>
                                    <div className="story-user">
                                      <span>Emma watson</span>
                                      <ins>jan,12 2020</ins>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div id="btns-wrapper" />
                              <div id="slideshow">
                                <img
                                  className="slide"
                                  src="https://1.bp.blogspot.com/-ydS25hMYkRc/WLYeGBpYpjI/AAAAAAAAADA/V7N5F2l7vQoNh_th5N--UPVKScdbjEj4gCLcB/s1600/G%2B%25281%2529.jpg"
                                />
                                <img
                                  className="slide"
                                  src="https://nhacchuonghinhnen.com/wp-content/uploads/2020/03/hinh-nen-gai-xinh-full-hd-cho-dien-thoai-2-scaled.jpg"
                                />
                                <img
                                  className="slide"
                                  src="https://congngheads.com/media/images/anh-dep/hinh-nen-thien-nhien-dep-cho-laptop-1556704186/bo-hinh-nen-may-tinh-gai-xinh-dep-mac-ao-vao-de-thuong-kute-full-hd-9.jpg"
                                />
                                <img
                                  className="slide"
                                  src="https://img2.thuthuatphanmem.vn/uploads/2019/02/22/hinh-nen-gai-xinh-full-hd_121751381.jpg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* top stories */}
                  <div className="loadMore">
                    <div className="central-meta item">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly1_uqp4ma.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="friend-name">
                            <div className="more">
                              <div className="more-post-optns">
                                <i className="ti-more-alt" />
                                <ul>
                                  <li>
                                    <i className="fa fa-pencil-square-o" />
                                    Edit Post
                                  </li>
                                  <li>
                                    <i className="fa fa-trash-o" />
                                    Delete Post
                                  </li>
                                  <li className="bad-report">
                                    <i className="fa fa-flag" />
                                    Report Post
                                  </li>
                                  <li>
                                    <i className="fa fa-address-card-o" />
                                    Boost This Post
                                  </li>
                                  <li>
                                    <i className="fa fa-clock-o" />
                                    Schedule Post
                                  </li>
                                  <li>
                                    <i className="fa fa-wpexplorer" />
                                    Select as featured
                                  </li>
                                  <li>
                                    <i className="fa fa-bell-slash-o" />
                                    Turn off Notifications
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <ins>
                              <a href="time-line.html">Jack Carter</a> Post Album
                            </ins>
                            <span>
                              <i className="fa fa-globe" /> published: September,15 2020
                              19:PM{" "}
                            </span>
                          </div>
                          <div className="post-meta">
                            <p>
                              Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                              condimentum rhoncus, sem quam semper libero.
                            </p>
                            <figure>
                              <div className="img-bunch">
                                <div className="row">
                                  <div className="col-lg-6 col-md-6 col-sm-6">
                                    <figure>
                                      <a
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#img-comt"
                                      >
                                        <img
                                          src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly1_uqp4ma.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </figure>
                                    <figure>
                                      <a
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#img-comt"
                                      >
                                        <img
                                          src="https://res.cloudinary.com/manteam/image/upload/v1628845425/images/resources/album2_tn6kxr.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </figure>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-sm-6">
                                    <figure>
                                      <a
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#img-comt"
                                      >
                                        <img
                                          src="https://res.cloudinary.com/manteam/image/upload/v1628845425/images/resources/album6_b65rxd.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </figure>
                                    <figure>
                                      <a
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#img-comt"
                                      >
                                        <img
                                          src="https://res.cloudinary.com/manteam/image/upload/v1628845425/images/resources/album5_figi3q.jpg"
                                          alt=""
                                        />
                                      </a>
                                    </figure>
                                    <figure>
                                      <a
                                        href="#"
                                        data-toggle="modal"
                                        data-target="#img-comt"
                                      >
                                        <img
                                          src="https://res.cloudinary.com/manteam/image/upload/v1628845425/images/resources/album4_tsr7lf.jpg"
                                          alt=""
                                        />
                                      </a>
                                      <div className="more-photos">
                                        <span>+15</span>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                              <ul className="like-dislike">
                                <li>
                                  <a
                                    className="bg-purple"
                                    href="#"
                                    title="Save to Pin Post"
                                  >
                                    <i className="fa fa-thumb-tack" />
                                  </a>
                                </li>
                                <li>
                                  <a className="bg-blue" href="#" title="Like Post">
                                    <i className="ti-thumb-up" />
                                  </a>
                                </li>
                                <li>
                                  <a className="bg-red" href="#" title="dislike Post">
                                    <i className="ti-thumb-down" />
                                  </a>
                                </li>
                              </ul>
                            </figure>
                            <div className="we-video-info">
                              <ul>
                                <li>
                                  <span className="views" title="views">
                                    <i className="fa fa-eye" />
                                    <ins>1.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <div className="likes heart" title="Like/Dislike">
                                    ❤ <span>2K</span>
                                  </div>
                                </li>
                                <li>
                                  <span className="comment" title="Comments">
                                    <i className="fa fa-commenting" />
                                    <ins>52</ins>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <a className="share-pst" href="#" title="Share">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <ins>20</ins>
                                  </span>
                                </li>
                              </ul>
                              <div className="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-1_norgar.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-2_bi5t3s.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845418/images/resources/userlist-3_ezegdm.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-4_vpuu9g.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-5_nea3hs.jpg"
                                  />
                                </a>
                                <span>
                                  <strong>You</strong>, <b>Sarah</b> and{" "}
                                  <a href="#">24+ more</a> liked
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="coment-area" style={{ display: "block" }}>
                            <ul className="we-comet">
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly3_kgqdio.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Jason borne</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster. please vote
                                    this video and like our channel
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845446/images/resources/comet-4_vy6vie.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Sophia</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster.
                                    <i className="em em-smiley" />
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="#" className="showmore underline">
                                  more comments+
                                </a>
                              </li>
                              <li className="post-comment">
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly1_uqp4ma.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="post-comt-box">
                                  <form method="post">
                                    <textarea
                                      placeholder="Post your comment"
                                      defaultValue={""}
                                    />
                                    <div className="add-smiles">
                                      <div className="uploadimage">
                                        <i className="fa fa-image" />
                                        <label className="fileContainer">
                                          <input type="file" />
                                        </label>
                                      </div>
                                      <span
                                        className="em em-expressionless"
                                        title="add icon"
                                      />
                                      <div className="smiles-bunch">
                                        <i className="em em---1" />
                                        <i className="em em-smiley" />
                                        <i className="em em-anguished" />
                                        <i className="em em-laughing" />
                                        <i className="em em-angry" />
                                        <i className="em em-astonished" />
                                        <i className="em em-blush" />
                                        <i className="em em-disappointed" />
                                        <i className="em em-worried" />
                                        <i className="em em-kissing_heart" />
                                        <i className="em em-rage" />
                                        <i className="em em-stuck_out_tongue" />
                                      </div>
                                    </div>
                                    <button type="submit" />
                                  </form>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* album post */}
                    <div className="central-meta item">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly1_uqp4ma.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="friend-name">
                            <div className="more">
                              <div className="more-post-optns">
                                <i className="ti-more-alt" />
                                <ul>
                                  <li>
                                    <i className="fa fa-pencil-square-o" />
                                    Edit Post
                                  </li>
                                  <li>
                                    <i className="fa fa-trash-o" />
                                    Delete Post
                                  </li>
                                  <li className="bad-report">
                                    <i className="fa fa-flag" />
                                    Report Post
                                  </li>
                                  <li>
                                    <i className="fa fa-address-card-o" />
                                    Boost This Post
                                  </li>
                                  <li>
                                    <i className="fa fa-clock-o" />
                                    Schedule Post
                                  </li>
                                  <li>
                                    <i className="fa fa-wpexplorer" />
                                    Select as featured
                                  </li>
                                  <li>
                                    <i className="fa fa-bell-slash-o" />
                                    Turn off Notifications
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <ins>
                              <a href="time-line.html">Jack Carter</a> share{" "}
                              <a href="#">link</a>
                            </ins>
                            <span>
                              <i className="fa fa-globe" /> published: january,5 2010
                              19:PM{" "}
                            </span>
                          </div>
                          <div className="post-meta">
                            <figure>
                              <a
                                href="https://www.youtube.com/watch?v=fF382gwEnG8"
                                data-strip-group="mygroup"
                                className="strip vdeo-link"
                                data-strip-options="width: 700,height: 450,youtube: { autoplay: 1 }"
                              >
                                <img
                                  src="https://res.cloudinary.com/manteam/image/upload/v1628845421/images/resources/user-post_dxhiw0.jpg"
                                  alt=""
                                />
                                <i>
                                  <svg
                                    version="1.1"
                                    className="play"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    height="55px"
                                    width="55px"
                                    viewBox="0 0 100 100"
                                    enableBackground="new 0 0 100 100"
                                    xmlSpace="preserve"
                                  >
                                    <path
                                      className="stroke-solid"
                                      fill="none"
                                      d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
																C97.3,23.7,75.7,2.3,49.9,2.5"
                                    />
                                    <path
                                      className="icon"
                                      d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                                    />
                                  </svg>
                                </i>
                                <h2>Canada tourist spots you must visit in 2020</h2>
                              </a>
                              <ul className="like-dislike">
                                <li>
                                  <a
                                    className="bg-purple"
                                    href="#"
                                    title="Save to Pin Post"
                                  >
                                    <i className="fa fa-thumb-tack" />
                                  </a>
                                </li>
                                <li>
                                  <a className="bg-blue" href="#" title="Like Post">
                                    <i className="ti-thumb-up" />
                                  </a>
                                </li>
                                <li>
                                  <a className="bg-red" href="#" title="dislike Post">
                                    <i className="ti-thumb-down" />
                                  </a>
                                </li>
                              </ul>
                            </figure>
                            <div className="description">
                              <p>
                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                condimentum rhoncus, sem quam semper libero, sit amet
                                adipiscing sem neque sed ipsum. Nam quam nunc.
                              </p>
                            </div>
                            <div className="we-video-info">
                              <ul>
                                <li>
                                  <span className="views" title="views">
                                    <i className="fa fa-eye" />
                                    <ins>1.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <div className="likes heart" title="Like/Dislike">
                                    ❤ <span>2K</span>
                                  </div>
                                </li>
                                <li>
                                  <span className="comment" title="Comments">
                                    <i className="fa fa-commenting" />
                                    <ins>52</ins>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <a className="share-pst" href="#" title="Share">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <ins>20</ins>
                                  </span>
                                </li>
                              </ul>
                              <div className="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-1_norgar.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-2_bi5t3s.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845418/images/resources/userlist-3_ezegdm.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-4_vpuu9g.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-5_nea3hs.jpg"
                                  />
                                </a>
                                <span>
                                  <strong>You</strong>, <b>Sarah</b> and{" "}
                                  <a href="#">24+ more</a> liked
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="coment-area" style={{}}>
                            <ul className="we-comet">
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly3_kgqdio.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Jason borne</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster. please vote
                                    this video and like our channel
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845446/images/resources/comet-4_vy6vie.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Sophia</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster.
                                    <i className="em em-smiley" />
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="#" className="showmore underline">
                                  more comments+
                                </a>
                              </li>
                              <li className="post-comment">
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly1_uqp4ma.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="post-comt-box">
                                  <form method="post">
                                    <textarea
                                      placeholder="Post your comment"
                                      defaultValue={""}
                                    />
                                    <div className="add-smiles">
                                      <div className="uploadimage">
                                        <i className="fa fa-image" />
                                        <label className="fileContainer">
                                          <input type="file" />
                                        </label>
                                      </div>
                                      <span
                                        className="em em-expressionless"
                                        title="add icon"
                                      />
                                      <div className="smiles-bunch">
                                        <i className="em em---1" />
                                        <i className="em em-smiley" />
                                        <i className="em em-anguished" />
                                        <i className="em em-laughing" />
                                        <i className="em em-angry" />
                                        <i className="em em-astonished" />
                                        <i className="em em-blush" />
                                        <i className="em em-disappointed" />
                                        <i className="em em-worried" />
                                        <i className="em em-kissing_heart" />
                                        <i className="em em-rage" />
                                        <i className="em em-stuck_out_tongue" />
                                      </div>
                                    </div>
                                    <button type="submit" />
                                  </form>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* video post */}
                    <div className="central-meta item">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly1_uqp4ma.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="friend-name">
                            <div className="more">
                              <div className="more-post-optns">
                                <i className="ti-more-alt" />
                                <ul>
                                  <li>
                                    <i className="fa fa-pencil-square-o" />
                                    Edit Post
                                  </li>
                                  <li>
                                    <i className="fa fa-trash-o" />
                                    Delete Post
                                  </li>
                                  <li className="bad-report">
                                    <i className="fa fa-flag" />
                                    Report Post
                                  </li>
                                  <li>
                                    <i className="fa fa-address-card-o" />
                                    Boost This Post
                                  </li>
                                  <li>
                                    <i className="fa fa-clock-o" />
                                    Schedule Post
                                  </li>
                                  <li>
                                    <i className="fa fa-wpexplorer" />
                                    Select as featured
                                  </li>
                                  <li>
                                    <i className="fa fa-bell-slash-o" />
                                    Turn off Notifications
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <ins>
                              <a href="time-line.html">Digital Market</a>
                            </ins>
                            <span>
                              sponsored <i className="fa fa-globe" />
                            </span>
                          </div>
                          <div className="post-meta">
                            <figure>
                              <img
                                src="https://res.cloudinary.com/manteam/image/upload/v1628845264/images/sponsors_e1w1dq.gif"
                                alt=""
                              />
                              <ul className="like-dislike">
                                <li>
                                  <a
                                    className="bg-purple"
                                    href="#"
                                    title="Save to Pin Post"
                                  >
                                    <i className="fa fa-thumb-tack" />
                                  </a>
                                </li>
                                <li>
                                  <a className="bg-blue" href="#" title="Like Post">
                                    <i className="ti-thumb-up" />
                                  </a>
                                </li>
                                <li>
                                  <a className="bg-red" href="#" title="dislike Post">
                                    <i className="ti-thumb-down" />
                                  </a>
                                </li>
                              </ul>
                            </figure>
                            <div className="description">
                              <a href="#" className="learnmore" data-ripple>
                                Learn More
                              </a>
                              <p>
                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                condimentum rhoncus, sem quam semper libero, sit amet
                                adipiscing sem neque sed ipsum. Nam quam nunc.
                              </p>
                            </div>
                            <div className="we-video-info">
                              <ul>
                                <li>
                                  <span className="views" title="views">
                                    <i className="fa fa-eye" />
                                    <ins>1.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <div className="likes heart" title="Like/Dislike">
                                    ❤ <span>2K</span>
                                  </div>
                                </li>
                                <li>
                                  <span className="comment" title="Comments">
                                    <i className="fa fa-commenting" />
                                    <ins>52</ins>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <a className="share-pst" href="#" title="Share">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <ins>20</ins>
                                  </span>
                                </li>
                              </ul>
                              <div className="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-1_norgar.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-2_bi5t3s.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845418/images/resources/userlist-3_ezegdm.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-4_vpuu9g.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-5_nea3hs.jpg"
                                  />
                                </a>
                                <span>
                                  <strong>You</strong>, <b>Sarah</b> and{" "}
                                  <a href="#">24+ more</a> liked
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="coment-area" style={{}}>
                            <ul className="we-comet">
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly3_kgqdio.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Jason borne</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster. please vote
                                    this video and like our channel
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845446/images/resources/comet-4_vy6vie.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Sophia</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster.
                                    <i className="em em-smiley" />
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="#" className="showmore underline">
                                  more comments+
                                </a>
                              </li>
                              <li className="post-comment">
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly1_uqp4ma.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="post-comt-box">
                                  <form method="post">
                                    <textarea
                                      placeholder="Post your comment"
                                      defaultValue={""}
                                    />
                                    <div className="add-smiles">
                                      <div className="uploadimage">
                                        <i className="fa fa-image" />
                                        <label className="fileContainer">
                                          <input type="file" />
                                        </label>
                                      </div>
                                      <span
                                        className="em em-expressionless"
                                        title="add icon"
                                      />
                                      <div className="smiles-bunch">
                                        <i className="em em---1" />
                                        <i className="em em-smiley" />
                                        <i className="em em-anguished" />
                                        <i className="em em-laughing" />
                                        <i className="em em-angry" />
                                        <i className="em em-astonished" />
                                        <i className="em em-blush" />
                                        <i className="em em-disappointed" />
                                        <i className="em em-worried" />
                                        <i className="em em-kissing_heart" />
                                        <i className="em em-rage" />
                                        <i className="em em-stuck_out_tongue" />
                                      </div>
                                    </div>
                                    <button type="submit" />
                                  </form>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* digital sponsors */}
                    <div className="central-meta item">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure>
                            <img
                              alt=""
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845479/images/resources/friend-avatar10_ajprrc.jpg"
                            />
                          </figure>
                          <div className="friend-name">
                            <div className="more">
                              <div className="more-post-optns">
                                <i className="ti-more-alt" />
                                <ul>
                                  <li>
                                    <i className="fa fa-pencil-square-o" />
                                    Edit Post
                                  </li>
                                  <li>
                                    <i className="fa fa-trash-o" />
                                    Delete Post
                                  </li>
                                  <li className="bad-report">
                                    <i className="fa fa-flag" />
                                    Report Post
                                  </li>
                                  <li>
                                    <i className="fa fa-address-card-o" />
                                    Boost This Post
                                  </li>
                                  <li>
                                    <i className="fa fa-clock-o" />
                                    Schedule Post
                                  </li>
                                  <li>
                                    <i className="fa fa-wpexplorer" />
                                    Select as featured
                                  </li>
                                  <li>
                                    <i className="fa fa-bell-slash-o" />
                                    Turn off Notifications
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <ins>
                              <a href="time-line.html">Janice Griffith</a>
                            </ins>
                            <span>published: june,2 2010 19:PM</span>
                          </div>
                          <div className="description">
                            <p>
                              Curabitur World's most beautiful car in{" "}
                              <a href="#">#test drive booking !</a> the most beatuiful car
                              available in america and the saudia arabia, you can book
                              your test drive by our official website
                            </p>
                          </div>
                          <div className="post-meta">
                            <div className="linked-image align-left">
                              <a href="#">
                                <img
                                  alt=""
                                  src="https://res.cloudinary.com/manteam/image/upload/v1628845479/images/resources/friend-avatar10_ajprrc.jpg"
                                />
                              </a>
                            </div>
                            <div className="detail">
                              <span>Love Maid - HighChill</span>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur ipisicing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua...{" "}
                              </p>
                              <a href="#">www.sample.com</a>
                            </div>
                            <ul className="like-dislike">
                              <li>
                                <a
                                  className="bg-purple"
                                  href="#"
                                  title="Save to Pin Post"
                                >
                                  <i className="fa fa-thumb-tack" />
                                </a>
                              </li>
                              <li>
                                <a className="bg-blue" href="#" title="Like Post">
                                  <i className="ti-thumb-up" />
                                </a>
                              </li>
                              <li>
                                <a className="bg-red" href="#" title="dislike Post">
                                  <i className="ti-thumb-down" />
                                </a>
                              </li>
                            </ul>
                            <div className="we-video-info">
                              <ul>
                                <li>
                                  <span className="views" title="views">
                                    <i className="fa fa-eye" />
                                    <ins>1.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <div className="likes heart" title="Like/Dislike">
                                    ❤ <span>2K</span>
                                  </div>
                                </li>
                                <li>
                                  <span className="comment" title="Comments">
                                    <i className="fa fa-commenting" />
                                    <ins>52</ins>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <a className="share-pst" href="#" title="Share">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <ins>20</ins>
                                  </span>
                                </li>
                              </ul>
                              <div className="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-1_norgar.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-2_bi5t3s.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845418/images/resources/userlist-3_ezegdm.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-4_vpuu9g.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-5_nea3hs.jpg"
                                  />
                                </a>
                                <span>
                                  <strong>You</strong>, <b>Sarah</b> and{" "}
                                  <a href="#">24+ more</a> liked
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="coment-area" style={{}}>
                            <ul className="we-comet">
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly3_kgqdio.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Jason borne</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster. please vote
                                    this video and like our channel
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845446/images/resources/comet-4_vy6vie.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Sophia</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster.
                                    <i className="em em-smiley" />
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="#" className="showmore underline">
                                  more comments+
                                </a>
                              </li>
                              <li className="post-comment">
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly1_uqp4ma.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="post-comt-box">
                                  <form method="post">
                                    <textarea
                                      placeholder="Post your comment"
                                      defaultValue={""}
                                    />
                                    <div className="add-smiles">
                                      <div className="uploadimage">
                                        <i className="fa fa-image" />
                                        <label className="fileContainer">
                                          <input type="file" />
                                        </label>
                                      </div>
                                      <span
                                        className="em em-expressionless"
                                        title="add icon"
                                      />
                                      <div className="smiles-bunch">
                                        <i className="em em---1" />
                                        <i className="em em-smiley" />
                                        <i className="em em-anguished" />
                                        <i className="em em-laughing" />
                                        <i className="em em-angry" />
                                        <i className="em em-astonished" />
                                        <i className="em em-blush" />
                                        <i className="em em-disappointed" />
                                        <i className="em em-worried" />
                                        <i className="em em-kissing_heart" />
                                        <i className="em em-rage" />
                                        <i className="em em-stuck_out_tongue" />
                                      </div>
                                    </div>
                                    <button type="submit" />
                                  </form>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* love post */}
                    <div className="central-meta item">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845479/images/resources/friend-avatar10_ajprrc.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="friend-name">
                            <div className="more">
                              <div className="more-post-optns">
                                <i className="ti-more-alt" />
                                <ul>
                                  <li>
                                    <i className="fa fa-pencil-square-o" />
                                    Edit Post
                                  </li>
                                  <li>
                                    <i className="fa fa-trash-o" />
                                    Delete Post
                                  </li>
                                  <li className="bad-report">
                                    <i className="fa fa-flag" />
                                    Report Post
                                  </li>
                                  <li>
                                    <i className="fa fa-address-card-o" />
                                    Boost This Post
                                  </li>
                                  <li>
                                    <i className="fa fa-clock-o" />
                                    Schedule Post
                                  </li>
                                  <li>
                                    <i className="fa fa-wpexplorer" />
                                    Select as featured
                                  </li>
                                  <li>
                                    <i className="fa fa-bell-slash-o" />
                                    Turn off Notifications
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <ins>
                              <a href="time-line.html">Mathilda Brinker</a>
                            </ins>
                            <span>published: june,2 2020 19:PM</span>
                          </div>
                          <div className="post-meta">
                            <div className="description">
                              <p>
                                World's most beautiful car in Curabitur{" "}
                                <a href="#">#test drive booking !</a> the most beatuiful
                                car available in america and the saudia arabia, you can
                                book your test drive by our official website
                              </p>
                            </div>
                            <ul className="like-dislike">
                              <li>
                                <a href="#" title="Save to Pin Post">
                                  <i className="fa fa-thumb-tack" />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="Like Post">
                                  <i className="ti-thumb-up" />
                                </a>
                              </li>
                              <li>
                                <a href="#" title="dislike Post">
                                  <i className="ti-thumb-down" />
                                </a>
                              </li>
                            </ul>
                            <div className="we-video-info">
                              <ul>
                                <li>
                                  <span className="views" title="views">
                                    <i className="fa fa-eye" />
                                    <ins>1.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <div className="likes heart" title="Like/Dislike">
                                    ❤ <span>2K</span>
                                  </div>
                                </li>
                                <li>
                                  <span className="comment" title="Comments">
                                    <i className="fa fa-commenting" />
                                    <ins>52</ins>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <a className="share-pst" href="#" title="Share">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <ins>20</ins>
                                  </span>
                                </li>
                              </ul>
                              <div className="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-1_norgar.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-2_bi5t3s.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845418/images/resources/userlist-3_ezegdm.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-4_vpuu9g.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-5_nea3hs.jpg"
                                  />
                                </a>
                                <span>
                                  <strong>You</strong>, <b>Sarah</b> and{" "}
                                  <a href="#">24+ more</a> liked
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="coment-area" style={{}}>
                            <ul className="we-comet">
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly3_kgqdio.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Jason borne</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster. please vote
                                    this video and like our channel
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845446/images/resources/comet-4_vy6vie.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Sophia</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster.
                                    <i className="em em-smiley" />
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="#" className="showmore underline">
                                  more comments+
                                </a>
                              </li>
                              <li className="post-comment">
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly1_uqp4ma.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="post-comt-box">
                                  <form method="post">
                                    <textarea
                                      placeholder="Post your comment"
                                      defaultValue={""}
                                    />
                                    <div className="add-smiles">
                                      <div className="uploadimage">
                                        <i className="fa fa-image" />
                                        <label className="fileContainer">
                                          <input type="file" />
                                        </label>
                                      </div>
                                      <span
                                        className="em em-expressionless"
                                        title="add icon"
                                      />
                                      <div className="smiles-bunch">
                                        <i className="em em---1" />
                                        <i className="em em-smiley" />
                                        <i className="em em-anguished" />
                                        <i className="em em-laughing" />
                                        <i className="em em-angry" />
                                        <i className="em em-astonished" />
                                        <i className="em em-blush" />
                                        <i className="em em-disappointed" />
                                        <i className="em em-worried" />
                                        <i className="em em-kissing_heart" />
                                        <i className="em em-rage" />
                                        <i className="em em-stuck_out_tongue" />
                                      </div>
                                    </div>
                                    <button type="submit" />
                                  </form>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* without image */}
                    <div className="central-meta item">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly6_uswaw2.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="friend-name">
                            <div className="more">
                              <div className="more-post-optns">
                                <i className="ti-more-alt" />
                                <ul>
                                  <li>
                                    <i className="fa fa-pencil-square-o" />
                                    Edit Post
                                  </li>
                                  <li>
                                    <i className="fa fa-trash-o" />
                                    Delete Post
                                  </li>
                                  <li className="bad-report">
                                    <i className="fa fa-flag" />
                                    Report Post
                                  </li>
                                  <li>
                                    <i className="fa fa-address-card-o" />
                                    Boost This Post
                                  </li>
                                  <li>
                                    <i className="fa fa-clock-o" />
                                    Schedule Post
                                  </li>
                                  <li>
                                    <i className="fa fa-wpexplorer" />
                                    Select as featured
                                  </li>
                                  <li>
                                    <i className="fa fa-bell-slash-o" />
                                    Turn off Notifications
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <ins>
                              <a href="time-line.html">Sophia</a> shared location
                            </ins>
                            <span>
                              <i className="fa fa-globe" /> published: january,5 2010
                              19:PM
                            </span>
                          </div>
                          <div className="post-meta">
                            <div className="post-map">
                              <div className="nearby-map">
                                <div id="map-canvas" />
                              </div>
                              <ul className="like-dislike">
                                <li>
                                  <a
                                    className="bg-purple"
                                    href="#"
                                    title="Save to Pin Post"
                                  >
                                    <i className="fa fa-thumb-tack" />
                                  </a>
                                </li>
                                <li>
                                  <a className="bg-blue" href="#" title="Like Post">
                                    <i className="ti-thumb-up" />
                                  </a>
                                </li>
                                <li>
                                  <a className="bg-red" href="#" title="dislike Post">
                                    <i className="ti-thumb-down" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* near by map */}
                            <div className="description">
                              <p>
                                Curabitur Lonely Cat Enjoying in Summer{" "}
                                <a href="#">#mypage</a> ullamcorper ultricies nisi. Nam
                                eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                condimentum rhoncus, sem quam semper libero, sit amet
                                adipiscing sem neque sed ipsum. Nam quam nunc,
                              </p>
                            </div>
                            <div className="we-video-info">
                              <ul>
                                <li>
                                  <span className="views" title="views">
                                    <i className="fa fa-eye" />
                                    <ins>1.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <div className="likes heart" title="Like/Dislike">
                                    ❤ <span>2K</span>
                                  </div>
                                </li>
                                <li>
                                  <span className="comment" title="Comments">
                                    <i className="fa fa-commenting" />
                                    <ins>52</ins>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <a className="share-pst" href="#" title="Share">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <ins>20</ins>
                                  </span>
                                </li>
                              </ul>
                              <div className="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-1_norgar.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-2_bi5t3s.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845418/images/resources/userlist-3_ezegdm.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-4_vpuu9g.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-5_nea3hs.jpg"
                                  />
                                </a>
                                <span>
                                  <strong>You</strong>, <b>Sarah</b> and{" "}
                                  <a href="#">24+ more</a> liked
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="coment-area" style={{}}>
                            <ul className="we-comet">
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly3_kgqdio.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Jason borne</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster. please vote
                                    this video and like our channel
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845446/images/resources/comet-4_vy6vie.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Sophia</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster.
                                    <i className="em em-smiley" />
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="#" className="showmore underline">
                                  more comments+
                                </a>
                              </li>
                              <li className="post-comment">
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly1_uqp4ma.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="post-comt-box">
                                  <form method="post">
                                    <textarea
                                      placeholder="Post your comment"
                                      defaultValue={""}
                                    />
                                    <div className="add-smiles">
                                      <div className="uploadimage">
                                        <i className="fa fa-image" />
                                        <label className="fileContainer">
                                          <input type="file" />
                                        </label>
                                      </div>
                                      <span
                                        className="em em-expressionless"
                                        title="add icon"
                                      />
                                      <div className="smiles-bunch">
                                        <i className="em em---1" />
                                        <i className="em em-smiley" />
                                        <i className="em em-anguished" />
                                        <i className="em em-laughing" />
                                        <i className="em em-angry" />
                                        <i className="em em-astonished" />
                                        <i className="em em-blush" />
                                        <i className="em em-disappointed" />
                                        <i className="em em-worried" />
                                        <i className="em em-kissing_heart" />
                                        <i className="em em-rage" />
                                        <i className="em em-stuck_out_tongue" />
                                      </div>
                                    </div>
                                    <button type="submit" />
                                  </form>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* map location post */}
                    <div className="central-meta item">
                      <div className="user-post">
                        <div className="friend-info">
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly1_uqp4ma.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="friend-name">
                            <div className="more">
                              <div className="more-post-optns">
                                <i className="ti-more-alt" />
                                <ul>
                                  <li>
                                    <i className="fa fa-pencil-square-o" />
                                    Edit Post
                                  </li>
                                  <li>
                                    <i className="fa fa-trash-o" />
                                    Delete Post
                                  </li>
                                  <li className="bad-report">
                                    <i className="fa fa-flag" />
                                    Report Post
                                  </li>
                                  <li>
                                    <i className="fa fa-address-card-o" />
                                    Boost This Post
                                  </li>
                                  <li>
                                    <i className="fa fa-clock-o" />
                                    Schedule Post
                                  </li>
                                  <li>
                                    <i className="fa fa-wpexplorer" />
                                    Select as featured
                                  </li>
                                  <li>
                                    <i className="fa fa-bell-slash-o" />
                                    Turn off Notifications
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <ins>
                              <a href="time-line.html">Jack Carter</a> share{" "}
                              <a href="#">link</a>
                            </ins>
                            <span>
                              <i className="fa fa-globe" /> published: january,5 2010
                              19:PM{" "}
                            </span>
                          </div>
                          <div className="post-meta">
                            <figure>
                              <a
                                href="https://www.youtube.com/watch?v=fF382gwEnG8"
                                data-strip-group="mygroup"
                                className="strip vdeo-link"
                                data-strip-options="width: 700,height: 450,youtube: { autoplay: 1 }"
                              >
                                <img
                                  src="https://res.cloudinary.com/manteam/image/upload/v1628845421/images/resources/user-post_dxhiw0.jpg"
                                  alt=""
                                />
                                <i>
                                  <svg
                                    version="1.1"
                                    className="play"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    height="55px"
                                    width="55px"
                                    viewBox="0 0 100 100"
                                    enableBackground="new 0 0 100 100"
                                    xmlSpace="preserve"
                                  >
                                    <path
                                      className="stroke-solid"
                                      fill="none"
                                      d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
																C97.3,23.7,75.7,2.3,49.9,2.5"
                                    />
                                    <path
                                      className="icon"
                                      d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
                                    />
                                  </svg>
                                </i>
                                <h2>Canada tourist spots you must visit in 2020</h2>
                              </a>
                              <ul className="like-dislike">
                                <li>
                                  <a
                                    className="bg-purple"
                                    href="#"
                                    title="Save to Pin Post"
                                  >
                                    <i className="fa fa-thumb-tack" />
                                  </a>
                                </li>
                                <li>
                                  <a className="bg-blue" href="#" title="Like Post">
                                    <i className="ti-thumb-up" />
                                  </a>
                                </li>
                                <li>
                                  <a className="bg-red" href="#" title="dislike Post">
                                    <i className="ti-thumb-down" />
                                  </a>
                                </li>
                              </ul>
                            </figure>
                            <div className="description">
                              <p>
                                Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                condimentum rhoncus, sem quam semper libero, sit amet
                                adipiscing sem neque sed ipsum. Nam quam nunc.
                              </p>
                            </div>
                            <div className="we-video-info">
                              <ul>
                                <li>
                                  <span className="views" title="views">
                                    <i className="fa fa-eye" />
                                    <ins>1.2k</ins>
                                  </span>
                                </li>
                                <li>
                                  <div className="likes heart" title="Like/Dislike">
                                    ❤ <span>2K</span>
                                  </div>
                                </li>
                                <li>
                                  <span className="comment" title="Comments">
                                    <i className="fa fa-commenting" />
                                    <ins>52</ins>
                                  </span>
                                </li>
                                <li>
                                  <span>
                                    <a className="share-pst" href="#" title="Share">
                                      <i className="fa fa-share-alt" />
                                    </a>
                                    <ins>20</ins>
                                  </span>
                                </li>
                              </ul>
                              <div className="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-1_norgar.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-2_bi5t3s.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845418/images/resources/userlist-3_ezegdm.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-4_vpuu9g.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-5_nea3hs.jpg"
                                  />
                                </a>
                                <span>
                                  <strong>You</strong>, <b>Sarah</b> and{" "}
                                  <a href="#">24+ more</a> liked
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="coment-area" style={{}}>
                            <ul className="we-comet">
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly3_kgqdio.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Jason borne</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster. please vote
                                    this video and like our channel
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845446/images/resources/comet-4_vy6vie.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="we-comment">
                                  <h5>
                                    <a href="time-line.html">Sophia</a>
                                  </h5>
                                  <p>
                                    we are working for the dance and sing songs. this
                                    video is very awesome for the youngster.
                                    <i className="em em-smiley" />
                                  </p>
                                  <div className="inline-itms">
                                    <span>1 year ago</span>
                                    <a className="we-reply" href="#" title="Reply">
                                      <i className="fa fa-reply" />
                                    </a>
                                    <a href="#">
                                      <i className="fa fa-heart" />
                                      <span>20</span>
                                    </a>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a href="#" className="showmore underline">
                                  more comments+
                                </a>
                              </li>
                              <li className="post-comment">
                                <div className="comet-avatar">
                                  <img
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845489/images/resources/nearly1_uqp4ma.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="post-comt-box">
                                  <form method="post">
                                    <textarea
                                      placeholder="Post your comment"
                                      defaultValue={""}
                                    />
                                    <div className="add-smiles">
                                      <div className="uploadimage">
                                        <i className="fa fa-image" />
                                        <label className="fileContainer">
                                          <input type="file" />
                                        </label>
                                      </div>
                                      <span
                                        className="em em-expressionless"
                                        title="add icon"
                                      />
                                      <div className="smiles-bunch">
                                        <i className="em em---1" />
                                        <i className="em em-smiley" />
                                        <i className="em em-anguished" />
                                        <i className="em em-laughing" />
                                        <i className="em em-angry" />
                                        <i className="em em-astonished" />
                                        <i className="em em-blush" />
                                        <i className="em em-disappointed" />
                                        <i className="em em-worried" />
                                        <i className="em em-kissing_heart" />
                                        <i className="em em-rage" />
                                        <i className="em em-stuck_out_tongue" />
                                      </div>
                                    </div>
                                    <button type="submit" />
                                  </form>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* video post */}
                  </div>
                </div>
                {/* centerl meta */}
                <div className="col-lg-3">
                  <aside className="sidebar static right">
                    <div className="widget">
                      <h4 className="widget-title">Your page</h4>
                      <div className="your-page">
                        <figure>
                          <a href="#">
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845478/images/resources/friend-avatar9_njpxfp.jpg"
                              alt=""
                            />
                          </a>
                        </figure>
                        <div className="page-meta">
                          <a href="#" className="underline">
                            My Creative Page
                          </a>
                          <span>
                            <i className="ti-comment" />
                            <a href="insight.html">
                              Messages <em>9</em>
                            </a>
                          </span>
                          <span>
                            <i className="ti-bell" />
                            <a href="insight.html">
                              Notifications <em>2</em>
                            </a>
                          </span>
                        </div>
                        <ul className="page-publishes">
                          <li>
                            <span>
                              <i className="ti-pencil-alt" />
                              Publish
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-camera" />
                              Photo
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-video-camera" />
                              Live
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-user-plus" />
                              Invite
                            </span>
                          </li>
                        </ul>
                        <div className="page-likes">
                          <ul className="nav nav-tabs likes-btn">
                            <li className="nav-item">
                              <a
                                className="active"
                                href="#link1"
                                data-toggle="tab"
                                data-ripple
                              >
                                likes
                              </a>
                            </li>
                            <li className="nav-item">
                              <a href="#link2" data-toggle="tab" data-ripple>
                                views
                              </a>
                            </li>
                          </ul>
                          {/* Tab panes */}
                          <div className="tab-content">
                            <div className="tab-pane active fade show " id="link1">
                              <span>
                                <i className="ti-heart" />
                                884
                              </span>
                              <a href="#" title="weekly-likes">
                                35 new likes this week
                              </a>
                              <div className="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-1_norgar.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-2_bi5t3s.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845418/images/resources/userlist-3_ezegdm.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-4_vpuu9g.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-5_nea3hs.jpg"
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="link2">
                              <span>
                                <i className="fa fa-eye" />
                                440
                              </span>
                              <a href="#" title="weekly-likes">
                                440 new views this week
                              </a>
                              <div className="users-thumb-list">
                                <a data-toggle="tooltip" title="Anderw" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-1_norgar.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="frank" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-2_bi5t3s.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Sara" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845418/images/resources/userlist-3_ezegdm.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Amy" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-4_vpuu9g.jpg"
                                  />
                                </a>
                                <a data-toggle="tooltip" title="Ema" href="#">
                                  <img
                                    alt=""
                                    src="https://res.cloudinary.com/manteam/image/upload/v1628845417/images/resources/userlist-5_nea3hs.jpg"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* page like widget */}
                    <div className="widget">
                      <h4 className="widget-title">
                        Explor Events{" "}
                        <a href="#" className="see-all">
                          See All
                        </a>
                      </h4>
                      <div className="rec-events bg-purple">
                        <i className="ti-gift" />
                        <h6>
                          <a href="#">Ocean Motel good night event in columbia</a>
                        </h6>
                        <img
                          src="https://res.cloudinary.com/manteam/image/upload/v1628845265/images/clock_pjlw0f.png"
                          alt=""
                        />
                      </div>
                      <div className="rec-events bg-blue">
                        <i className="ti-microphone" />
                        <h6>
                          <a href="#">2016 The 3rd International Conference</a>
                        </h6>
                        <img
                          src="https://res.cloudinary.com/manteam/image/upload/v1628845265/images/clock_pjlw0f.png"
                          alt=""
                        />
                      </div>
                    </div>
                    {/* explore events */}
                    <div className="widget">
                      <h4 className="widget-title">Profile intro</h4>
                      <ul className="short-profile">
                        <li>
                          <span>about</span>
                          <p>
                            Hi, i am jhon kates, i am 32 years old and worked as a web
                            developer in microsoft{" "}
                          </p>
                        </li>
                        <li>
                          <span>fav tv show</span>
                          <p>Sacred Games, Spartcus Blood, Games of Theron </p>
                        </li>
                        <li>
                          <span>favourit music</span>
                          <p>Justin Biber, Shakira, Nati Natasah</p>
                        </li>
                      </ul>
                    </div>
                    {/* profile intro widget */}
                    <div className="widget stick-widget">
                      <h4 className="widget-title">
                        Recent Links{" "}
                        <a href="#" className="see-all">
                          See All
                        </a>
                      </h4>
                      <ul className="recent-links">
                        <li>
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845503/images/resources/recentlink-1_thwirt.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="re-links-meta">
                            <h6>
                              <a href="#">
                                moira's fade reaches much farther than you think.
                              </a>
                            </h6>
                            <span>2 weeks ago </span>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845503/images/resources/recentlink-2_gcfrr3.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="re-links-meta">
                            <h6>
                              <a href="#">
                                daniel asks if we want him to do the voice of doomfist
                              </a>
                            </h6>
                            <span>3 months ago </span>
                          </div>
                        </li>
                        <li>
                          <figure>
                            <img
                              src="https://res.cloudinary.com/manteam/image/upload/v1628845503/images/resources/recentlink-3_q7ee8s.jpg"
                              alt=""
                            />
                          </figure>
                          <div className="re-links-meta">
                            <h6>
                              <a href="#">the pitnik overwatch scandals.</a>
                            </h6>
                            <span>1 day before</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* recent links */}
                  </aside>
                </div>
                {/* sidebar */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;
