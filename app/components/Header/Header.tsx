"use client";
import React from "react";
import styles from "./header.module.scss";
import Image from "next/image";
import { Navigation } from "./Navigation/Navigation";
import ImageSvg from "../ImageSVG/ImageSvg";

const Header = () => {
  return (
    <div className={styles.header}>
      <Navigation />
    </div>
  );
};

export default Header;
