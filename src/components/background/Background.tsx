import { events } from "./events";

function Background(): React.JSX.Element {
  return (
    <>
      <h1>My journey to date</h1>

      <div className="journey-wrapper">
        <div className="journey-line"></div>
        <div className="journey-timeline">
          {events.map((event, index) => (
            <div className="journey-entry" key={index}>
              <div className="journey-year"> {event.year}</div>
              {/* <div></div> */}
              <div className="journey-content">{event.content}</div>
            </div>
          ))}
        </div>
      </div>
      <h3>A short intro into my timeline</h3>
    </>
  );
}

export default Background;
