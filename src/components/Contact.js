import "./contact.css";
import img from "../images/pic1.png";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="left">
        <img src={img} alt="..." />
      </div>
      <div className="right">
        <h2>Inquiry about reloca....</h2>
        <p>Vacancy ads help you attract potential hires who are ....</p>
      </div>
    </div>
  );
}
