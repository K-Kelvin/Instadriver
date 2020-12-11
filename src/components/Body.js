import "./m_query.css";
import "./body.css";
import Contact from "./Contact";
import Message from "./Message";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";

export default function Body() {
  var msg1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  var msg2 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  var msg3 = "Lorem ipsum dolor";
  return (
    <div className="Body">
      <div id="left-section" className="left-navbar">
        <ul>
          <li>
            <a href="#emp">
              <i className="far fa-user"></i>
              Employer Profile
            </a>
          </li>
          <li>
            <a href="#veh">
              <i className="fas fa-car"></i>
              Onboard Your Vehicles
            </a>
          </li>
          <li>
            <a href="#sch">
              <i className="fas fa-search"></i>
              Search &amp; Hire Drivers
            </a>
          </li>
          <li className="active">
            <a href="#inb">
              <i className="far fa-envelope"></i>
              Inbox
              <span id="highlight"></span>
            </a>
          </li>
          <li>
            <a href="#rec">
              <i className="fas fa-briefcase"></i>
              Recruitment
            </a>
          </li>
          <li>
            <a href="#org">
              <i className="fas fa-sitemap"></i>
              My Organisations
            </a>
          </li>
          <li>
            <a href="#rate">
              <i className="fas fa-star-half-alt"></i>
              Rate A Driver
            </a>
          </li>
          <li>
            <a href="#sub">
              <i className="far fa-credit-card"></i>
              My Subscription
            </a>
          </li>
        </ul>
      </div>

      <div id="middle-section" className="contacts">
        <div className="search_div">
          <div className="search">
            <input type="text" className="search_bar" placeholder="Search..." />
            <i className="fas fa-search search_icon"></i>
          </div>
          <button onClick={toggleMenu} id="filter">
            <i className="fas fa-filter"></i>
          </button>
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

      <div id="right-section" className="chat">
        <button>
          <i className="fas fa-plus"></i> &nbsp; Start a new chat
        </button>
        <div className="messages">
          <img src={pic1} className="profile_image" alt="..." />
          <header className="chat_header">
            <div className="details">
              <p className="name">Shirly Cook</p>
              <p>@JohntheD</p>
            </div>
            <div style={{ fontWeight: "bold" }}>
              Inquiry about relocation from Nairobi{" "}
            </div>
            <div className="contact_info">
              <i className="fas fa-info"></i>
              Contact Info
            </div>
            <div>
              <span className="material-icons">more_vert</span>
            </div>
          </header>
          <div className="chat_body">
            <div id="chat_id" className="chat_id">
              Chat ID: 3362Gd2
            </div>
            <Message message={msg1} />
            <Message sent message={msg2} read={true} />
            <Message message={msg3} />
            <Message message={msg1} />
            <Message message={msg2} />
            <Message sent message={msg2} />
            <Message message={msg2} />
            <Message message={msg2} />
          </div>
          <div className="chat_footer">
            <div className="type_message">
              <textarea
                placeholder="Type your message"
                style={{ resize: "none" }}
              />
              <div className="footer">
                <span className="material-icons">attachment</span>
                <span className="material-icons">sentiment_satisfied_alt</span>
                <span className="material-icons">mic</span>
                <span className="material-icons" id="btn-send">
                  send
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function toggleMenu() {
  console.log("clicked");
}
