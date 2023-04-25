"use client";
import { Archivo } from "next/font/google";
import styles from "./photoSection.module.scss";
import ImageBlock from "./ImageBlock/ImageBlock";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Ball, Logo } from "@/app/images";

const font = Archivo({
  weight: "700",
  subsets: ["latin"],
});

const PhotoSection = () => {
  const { scrollYProgress } = useScroll();
  const yVal = useTransform(scrollYProgress, [0, 1], ["0px", "-700px"]);
  return (
    <div className={styles.homeImageWrapper}>
      <Image className={styles.ballImage} height={900} src={Ball} alt="Ball" />
      <motion.div className={styles.homeTitle} style={{ y: yVal }}>
        <h1 className={`${styles.title} ${font.className}`}>HOOPERS</h1>
        <Image className={styles.logoImage} src={Logo} alt="logo" />
      </motion.div>
    </div>
  );
};

export default PhotoSection;
