import "./body.css";
import Contact from "./Contact";
import Message from "./Message";
import pic1 from "../images/pic1.png";

export default function Body() {
  return (
    <div className="Body">
      <div className="left-navbar">
        <ul>
          <li>
            <a href="#">Employer Profile</a>
          </li>
          <li>
            <a href="#">Onboard Your Vehicles</a>
          </li>
          <li>
            <a href="#">Search &amp; Hire Drivers</a>
          </li>
          <li className="active">
            <a href="#">Inbox</a>
          </li>
          <li>
            <a href="#">Recruitment</a>
          </li>
          <li>
            <a href="#">My Organisations</a>
          </li>
          <li>
            <a href="#">Rate A Driver</a>
          </li>
          <li>
            <a href="#">My Subscription</a>
          </li>
        </ul>
      </div>

      <div className="contacts">
        <div className="search">
          <input type="text" className="search_bar" placeholder="Search.." />
          <p style={{ display: "block" }}>Filter</p>
        </div>
        <div className="conversations">
          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </div>
      </div>

      <div className="chat">
        <button>Start a new chat</button>
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
