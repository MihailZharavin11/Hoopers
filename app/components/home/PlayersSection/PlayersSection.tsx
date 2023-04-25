"use client";
import React, { useRef } from "react";
import { HomeButton } from "../HomeButton/HomeButton";
import HomeTitle from "../HomeTitle/HomeTitle";
import styles from "./playerSection.module.scss";
import {
  IrvingItem,
  KobeItem,
  LebronItem,
  RoseItem,
  DeRozanItem,
  HardenItem,
} from "@/app/images";
import { PlayerItem } from "./PlayerItem/PlayerItem";
import { motion, useInView } from "framer-motion";

const PlayersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className={styles.playersSection}>
      <HomeTitle
        title="Players"
        text="follow the game you are interested in, track the results at any time"
      />
      <motion.div
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 2s ease",
        }}
        className={styles.boxPlayersWrapper}
      >
        <PlayerItem
          src={IrvingItem}
          name="Kyrie Irving"
          team="Brooklyn Net's"
          gradient={"blue"}
        />
        <PlayerItem
          src={KobeItem}
          name="Kobe Bryant"
          team="Lakers"
          gradient="yellow"
        />
        <PlayerItem
          src={LebronItem}
          name="Lebron James"
          team="Lakers"
          gradient="yellow"
        />
        <PlayerItem
          src={RoseItem}
          name="Derrick Rose"
          team="New York Knicks"
          gradient="purple"
        />
        <PlayerItem
          src={DeRozanItem}
          name="Demar DeRozan"
          team="Chicago Bulls"
          gradient="green"
        />
        <PlayerItem
          src={HardenItem}
          name="James Harden"
          team="Philadelphia 76ers"
          gradient="blue"
        />
      </motion.div>
      <motion.div ref={ref} className="pointToShow"></motion.div>
      <HomeButton />
    </div>
  );
};

export default PlayersSection;
