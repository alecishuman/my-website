import Image from "next/image";

export default function ProjectPage(props) {
  return (
    <div className="project-page flex flex-row p-8 rounded-2xl">
      <div className="flex w-1/2 flex-col gap-2 justify-end p-4">
        <Image src={props.logo} alt="logo" className="mb-8" width={200} />
        <div className="project-title text-2xl xl:text-4xl font-semibold">
          {props.title}
        </div>
        {props.company && <div className="xl:text-xl">{props.company}</div>}
        <div className="italic flex text-end xl:text-lg text-gray-400">
          {props.time}
        </div>
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
