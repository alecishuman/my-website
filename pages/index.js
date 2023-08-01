import Head from "next/head";
import React from "react";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Project from "../components/Project";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alec Website</title>
      </Head>
      <main>
        <Navbar />
        <div className="projects">
          <Project title="hi" description="hi" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
