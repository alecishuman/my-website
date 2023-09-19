import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
import { pastProjects } from "./api/past-projects";
import BackToTop from "../components/BackToTop";
import Star from "../components/Star";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  const numStars = Math.floor((100 * windowWidth) / 1920);

  const starArray = Array(numStars).fill(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>Alec Website</title>
      </Head>
      {starArray.map((num, index) => (
        <Star />
      ))}

      <main>
        <Navbar />
        <div className="page">
          <div className="main-page">
            <div className="main-name">ALEC SITU</div>
            <div className="subtitle">
              Software Engineer, ML/AI Developer, Web Developer
            </div>
          </div>
        </div>
        <div className="page flex flex-col justify-end items-center">
          <div className="project-page-title text-5xl font-semibold text-center">
            Notable Experience
          </div>
          <div className="projects flex flex-row justify-center w-9/10 flex-wrap items-center gap-8 my-16 h-fit">
            {pastProjects.map((project) => (
              <Project
                title={project.title}
                company={project.company}
                link={project.link}
                time={project.time}
                description={project.description}
                activities={project.activities}
                skills={project.skills}
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
