"use client";
import React from "react";
import styles from "./teamItem.module.scss";
import Image from "next/image";

interface TeamItemProps {
  src: string;
  name: string;
  win: number;
  lose: number;
}

const TeamItem: React.FC<TeamItemProps> = ({ src, name, win, lose }) => {
  return (
    <div className={styles.team}>
      <Image className={styles.teamImage} src={src} alt="TeamLakers" />
      <div className="infoTeam">
        <p className={styles.teamName}>{name}</p>
        <p className={styles.teamScore}>
          {win}-{lose}
        </p>
      </div>
    </div>
  );
};

export default TeamItem;
