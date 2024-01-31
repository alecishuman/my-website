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
import cursorSvg from "../public/cursor.svg";
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

  // Typing Name
  const text = "ALEC SITU";
  const subtitle =
    "Software Engineer, ML/AI Developer, Full-Stack Web Developer";
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    let timeout;
    let subtitleTimeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 150);
    } else if (currentSubtitleIndex < subtitle.length) {
      subtitleTimeout = setTimeout(() => {
        setCurrentSubtitle(
          (prevText) => prevText + subtitle[currentSubtitleIndex]
        );
        setCurrentSubtitleIndex((prevIndex) => prevIndex + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText("");
        setCurrentSubtitleIndex(0);
        setCurrentSubtitle("");
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
      clearTimeout(subtitleTimeout);
    };
  }, [currentIndex, currentSubtitleIndex, subtitle, text]);

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

  // Hover and click experience
  const [hoverExp, setHoverExp] = useState(true);
  const [clickExp, setClickExp] = useState(false);
  const [inView, setInView] = useState(false);
  const experienceRef = useRef();
  useEffect(() => {
    if (experienceRef && !inView) {
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setInView(true)
      );
      observer.observe(experienceRef.current);

      return () => {
        observer.disconnect();
      };
    }
  });

  return (
    <div className="">
      <Head>
        <title>Alec Website</title>
      </Head>

      {/* TODO: Add typing text for front page */}
      <main>
        <Navbar />
        <div className="page" id="home">
          <div className="main-page">
            <div className="main-name">
              {currentText}
              {currentIndex < text.length && "|"}
            </div>

            <div className="subtitle">
              {currentSubtitle}
              {currentSubtitleIndex <= subtitle.length &&
                currentIndex >= text.length &&
                (currentSubtitleIndex < subtitle.length ? (
                  "|"
                ) : (
                  <span className="flashing-cursor">|</span>
                ))}
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
          <div className="experience-page-title text-3xl lg:text-4xl font-semibold text-center mb-8">
            Notable Experience
          </div>
          <div className="experience-container" ref={experienceRef}>
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
                      hoverExp={setHoverExp}
                      clickExp={setClickExp}
                      inView={inView}
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
            {inView && hoverExp && (
              <div className="hover-cursor absolute right-[35vw] bottom-20 z-10 flex flex-col justify-center items-center">
                <Image
                  src={cursorSvg}
                  alt="cursor hover"
                  width={50}
                  className=""
                />
                <div className="text-[#1AA1DB] bg-[#232233] px-4 py-2 text-xl font-semibold">
                  Pause!
                </div>
              </div>
            )}
            {inView && clickExp && (
              <div className="absolute right-[35vw] bottom-20 z-10 flex flex-col justify-center items-center">
                <div className="click-ripple relative">
                  <Image
                    src={cursorSvg}
                    alt="cursor hover"
                    width={50}
                    className="z-20 click-cursor"
                  />
                </div>
                <div className="text-[#1AA1DB] bg-[#232233] px-4 text-xl font-semibold mt-1">
                  Next!
                </div>
              </div>
            )}
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
