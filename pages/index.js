import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";
import BackToTop from "../components/BackToTop";
import Star from "../components/Star";

export default function Home() {
  const starArray = Array(40).fill(null);
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
        <div className="projects page"></div>
        <Footer />
        <BackToTop />
      </main>
    </div>
  );
}
