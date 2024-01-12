import Image from "next/image";

export default function ExperiencePage(props) {
  return (
    <div className="experience-page flex flex-row p-8 rounded-2xl">
      <div className="flex w-1/2 flex-col gap-2 justify-end p-4">
        <Image src={props.logo} alt="logo" className="mb-8" width={160} />
        <div className="experience-title text-xl xl:text-4xl font-semibold">
          {props.title}
        </div>
        {props.company && <div className="xl:text-xl">{props.company}</div>}
        <div className="italic flex xl:text-lg text-gray-400">{props.time}</div>
        {props.link && (
          <a
            href={props.link}
            className="experience-link mt-4 rounded-xl px-5 py-3 w-fit"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more
          </a>
        )}
      </div>
      <div className="flex w-1/2 flex-col gap-2 p-4 justify-center">
        {props.activities.map((activity) => (
          <div className="flex">
            <span className="mr-2">&#8226;</span>
            <div className="inline xl:text-lg">{activity}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
