import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExperienceCard from "../components/ExperienceCard";
import { allProjects } from "./api/past-projects";
import BackToTop from "../components/BackToTop";
import Star from "../components/Star";
import ExperiencePage from "../components/ExperiencePage";

import leftChevron from "../public/left-chevron.svg";
import rightChevron from "../public/right-chevron.svg";
import cursorSvg from "../public/cursor.svg";
import downCursor from "../public/down_cursor.svg";
import ProjectCard from "../components/ProjectCard";
import MobileNavbar from "../components/MobileNavbar";
import MobileProject from "../components/MobileProject";
import MyTimeline from "../components/Timeline";
import StackLogo from "../components/StackLogo";

export default function Home() {
  // Loading opacity
  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName("home-page")[0].style.opacity = 1;
    }, 3200);
  }, []);

  // Stars
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  const numStars = Math.floor((60 * windowWidth) / 1920);
  const starArray = Array(numStars).fill(null);

  // Typing Name
  const text = "ALEC SITU";
  const subtitle =
    "Software Engineer, ML/AI Developer, Fullstack Web Developer";
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

  // User hints
  const [scrollExp, setScrollExp] = useState(true);
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

  // Tech stack logos

  const techStack = [
    "React",
    "CSS",
    "HTML",
    "Javascript",
    "AWS",
    "Node.js",
    "PostgreSQL",
    "Python",
    "Java",
  ];

  return (
    <div className="">
      <Head>
        <title>Alec's Website</title>
      </Head>
      {/* Landscape background */}
      <main>
        {windowWidth < 680 ? <MobileNavbar /> : <Navbar />}

        {/* Change title to different animation with fixed height and swiping "roles" */}
        <div className="page home-page" id="home">
          <div
            className={windowWidth < 1024 && "w-full h-full flex items-center"}
          >
            <div
              className={
                windowWidth > 1024
                  ? "main-page"
                  : "h-fit border-l-8 border-[#6FC3FF] pl-8 w-4/5 ml-8"
              }
            >
              {windowWidth < 1024 && (
                <div className="subtitle mb-8">Hello! This is</div>
              )}

              <div className="main-name">
                {currentText}
                {currentIndex < text.length && "|"}
              </div>

              <div className="subtitle">
                {windowWidth > 1024 ? currentSubtitle : subtitle}
                {currentSubtitleIndex <= subtitle.length &&
                  windowWidth > 1024 &&
                  currentIndex >= text.length &&
                  (currentSubtitleIndex < subtitle.length ? (
                    "|"
                  ) : (
                    <span className="flashing-cursor">|</span>
                  ))}
              </div>
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
          {windowWidth > 1024 && inView && hoverExp && (
            <div className="experience-overlay">
              <Image
                src={cursorSvg}
                alt="cursor hover"
                width={40}
                className="hover-cursor"
              />
              <div className="text-white mt-4 text-lg w-fit max-w-[140px] text-center">
                Hover card to pause
              </div>
            </div>
          )}
          {windowWidth > 1024 && inView && clickExp && (
            <div className="experience-overlay">
              <Image
                src={downCursor}
                alt="cursor hover"
                width={40}
                className="click-cursor"
              />
              <div className="text-white text-lg text-center mt-3">
                Click for next!
              </div>
            </div>
          )}
          <div className="experience-page-title text-[var(--secondary-blue)] text-3xl xl:text-4xl font-semibold text-center mb-8">
            My Projects
          </div>
          <div className="experience-container" ref={experienceRef}>
            {windowWidth > 1024 ? (
              <div
                className="experience-mask-content"
                ref={scrollRef}
                onMouseEnter={() => setPause(true)}
                onMouseLeave={() => setPause(false)}
                onClick={scroll}
                tabIndex="0"
              >
                {allProjects.map((project, index) => (
                  <div className="experience">
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
                  </div>
                ))}
              </div>
            ) : (
              allProjects.map((project, index) => (
                <div className="experience">
                  <ExperienceCard
                    logo={project.logo}
                    title={project.title}
                    company={project.company}
                    link={project.link}
                    time={project.time}
                    activities={project.activities}
                    skills={project.skills}
                    key={index}
                    mobile={project.mobile}
                    page={project.page}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        {windowWidth < 680 && (
          <div className="h-40 bg-[var(--primary-background)]"></div>
        )}
        <div className="page flex justify-center items-center" id="timeline">
          <div className="logos-container flex flex-col lg:flex-row justify-center items-center h-full gap-4">
            <div className="flex flex-col justify-center items-center lg:w-1/2">
              <div className="experience-page-title text-[var(--secondary-blue)] text-3xl lg:text-4xl font-semibold text-center mb-8 max-lg:mt-40">
                Timeline
              </div>
              <MyTimeline />
            </div>
            <div className="flex flex-col justify-center items-center lg:w-1/2 max-lg:mt-20">
              {/* <div className="experience-page-title text-[var(--secondary-blue)] text-3xl lg:text-4xl font-semibold text-center mb-8 max-lg:mt-40">
                My Stack
              </div> */}
              <div className="flex flex-row flex-wrap gap-10 max-w-[600px] justify-center items-center mx-4">
                {techStack.map((name) => (
                  <StackLogo name={name} />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div
          className="page flex flex-col justify-center items-center"
          id="projects"
        >
          <div className="experience-page-title text-[var(--secondary-blue)] text-3xl lg:text-4xl font-semibold text-center mb-8 max-lg:mt-40">
            Projects
          </div>
          <div className="projects-container flex flex-row w-4/5 flex-wrap gap-16 justify-center">
            {pastProjects.map((project) =>
              windowWidth < 680 ? (
                <MobileProject
                  name={project.name}
                  description={project.description}
                  link={project.link}
                />
              ) : (
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  link={project.link}
                />
              )
            )}
          </div>
        </div> */}
        <Footer />
        <BackToTop />
      </main>
    </div>
  );
}
