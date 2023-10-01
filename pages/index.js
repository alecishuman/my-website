import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { pastProjects } from "./api/past-projects";
import BackToTop from "../components/BackToTop";
import Star from "../components/Star";
import ProjectPage from "../components/ProjectPage";

import leftChevron from "../public/left-chevron.svg";
import rightChevron from "../public/right-chevron.svg";

export default function Home() {
  // Stars
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  const numStars = Math.floor((60 * windowWidth) / 1920);
  const starArray = Array(numStars).fill(null);

  // Horizontal scroll
  const scrollRef = useRef(null);
  const [tracker, setTracker] = useState(1);
  const [first, setFirst] = useState(true);
  const [last, setLast] = useState(false);
  const scrollLeft = () => {
    if (scrollRef.current) {
      const currentScrollLeft = scrollRef.current.scrollLeft;
      const scrollRefWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: currentScrollLeft - scrollRefWidth / 2,
        behavior: "smooth",
      });
      setTracker((prev) => prev - 1);
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      const currentScrollRight = scrollRef.current.scrollLeft;
      const scrollRefWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: currentScrollRight + scrollRefWidth / 2,
        behavior: "smooth",
      });
      setTracker((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setFirst(tracker === 1);
    setLast(tracker === 3);
  }, [tracker]);

  return (
    <div className="">
      <Head>
        <title>Alec Website</title>
      </Head>

      <main>
        <Navbar />
        <div className="page">
          <div className="main-page">
            <div className="main-name">ALEC SITU</div>
            <div className="subtitle">
              Software Engineer, ML/AI Developer, Web Developer
            </div>
          </div>
          {starArray.map((num, index) => (
            <Star />
          ))}
        </div>
        <div className="page h-fit flex flex-col justify-center items-center">
          <div className="project-page-title text-4xl md:text-5xl font-semibold text-center mb-8">
            Notable Experience
          </div>
          <div className="projects-container">
            <div className="projects-mask-content" ref={scrollRef}>
              {pastProjects.map((project, index) => (
                <div className="project">
                  {windowWidth > 1024 ? (
                    <ProjectPage
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
                    <ProjectCard
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
            {windowWidth > 1024 && !first && (
              <button
                className="project-scroll-button project-scroll-button-left rounded-bl-2xl rounded-tl-2xl"
                onClick={scrollLeft}
              >
                <Image src={leftChevron} alt="left chevron" width={48} />
              </button>
            )}
            {windowWidth > 1024 && !last && (
              <button
                className="project-scroll-button project-scroll-button-right rounded-br-2xl rounded-tr-2xl"
                onClick={scrollRight}
              >
                <Image src={rightChevron} alt="right chevron" width={48} />
              </button>
            )}
          </div>
        </div>
        <Footer />
        <BackToTop />
      </main>
    </div>
  );
}
