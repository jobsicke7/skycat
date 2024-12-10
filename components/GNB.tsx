// /app/components/GNB.tsx
import React from "react";
import styles from "../styles/GNB.module.css";
import Link from "next/link";

const GNB: React.FC = () => {
  return (
    <nav className={styles.gnb}>
      <div className={styles.logo}>
        <Link href="/">잡식이라네</Link>
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default GNB;
