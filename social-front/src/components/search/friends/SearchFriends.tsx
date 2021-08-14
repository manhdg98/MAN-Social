import Item from "antd/lib/list/Item";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileTypes } from "redux/profile/profileAction";

const SearchFriends = () => {
  // get state
  let data: any;
  useSelector(state => (data = state));

  const { resultSearchFriends } = data.profileReducer;

  return (
    <section>
      <div className="gap2 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row merged20" id="page-contents">
                <div className="col-lg-12">
                  <div className="search-meta">
                    <span>
                      Your search result for " <i>Tuan Anh</i> " 30
                    </span>
                  </div>
                </div>
                <div className="col-lg-3">
                  <aside className="sidebar static left">
                    <div className="widget">
                      <h4 className="widget-title">Filter Search</h4>
                      <form className="c-form search" method="post">
                        <div>
                          <label>Gender</label>
                          <div className="form-radio">
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                Male
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                Female
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                Custom
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label>Post From</label>
                          <div className="form-radio">
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                Public
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                You
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                Your Friends
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                Your Group and pages
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label>Post Type</label>
                          <div className="form-radio">
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                All Posts
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                Posts you seen
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label>Post in Group</label>
                          <div className="form-radio">
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                Any Group
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                your Group
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <label>Location</label>
                          <div className="form-radio">
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                World wide
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" name="radio" />
                                <i className="check-box" />
                                your Country
                              </label>
                            </div>
                            <div className="radio">
                              <a href="#">Targeted location</a>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
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
                    <div className="widget">
                      <div className="banner medium-opacity purple">
                        <div
                          className="bg-image"
                          style={{
                            backgroundImage:
                              "url(https://res.cloudinary.com/manteam/image/upload/v1628845429/images/resources/baner-widgetbg_cgcaoc.jpg)"
                          }}
                        />
                        <div className="baner-top">
                          <span>
                            <img alt="" src="images/book-icon.png" />
                          </span>
                          <i className="fa fa-ellipsis-h" />
                        </div>
                        <div className="banermeta">
                          <p>create your own favourit page.</p>
                          <span>like them all</span>
                          <a data-ripple href="#">
                            start now!
                          </a>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
                {/* sidebar */}
                <div className="col-lg-7">
                  <div className="search-tab">
                    <ul className="nav nav-tabs tab-btn">
                      {/* <li className="nav-item"><a className="active" href="#All" data-toggle="tab">All</a></li> */}
                      <li className="nav-item">
                        <a className="active" href="#people" data-toggle="tab">
                          People
                        </a>
                      </li>
                      {/* <li className="nav-item"><a href="#photos" data-toggle="tab">Photos</a></li>
                        <li className="nav-item"><a href="#videos" data-toggle="tab">Videos</a></li>
                        <li className="nav-item"><a href="#posts" data-toggle="tab">Posts</a></li>
                        <li className="nav-item"><a href="#pages" data-toggle="tab">Pages</a></li>
                        <li className="nav-item"><a href="#groups" data-toggle="tab">Groups</a></li> */}
                    </ul>
                    {/* Tab panes */}
                    <div className="tab-content">
                      <div className="active show tab-pane fade" id="people">
                        <div className="central-meta item">
                          <span className="create-post">
                            People<a href="#">See All</a>
                          </span>
                          {resultSearchFriends && resultSearchFriends.length > 0
                            ? resultSearchFriends.map((item, index) => (
                                <div className="pit-friends" key={index}>
                                  <figure>
                                    <a href="#">
                                      <img src={item.filePath} alt="" />
                                    </a>
                                  </figure>
                                  <div className="pit-frnz-meta">
                                    <a href="#"> {item.username} </a>
                                    <i>Tornoto</i>
                                    <ul className="add-remove-frnd">
                                      <li className="add-tofrndlist">
                                        <a title="Add friend" href="#">
                                          <i className="fa fa-user-plus" />
                                        </a>
                                      </li>
                                      <li className="remove-frnd">
                                        <a title="Send Message" href="#">
                                          <i className="fa fa-comment" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              ))
                            : "Nothing to show"}
                          {/* <div className="pit-friends">
                              <figure><a href="#" ><img src="https://res.cloudinary.com/manteam/image/upload/v1623253007/uploads/60a51503cfb8b0098cc8926a/avatar/2021-06-09T15-36-45.334Z-IMG_0876_l2qjkz.jpg" alt="" /></a></figure>
                              <div className="pit-frnz-meta">
                                <a href="#" >Tuan Anh</a>
                                <i>Tornoto</i>
                                <ul className="add-remove-frnd">
                                  <li className="add-tofrndlist">
                                    <a title="Add friend" href="#"><i className="fa fa-user-plus" /></a>
                                  </li>
                                  <li className="remove-frnd">
                                    <a title="Send Message" href="#"><i className="fa fa-comment" /></a>
                                  </li>
                                </ul>
                              </div>
                            </div> */}
                        </div>
                        {/* searched peoples */}
                      </div>
                    </div>
                    <div className="central-meta item">
                      <span className="create-post">Related Searches</span>
                      <ul className="related-searches">
                        <li>
                          <a href="#">jack carter jr.</a>
                        </li>
                        <li>
                          <a href="#">jack carter Pool</a>
                        </li>
                        <li>
                          <a href="#">jack carter fdny </a>
                        </li>
                        <li>
                          <a href="#">jack carter chevrolet cadillac </a>
                        </li>
                        <li>
                          <a href="#">jack jack </a>
                        </li>
                      </ul>
                    </div>
                    {/* Related Searches */}
                  </div>
                </div>
                <div className="col-lg-2">
                  <aside className="sidebar">
                    <div className="wiki-box">
                      <h4>
                        <img
                          src="https://res.cloudinary.com/manteam/image/upload/v1628845263/images/wiki_e8mq9m.png"
                          alt=""
                        />
                        Content from the Wikipedia article{" "}
                        <a
                          href="https://en.wikipedia.org/wiki/Jack_Carter_(politician)"
                          target="_blank"
                        >
                          Jack Carter
                        </a>
                      </h4>
                      <p>
                        John William Carter is an American businessman and politician who
                        unsuccessfully ran for the United States Senate in Nevada in 2006.
                        <span>Born:</span> July 3, 1947 (age 72) <span>Education:</span>{" "}
                        Emory University, Georgia Institute of Technology, Georgia
                        Southwestern State University
                        <a
                          className="underline"
                          href="https://en.wikipedia.org/wiki/Jack_Carter_(politician)"
                          target="_blank"
                        >
                          Read More
                        </a>
                      </p>
                      <div className="helpful">
                        <span>Was this information helpful?</span>
                        <ul className="add-remove-frnd">
                          <li className="add-tofrndlist">
                            <a href="#" title="Add friend">
                              <i className="fa fa-thumbs-up" />
                            </a>
                          </li>
                          <li className="remove-frnd">
                            <a href="#" title="Send Message">
                              <i className="fa fa-thumbs-down" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
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
                    <div className="widget">
                      <div className="banner medium-opacity purple">
                        <div
                          className="bg-image"
                          style={{
                            backgroundImage:
                              "url(https://res.cloudinary.com/manteam/image/upload/v1623253007/uploads/60a51503cfb8b0098cc8926a/avatar/2021-06-09T15-36-45.334Z-IMG_0876_l2qjkz.jpg)"
                          }}
                        />
                        <div className="baner-top">
                          <span>
                            <img alt="" src="images/book-icon.png" />
                          </span>
                          <i className="fa fa-ellipsis-h" />
                        </div>
                        <div className="banermeta">
                          <p>create your own favourit page.</p>
                          <span>like them all</span>
                          <a data-ripple href="#">
                            start now!
                          </a>
                        </div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchFriends;
