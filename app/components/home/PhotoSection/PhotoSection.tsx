"use client";
import { Archivo } from "next/font/google";
import styles from "./photoSection.module.scss";
import ImageBlock from "./ImageBlock/ImageBlock";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { Ball, Logo } from "@/app/images";
import { useState } from "react";

const font = Archivo({
  weight: "700",
  subsets: ["latin"],
});

const PhotoSection = () => {
  const { scrollYProgress } = useScroll();
  const [isHover, setIsHover] = useState(false);
  const yVal = useTransform(scrollYProgress, [0, 1], ["0px", "-700px"]);
  const variants = {
    hover: { opacity: 1 },
  };
  return (
    <div className={styles.homeImageWrapper}>
      <div
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        className={styles.container}
      >
        <motion.div className={styles.homeTitle} style={{ y: yVal }}>
          <h1 className={`${styles.title} ${font.className}`}>HOOPERS</h1>
          <Image className={styles.logoImage} src={Logo} alt="logo" />
        </motion.div>
      </div>
      <motion.div
        initial={{
          x: "0%",
          y: "0%",
          scale: 1,
        }}
        animate={{
          x: isHover ? "65%" : "0%",
          y: isHover ? "28%" : "0%",
          rotate: isHover ? 30 : 0,
          scale: isHover ? 1.2 : 1,
          filter: isHover ? "grayscale(0%)" : "grayscale(100%)",
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: "50",
        }}
        className={styles.ballWrapper}
      >
        <Image
          className={styles.ballImage}
          height={900}
          src={Ball}
          alt="Ball"
        />
      </motion.div>
    </div>
  );
};

export default PhotoSection;
