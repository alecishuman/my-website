import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Navbar(props) {
  return (
    <div className={styles.navContainer}>
      <Link href="/" className={styles.link}>
        Home
      </Link>
      <Link href="/Projects" className={styles.link}>
        Projects
      </Link>
      <Link href="/About" className={styles.link}>
        About
      </Link>
    </div>
  );
}
