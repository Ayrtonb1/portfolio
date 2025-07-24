import { useEffect, useRef, useState } from "react";
import { events } from "./events";

function Background(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState<boolean[]>([]);

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const distanceScrolled = viewportHeight / 2 - containerTop;

      const clampedProgress =
        Math.max(0, Math.min(distanceScrolled / containerHeight, 1)) * 100;
      setProgress(clampedProgress);

      // const updatedInView = entryRefs.current.map((el) => {
      //   if (!el) return false;
      //   const rect = el.getBoundingClientRect();
      //   return rect.top < viewportHeight / 2;
      // });

      let lastVisibleIndex = -1;
      entryRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < viewportHeight / 2) {
          lastVisibleIndex = i;
        }
      });
      setCurrentIndex(lastVisibleIndex);
      // setInView(updatedInView);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  entryRefs.current = events.map((_, i) => entryRefs.current[i] || null);
  return (
    <>
      <h1>My journey to date</h1>
      <h3>A short intro into my timeline</h3>
      <div className="journey-wrapper" ref={containerRef}>
        <div className="journey-line-wrapper">
          <div className="journey-line">
            <div
              className="journey-progress"
              style={{ height: `${progress}%` }}
            />
          </div>
        </div>

        <div className="journey-entries">
          {events.map((event, index) => (
            <div
              className="journey-entry"
              key={index}
              ref={(el) => {
                entryRefs.current[index] = el;
              }}
            >
              <div className="journey-year"> {event.year}</div>
              {/* <div className={`journey-dot ${inView[index] ? "pulse" : ""}`} /> */}
              <div
                className={`journey-dot ${
                  index === currentIndex
                    ? "pulse"
                    : index < currentIndex
                    ? "visited"
                    : ""
                }`}
              />
              <div className="journey-content">{event.content}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Background;
