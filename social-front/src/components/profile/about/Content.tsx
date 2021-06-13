import React from "react";

const Content = () => {
  return (
    <div className="col-lg-8 col-md-8">
      <div className="central-meta">
        <span className="create-post">
          General Info<a href="#">See All</a>
        </span>
        <div className="row">
          <div className="col-lg-6">
            <div className="gen-metabox">
              <span>
                <i className="fa fa-puzzle-piece" /> Hobbies
              </span>
              <p>
                I like to ride the bicycle, swimming, and working out. I also like reading
                design magazines, and searching on internet, and also binge watching a
                good hollywood Movies while it’s raining outside.
              </p>
            </div>
            <div className="gen-metabox">
              <span>
                <i className="fa fa-plus" /> Others Interests
              </span>
              <p>
                Swimming, Surfing, Uber Diving, Anime, Photography, Tattoos, Street Art.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="gen-metabox">
              <span>
                <i className="fa fa-mortar-board" /> Education
              </span>
              <p>
                Master of computer science, sixteen years degree From{" "}
                <a href="#">Oxford Uniersity, London</a>
              </p>
            </div>
            <div className="gen-metabox">
              <span>
                <i className="fa fa-certificate" /> Work and experience
              </span>
              <p>
                Currently working in the "color hands" web development agency from the
                last 5 five years as <a href="#">Senior UI/UX Designer</a>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="gen-metabox no-margin">
              <span>
                <i className="fa fa-sitemap" /> Social Networks
              </span>
              <ul className="sociaz-media">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a className="google" href="#">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li>
                  <a className="vk" href="#">
                    <i className="fa fa-vk" />
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Content);
