import "./body.css";
import Contact from "./Contact";
import Message from "./Message";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";

export default function Body() {
  return (
    <div className="Body">
      <div className="left-navbar">
        <ul>
          <li>
            <span class="material-icons">person_outline</span>
            <a href="#emp">Employer Profile</a>
          </li>
          <li>
            <span class="material-icons">drive_eta</span>
            <a href="#veh">Onboard Your Vehicles</a>
          </li>
          <li>
            <span class="material-icons">search</span>
            <a href="#sch">Search &amp; Hire Drivers</a>
          </li>
          <li className="active">
            <span class="material-icons">mail</span>
            <a href="#inb">Inbox</a>
          </li>
          <li>
            <span class="material-icons">business_center</span>
            <a href="#rec">Recruitment</a>
          </li>
          <li>
            <span class="material-icons">account_tree</span>
            <a href="#org">My Organisations</a>
          </li>
          <li>
            <span class="material-icons">stars</span>
            <a href="#rate">Rate A Driver</a>
          </li>
          <li>
            <span class="material-icons">payment</span>
            <a href="#sub">My Subscription</a>
          </li>
        </ul>
      </div>

      <div className="contacts">
        <div className="search">
          <input type="text" className="search_bar" placeholder="Search.." />
          <p style={{ display: "block" }}>
            <span className="material-icons">filter_list</span>
          </p>
        </div>
        <div className="conversations">
          <Contact image={pic1} unread="4" />
          <Contact image={pic2} unread="0" />
          <Contact image={pic3} unread="4" />
          <Contact image={pic1} unread="4" />
          <Contact image={pic2} unread="0" />
          <Contact image={pic3} unread="0" />
          <Contact image={pic1} unread="0" />
        </div>
      </div>

      <div className="chat">
        <button>
          <span class="material-icons" style={{ fontSize: "1rem" }}>
            add
          </span>{" "}
          Start a new chat
        </button>
        <div className="messages">
          <header className="chat_header">
            <img src={pic1} alt="..." />
          </header>
          <div className="body">
            <Message />
          </div>
          <div className="footer">
            <div className="type_message">
              <textarea
                placeholder="Type your message"
                style={{ resize: "none" }}
              />
              <div className="footer">Icon Icon Icon Send</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
