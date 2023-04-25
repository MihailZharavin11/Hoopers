"use client";
import { Archivo } from "next/font/google";
import React from "react";
import styles from "./homeTitle.module.scss";

interface HomeTitleProps {
  title: string;
  text: string;
}

const fontTitle = Archivo({
  weight: "600",
  subsets: ["latin"],
});

const HomeTitle: React.FC<HomeTitleProps> = ({ title, text }) => {
  return (
    <div className={styles.titleWrapper}>
      <h1 className={`${styles.title} ${fontTitle.className}`}>
        {title.toUpperCase()}
      </h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default HomeTitle;
