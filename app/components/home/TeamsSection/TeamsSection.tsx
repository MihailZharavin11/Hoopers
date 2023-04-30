"use client";
import React from "react";
import styles from "./teamsSection.module.scss";
import HomeTitle from "../HomeTitle/HomeTitle";
import TeamBlock from "./TeamBlock/TeamBlock";
import { HomeButton } from "../HomeButton/HomeButton";

const TeamsSection = () => {
  return (
    <div className={styles.teamsSection}>
      <HomeTitle
        title="TEAMS"
        text="follow the game you are interested in, track the results at any time"
      />
      <TeamBlock />

      <HomeButton title="View all" />
    </div>
  );
};

export default TeamsSection;
