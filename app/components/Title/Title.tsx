"use client";
import { Archivo, Lato } from "next/font/google";
import React from "react";
import styles from "./homeTitle.module.scss";

interface HomeTitleProps {
  title: string;
  text?: string;
}

const fontTitle = Archivo({
  weight: "600",
  subsets: ["latin"],
});

const fontText = Lato({
  weight: "300",
  subsets: ["latin"],
});

const Title: React.FC<HomeTitleProps> = ({ title, text }) => {
  return (
    <div className={styles.titleWrapper}>
      <h1 className={`${styles.title} ${fontTitle.className}`}>
        {title.toUpperCase()}
      </h1>
      {text && <p className={`${styles.text} ${fontText.className}`}>{text}</p>}
    </div>
  );
};

export default Title;
