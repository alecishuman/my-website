import { useEffect, useRef } from "react";

export default function ProjectCard({ name, descripiton, link }) {
  const card = useRef();
  const hidden = useRef();
  //   useEffect(() => {
  //     addEventListener(hoverCard);
  //     return removeEventListener(hoverCard);
  //   }, []);

  //   const hoverCard = onmouseover(() => {
  //     hidden.current.style.setProperty("display", "block");
  //   });

  return (
    <div
      ref={card}
      className="project-card flex flex-col gap-4 w-60 h-80 rounded-xl p-6 justify-end"
    >
      <div className="project-title font-semibold">{name}</div>
      <div ref={hidden} className="project-hide hidden flex flex-col gap-4">
        <hr />
        <div className="text-sm">{descripiton}</div>
        <button className="project-more-btn text-white px-4 py-2 w-fit rounded-lg text-sm">
          More
        </button>
      </div>
    </div>
  );
}
