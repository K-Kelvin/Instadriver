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
    tm_right: {},
    msg_right: {},
    borderRadius: "15px 15px 15px 0px",
    tick_color: "#c4c4c4",
  };
  if (sent) {
    style.bg = "#FCF2F7";
    style.float = "right";
    style.borderRadius = "15px 15px 0px 15px";
    style.tm_right = { right: 0 };
    style.msg_right = { left: "20%" };
  }
  if (read) style.tick_color = "#ffbb00";
  var ticks = (
    <span className="material-icons ticks" style={{ color: style.tick_color }}>
      done_all
    </span>
  );
  return (
    <div className="Message">
      <div className="wrapper" style={style.msg_right}>
        <div
          className="message"
          style={{
            backgroundColor: style.bg,
            borderRadius: style.borderRadius,
          }}
        >
          <p>{message}</p>
        </div>
        <div
          className="message_time"
          style={{
            ...style.tm_right,
            borderRadius: style.borderRadius,
          }}
        >
          {time} &nbsp;
          {sent ? ticks : null}
        </div>
      </div>
    </div>
  );
}
