"use client";
import React, { FC } from "react";
import styles from "./scoreTable.module.scss";

interface ScoreTableProps {
  team1: React.ReactNode;
  team2: React.ReactNode;
  score1: number;
  score2: number;
}

export const ScoreTable: FC<ScoreTableProps> = ({
  team1,
  team2,
  score1,
  score2,
}) => {
  return (
    <div className={styles.scoreTable}>
      <div className={styles.infoTeam}>
        {team1}
        <span className={styles.score}>{score1}</span>
      </div>
      <div className={styles.infoTeam}>
        <span className={styles.score}>{score2}</span>
        {team2}
      </div>
    </div>
  );
};
