import { useState, useEffect, useRef } from "react";

export default function ProjectCard({ name, description, link }) {
  const card = useRef();
  const hidden = useRef();
  const onHover = () => {
    card.current.style.transform = `translateY(0)`;
  };

  const onLeave = () => {
    card.current.style.transform = `translateY(${
      300 - hidden.current.clientHeight
    }px)`;
  };

  useEffect(() => {
    card.current.style.transform = `translateY(${
      300 - hidden.current.clientHeight
    }px)`;
  }, []);

  return (
    <div
      className="project-card flex flex-col gap-4 w-72 h-[360px] rounded-xl p-6 overflow-hidden"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      id="projects"
    >
      <div ref={card} className="card-content flex flex-col gap-4">
        <div ref={hidden} className="project-title font-semibold text-lg">
          {name}
        </div>
        <hr className="bg-gray-400" />
        <div className="project-hide flex flex-col gap-4">
          <div className="text-sm">{description}</div>
          {link && (
            <a
              className="project-more-btn text-white px-4 py-2 w-fit rounded-lg text-sm"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              More
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
