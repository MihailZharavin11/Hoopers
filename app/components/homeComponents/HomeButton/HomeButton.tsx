"use client";
import React from "react";
import styles from "./homeButton.module.scss";
import { Lato } from "next/font/google";

interface HomeButton {
  title: string;
}

const buttonFont = Lato({
  weight: "300",
  subsets: ["latin"],
});

export const HomeButton: React.FC<HomeButton> = ({ title }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={`${styles.button} ${buttonFont.className}`}>
        {title}
      </button>
    </div>
  );
};
