import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function MobileProject({ name, description, link, image }) {
  // Add images?
  return (
    <div className="project-card flex flex-col gap-4 w-72 h-[360px] rounded-xl p-6">
      <div className="card-content flex flex-col gap-4">
        <div className="project-title font-semibold text-lg">{name}</div>
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
