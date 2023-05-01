"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import HomeTitle from "../../Title/Title";
import styles from "./gameSection.module.scss";
import { ScoreTable } from "./ScoreTable/ScoreTable";
import TeamItem from "./TeamScore/TeamScore";
import {
  Lakers,
  Miami,
  Raptors,
  Celtics,
  Clevland,
  ChicagoBulls,
  Brooklyn,
  GoldenState,
} from "@/app/images";
import { HomeButton } from "../HomeButton/HomeButton";
const GameSection = () => {
  const { scrollYProgress } = useScroll();
  const yVal = useTransform(scrollYProgress, [0, 1], ["-1000px", "1370px"]);
  const yVal2 = useTransform(scrollYProgress, [0, 1], ["500px", "-1000px"]);

  return (
    <div className={styles.gamesSection}>
      <HomeTitle
        title="Games"
        text="follow the game you are interested in, track the results at any time"
      />
      <div className={styles.boxGamesWrapper}>
        <motion.div style={{ x: yVal }} className={styles.boxGames}>
          <ScoreTable
            team1={<TeamItem src={Lakers} name="Lakers" lose={41} win={32} />}
            score1={114}
            score2={102}
            team2={<TeamItem src={Miami} name="Miami" lose={41} win={32} />}
          />
          <ScoreTable
            team1={<TeamItem src={Raptors} name="Raptors" lose={41} win={32} />}
            score1={98}
            score2={121}
            team2={<TeamItem src={Celtics} name="Celtics" lose={41} win={32} />}
          />
          <ScoreTable
            team1={
              <TeamItem
                src={ChicagoBulls}
                name="Chicago Bulls"
                lose={41}
                win={32}
              />
            }
            score1={101}
            score2={112}
            team2={
              <TeamItem src={Brooklyn} name="Brooklyn" lose={41} win={32} />
            }
          />
          <ScoreTable
            team1={
              <TeamItem
                src={GoldenState}
                name="Golden State"
                lose={41}
                win={32}
              />
            }
            score1={110}
            score2={98}
            team2={
              <TeamItem src={Clevland} name="Clevland" lose={41} win={32} />
            }
          />
        </motion.div>
        <motion.div style={{ x: yVal2 }} className={styles.boxGames}>
          <ScoreTable
            team1={
              <TeamItem
                src={ChicagoBulls}
                name="Chicago Bulls"
                lose={41}
                win={32}
              />
            }
            score1={92}
            score2={105}
            team2={<TeamItem src={Miami} name="Miami" lose={41} win={32} />}
          />
          <ScoreTable
            team1={
              <TeamItem
                src={GoldenState}
                name="Golden State"
                lose={41}
                win={32}
              />
            }
            score1={115}
            score2={113}
            team2={<TeamItem src={Lakers} name="Lakers" lose={41} win={32} />}
          />
          <ScoreTable
            team1={<TeamItem src={Raptors} name="Raptors" lose={41} win={32} />}
            score1={120}
            score2={126}
            team2={
              <TeamItem src={Brooklyn} name="Brooklyn" lose={41} win={32} />
            }
          />
          <ScoreTable
            team1={
              <TeamItem src={Clevland} name="Clevland" lose={41} win={32} />
            }
            score1={101}
            score2={90}
            team2={<TeamItem src={Celtics} name="Celtics" lose={41} win={32} />}
          />
        </motion.div>
      </div>
      <HomeButton title="View more" />
    </div>
  );
};

export default GameSection;
