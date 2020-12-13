import "./dropdowns.css";
import { Fragment } from "react";

export default function Dropleft({ id, icon, header, center, width }) {
  var top_component, mid_component;
  if (header) {
    top_component = <header>{header}</header>;
  }
  if (id === "filter_toggle") {
    mid_component = (
      <Fragment>
        <button className="message test" type="button">
          <a className="second_dropdown_toggle" href="#click">
            Message statuses
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </a>
          <div className="second_dropdown drop_left">
            <button className="btn btn-drop-2">Read messages</button>
            <button className="btn btn-drop-2">Unread messages</button>
            <button className="btn btn-drop-2">Opened but not responded</button>
            <button className="btn btn-drop-2">Ongoing discussion</button>
            <button className="btn btn-drop-2">Ended discussion</button>
          </div>
        </button>
        <button className="message test" type="button">
          <a className="second_dropdown_toggle" href="#click">
            Time of message
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </a>
          <div className="second_dropdown drop_left">
            <button className="btn btn-drop-2">Last hour</button>
            <button className="btn btn-drop-2">12 hrs ago</button>
            <button className="btn btn-drop-2">Today</button>
            <button className="btn btn-drop-2">This week</button>
            <button className="btn btn-drop-2">This month</button>
            <button className="btn btn-drop-2">This year</button>
          </div>
        </button>
        <button id="apply_filters" type="button">
          Apply filters
        </button>
      </Fragment>
    );
  } else if (id === "contact_info") {
    mid_component = (
      <Fragment>
        <div className="mobile_number">
          Mobile number <span>0733221133</span>
        </div>
        <div className="email_address">
          Email address <span>johndoe@gmail.com</span>
        </div>
      </Fragment>
    );
  } else if (id === "options") {
    mid_component = (
      <Fragment>
        <button className="close">Close chat</button>
        <button className="close">Delete chat</button>
      </Fragment>
    );
  }
  return (
    <div className="btn-group dropleft">
      <button
        id={id}
        type="button"
        className="btn btn-secondary dropdown-toggle hide-toggle"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        {icon}
      </button>

      <div
        className="dropdown-menu dropdown-menu-right drop_left"
        style={width ? { width: width } : null}
      >
        {top_component}
        <div className="drop_body">{mid_component}</div>
      </div>
    </div>
  );
}
