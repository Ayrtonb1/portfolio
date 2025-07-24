import { events } from "./events";

function Background(): React.JSX.Element {
  return (
    <>
      <h1>My journey to date</h1>

      <div className="journey-wrapper">
        <div className="journey-line"></div>
        <div className="journey-timeline">
          {events.map((event, index) => (
            <div key={index}>
              {event.year}
              {event.content}
            </div>
          ))}
        </div>
      </div>
      <h3>A short intro into my timeline</h3>
    </>
  );
}

export default Background;
