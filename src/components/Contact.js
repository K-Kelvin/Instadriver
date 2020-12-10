import "./contact.css";
import img from "../images/pic1.png";

export default function Contact({
  image = img,
  name = "Shirley Cook",
  username = "@JohntheD",
  time = "11:00 a.m",
  unread = 4,
}) {
  var colors = { bg: "#F9F8F8", time: "#C4C4C4" };
  if (unread > 0) {
    colors.bg = "#E8F5F9";
    colors.time = "#279F2C";
  }
  return (
    <div className="Contact" style={{ backgroundColor: colors.bg }}>
      <div className="left">
        <img src={image} alt="..." />
        <p className="name">{name}</p>
        <p>{username}</p>
      </div>
      <div className="chat_id">Chat ID: 3362Gd2</div>
      <div className="right">
        <h2>Inquiry about reloca....</h2>
        <p>Vacancy ads help you attract potential hires who are ....</p>
      </div>
      <div className="time" style={{ color: colors.time }}>
        {time}
      </div>
      {unread > 0 ? <div className="unread">{unread}</div> : false}
    </div>
  );
}
