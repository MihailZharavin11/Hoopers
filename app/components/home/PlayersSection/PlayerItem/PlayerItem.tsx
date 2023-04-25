"use client";
import { motion } from "framer-motion";
import React, { FC } from "react";
import styles from "./playerItem.module.scss";
import Image from "next/image";

interface PlayerItemProps {
  src: string;
  name: string;
  team: string;
  gradient: "blue" | "purple" | "yellow" | "pink" | "green";
}

export const PlayerItem: FC<PlayerItemProps> = ({
  src,
  name,
  team,
  gradient,
}) => {
  const gradientSelect = {
    blue: "linear-gradient(180deg, #C9F5FF 0%, #E2E2E2 100%)",
    purple: "linear-gradient(180deg, #C9D6FF 0%, #E2E2E2 100%)",
    yellow: "linear-gradient(180deg, #FFEEEE 0%, #DDEFBB 100%)",
    pink: "linear-gradient(180deg, #D9A7C7 0%, #FFFCDC 100%)",
    green: "linear-gradient(180deg, #D7FFC9 0%, #E2E2E2 100%)",
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        transition: {
          type: "spring",
        },
      }}
      style={{
        background: gradientSelect[gradient],
        backgroundSize: "400%",
      }}
      className={styles.player}
    >
      <div className={styles.gradient} />
      <div className={styles.playerImage}>
        <Image src={src} alt={name} />
      </div>
      <div className={styles.text}>
        <p className={styles.textName}>{name}</p>
        <p className={styles.textTeam}>player for the {team}</p>
      </div>
    </motion.div>
  );
};
