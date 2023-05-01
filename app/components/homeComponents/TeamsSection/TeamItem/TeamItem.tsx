"use client";
import React, { ReactElement, useState } from "react";
import styles from "./teamItem.module.scss";
import { Lato } from "next/font/google";
import { BallLogo } from "@/app/images";
import Image from "next/image";
import { Team } from "../TeamBlock/TeamBlock";
import { AnimatePresence, motion } from "framer-motion";
import { useSwiperSlide } from "swiper/react";
const teamTextFont = Lato({
  weight: "400",
  subsets: ["latin"],
});

interface TeamItemProps {
  logo: string;
  description?: string;
}

const TeamItem: React.FC<TeamItemProps> = ({ logo, description }) => {
  const swiperSlide = useSwiperSlide();
  return (
    <div
      className={`${styles.teamItem} ${
        swiperSlide.isActive ? styles.active : styles.disable
      }`}
    >
      <div className={styles.imageBlock}>
        <Image className={styles.teamLogo} src={logo} alt="TeamLogo" />
        <Image
          className={styles.ballLogo}
          height={556}
          width={556}
          src={BallLogo}
          alt="BallLogo"
        />
      </div>
      {description && swiperSlide.isActive && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className={styles.teamDescription}
        >
          <p className={`${styles.teamText} ${teamTextFont.className}`}>
            {description}
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default TeamItem;
