import { useEffect, useRef, useState } from "react";
import { events } from "./events";

function Background(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState<boolean[]>([]);

  useEffect(() => {
    const onScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerTop = container.offsetTop;
      const scrollY = window.scrollY + window.innerHeight;
      const scrollProgress =
        ((scrollY - containerTop) / container.scrollHeight) * 100;

      setProgress(Math.min(100, Math.max(0, scrollProgress)));

      const updatedInView = entryRefs.current.map((el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight * 0.7;
      });

      setInView(updatedInView);
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

      <div className="journey-wrapper" ref={containerRef}>
        <div className="journey-line">
          <div
            className="journey-progress"
            style={{ height: `${progress}%` }}
          />
        </div>
        {events.map((event, index) => (
          <div
            className="journey-entry"
            key={index}
            ref={(el) => {
              entryRefs.current[index] = el;
            }}
          >
            <div className="journey-year"> {event.year}</div>
            <div className={`journey-dot ${inView[index] ? "pulse" : ""}`} />
            <div className="journey-content">{event.content}</div>
          </div>
        ))}
      </div>

      <h3>A short intro into my timeline</h3>
    </>
  );
}

export default Background;
