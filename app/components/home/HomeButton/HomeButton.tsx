"use client";
import React from "react";
import styles from "./homeButton.module.scss";

export const HomeButton = () => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button}>View more</button>
    </div>
  );
};
