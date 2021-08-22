import React from "react";

const Friends = () => {
  return (
    <>
      <section>
        <div className="gap2 gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row merged20" id="page-contents">
                  <div className="col-lg-12">
                    <div className="central-meta">
                      <div className="title-block">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="align-left">
                              <h5>
                                Friends / Followers <span>44</span>
                              </h5>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="row merged20">
                              <div className="col-lg-7 col-lg-7 col-sm-7">
                                <form method="post">
                                  <input type="text" placeholder="Search Friend" />
                                  <button type="submit">
                                    <i className="fa fa-search" />
                                  </button>
                                </form>
                              </div>
                              <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className="select-options">
                                  <select className="select">
                                    <option>Sort by</option>
                                    <option>A to Z</option>
                                    <option>See All</option>
                                    <option>Newest</option>
                                    <option>oldest</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-1 col-md-1 col-sm-1">
                                <div className="option-list">
                                  <i className="fa fa-ellipsis-v" />
                                  <ul>
                                    <li>
                                      <a href="#">Show Friends Public</a>
                                    </li>
                                    <li>
                                      <a href="#">Show Friends Private</a>
                                    </li>
                                    <li>
                                      <a href="#">Mute Notifications</a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* title block */}
                    <div className="central-meta padding30">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <div className="friend-box">
                            <figure>
                              <img
                                src="https://res.cloudinary.com/manteam/image/upload/v1628845481/images/resources/frnd-cover1_qake2a.jpg"
                                alt=""
                              />
                              <span>Followers: 120</span>
                            </figure>
                            <div className="frnd-meta">
                              <img
                                src="https://res.cloudinary.com/manteam/image/upload/v1628845482/images/resources/frnd-figure1_ywscc6.jpg"
                                alt=""
                              />
                              <div className="frnd-name">
                                <a href="#">Adam James</a>
                                <span>California, USA</span>
                              </div>
                              <ul className="frnd-info">
                                <li>
                                  <span>Friends:</span> 223 (2 mutule friends)
                                </li>
                                <li>
                                  <span>Videos:</span> 240
                                </li>
                                <li>
                                  <span>Photos:</span> 144
                                </li>
                                <li>
                                  <span>Post:</span> 250
                                </li>
                                <li>
                                  <span>Since:</span> December, 2014
                                </li>
                              </ul>
                              <a className="send-mesg" href="#">
                                Message
                              </a>
                              <div className="more-opotnz">
                                <i className="fa fa-ellipsis-h" />
                                <ul>
                                  <li>
                                    <a href="#">Block</a>
                                  </li>
                                  <li>
                                    <a href="#">UnBlock</a>
                                  </li>
                                  <li>
                                    <a href="#">Mute Notifications</a>
                                  </li>
                                  <li>
                                    <a href="#">hide from friend list</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lodmore">
                        <span>Viewing 1-8 of 44 friends</span>
                        <button className="btn-view btn-load-more" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Friends);
