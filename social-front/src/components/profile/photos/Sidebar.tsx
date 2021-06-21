import React, { useState } from "react";
import { ContentTabImage } from "../ProfileConstants";

const Sidebar = props => {
  const [childTabActive, setChildTabactive] = useState(ContentTabImage.AVATAR);
  const changeTabActive = data => {
    setChildTabactive(data);
    props.changeChildTab(data);
  };

  return (
    <div className="col-lg-3">
      <aside className="sidebar static">
        <div className="widget">
          <h4 className="widget-title">Shortcuts</h4>
          <ul className="naves">
            <li
              className={`${childTabActive === ContentTabImage.AVATAR ? "active" : ""}`}
              onClick={() => changeTabActive(ContentTabImage.AVATAR)}
            >
              <i className="fa fa-user-circle" />
              <a> Avatar </a>
            </li>
            <li
              className={`${
                childTabActive === ContentTabImage.BACKGROUND ? "active" : ""
              }`}
              onClick={() => changeTabActive(ContentTabImage.BACKGROUND)}
            >
              <i className="fa fa-picture-o" />
              <a> Background </a>
            </li>
            <li
              className={`${childTabActive === ContentTabImage.TIMELINE ? "active" : ""}`}
              onClick={() => changeTabActive(ContentTabImage.TIMELINE)}
            >
              <i className="fa fa-book" />
              <a> Timelines </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default React.memo(Sidebar);
