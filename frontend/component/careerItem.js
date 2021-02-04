import React from "react";
import styles from "../styles/custom.module.css";

function careerItem({ data }) {
  return (
    <div>
      <h3 id={styles.h3}>{data.position}</h3>
      <p className={styles.p}>{data.description}</p>
    </div>
  );
}

export default careerItem;
