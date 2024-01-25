import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExperienceCard from "../components/ExperienceCard";
import { pastExperience } from "./api/past-experience";
import { pastProjects } from "./api/past-projects";
import BackToTop from "../components/BackToTop";
import Star from "../components/Star";
import ExperiencePage from "../components/ExperiencePage";

import leftChevron from "../public/left-chevron.svg";
import rightChevron from "../public/right-chevron.svg";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  // Stars
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }, []);
  const numStars = Math.floor((60 * windowWidth) / 1920);
  const starArray = Array(numStars).fill(null);

  // Horizontal scroll
  const scrollRef = useRef(null);
  const [pause, setPause] = useState(false);
  const scroll = () => {
    if (scrollRef.current) {
      const currentScroll = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      var scrollAmt = currentScroll + width / 2;
      if (currentScroll > width) {
        scrollAmt = 0;
      }
      scrollRef.current.scrollTo({
        left: scrollAmt,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (!pause) {
      scroll();
      const carousel = setInterval(() => {
        scroll();
      }, 2000);
      return () => clearInterval(carousel);
    }
  }, [pause]);

  return (
    <div className="">
      <Head>
        <title>Alec Website</title>
      </Head>

      <main>
        <Navbar />
        <div className="page" id="home">
          <div className="main-page">
            <div className="main-name">ALEC SITU</div>
            <div className="subtitle">
              Software Engineer, ML/AI Developer, Full-Stack Web Developer
            </div>
          </div>
          {starArray.map((num, index) => (
            <Star />
          ))}
        </div>

        <div
          className="page h-fit flex flex-col justify-center items-center"
          id="experience"
        >
          <div className="experience-page-title text-3xl lg:text-4xl font-semibold text-center">
            Notable Experience
          </div>
          <div className="text-center mb-8">
            (Hover to pause, click to scroll)
          </div>
          <div className="experience-container">
            <div
              className="experience-mask-content"
              ref={scrollRef}
              onMouseEnter={() => setPause(true)}
              onMouseLeave={() => setPause(false)}
              onClick={scroll}
              // onKeyDown={handleSpace}
              tabIndex="0"
            >
              {pastExperience.map((project, index) => (
                <div className="experience">
                  {windowWidth > 1024 ? (
                    <ExperiencePage
                      logo={project.logo}
                      title={project.title}
                      company={project.company}
                      link={project.link}
                      time={project.time}
                      activities={project.activities}
                      skills={project.skills}
                      key={index}
                    />
                  ) : (
                    <ExperienceCard
                      logo={project.logo}
                      title={project.title}
                      company={project.company}
                      link={project.link}
                      time={project.time}
                      activities={project.activities}
                      skills={project.skills}
                      key={index}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="page flex flex-col justify-center items-center"
          id="projects"
        >
          <div className="experience-page-title text-3xl lg:text-4xl font-semibold text-center mb-8">
            Projects
          </div>
          <div className="projects-container flex flex-row w-4/5 flex-wrap gap-16 justify-center">
            {pastProjects.map((project) => (
              <ProjectCard
                name={project.name}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
        <Footer />
        <BackToTop />
      </main>
    </div>
  );
}
