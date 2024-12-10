import React from "react";
import styles from "../styles/FNB.module.css";
import Link from "next/link";

const FNB: React.FC = () => {
  return (
    <footer className={styles.fnb}>
      <div className={styles.links}>
      </div>
      <p className={styles.copy}>© 2024 잡식이라네. All rights reserved.</p>
    </footer>
  );
};

export default FNB;
