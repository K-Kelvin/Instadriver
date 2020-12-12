import "./message.css";

export default function Message({
  sent,
  message,
  time = "11.00 a.m",
  read = false,
}) {
  var style = {
    bg: "#ECF2FA",
    float: "left",
    borderRadius: "15px 15px 15px 0px",
    tick_color: "#c4c4c4",
  };
  if (sent) {
    style.bg = "#FCF2F7";
    style.float = "right";
    style.borderRadius = "15px 15px 0px 15px";
  }
  if (read) {
    style.tick_color = "#ffbb00";
  }
  var ticks = (
    <span className="material-icons ticks" style={{ color: style.tick_color }}>
      done_all
    </span>
  );
  return (
    <div className="Message">
      <div
        className="message"
        style={{
          backgroundColor: style.bg,
          float: style.float,
          borderRadius: style.borderRadius,
        }}
      >
        <p>{message}</p>
      </div>
      <div
        className="message_time"
        style={{
          float: style.float,
          borderRadius: style.borderRadius,
        }}
      >
        {time} &nbsp;
        {sent ? ticks : null}
      </div>
    </div>
  );
}
