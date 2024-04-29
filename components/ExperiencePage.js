import Image from "next/image";

import React, { useState, useEffect } from "react";

export default function ExperiencePage({
  logo,
  title,
  company,
  time,
  link,
  activities,
  skills,
  hoverExp,
  clickExp,
  inView,
}) {

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        hoverExp(false);
        clickExp(true);
      }, 2500);
      setTimeout(() => {
        clickExp(false);
      }, 5000);
    }
  }, [inView]);

  return (
    <div className="experience-page flex flex-row p-8 rounded-2xl">
      <div className="flex w-1/2 flex-col gap-[6px] justify-end p-4">
        {logo && <Image src={logo} alt="logo" className="mb-8" width={140} />}

        <div className="experience-title text-xl xl:text-3xl font-semibold">
          {title}
        </div>
        {company && <div className="xl:text-lg">{company}</div>}
        <div className="italic flex text-gray-400">{time}</div>
        {link && (
          <a
            href={link}
            className="experience-link mt-4 rounded-xl px-5 py-[10px] w-fit font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            See more
          </a>
        )}
      </div>
      <div className="flex w-1/2 flex-col gap-2 p-4 justify-center">
        {activities.map((activity) => (
          <div className="flex">
            <span className="mr-2">&#8226;</span>
            <div className="inline xl:text-lg">{activity}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
