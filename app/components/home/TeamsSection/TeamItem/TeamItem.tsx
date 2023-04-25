"use client";
import React, { ReactElement, useState } from "react";
import styles from "./teamItem.module.scss";
import { Lato } from "next/font/google";
import { ArrowLeft, ArrowRight, BallLogo } from "@/app/images";
import Image from "next/image";
import { Team } from "../TeamBlock/TeamBlock";

const teamTextFont = Lato({
  weight: "400",
  subsets: ["latin"],
});

interface TeamItemProps {
  logo: string;
  currentTeam?: number;
  description?: string;
  clickLeftArrow?: () => void;
  clickRightArrow?: () => void;
  teams?: Team[];
}

const TeamItem: React.FC<TeamItemProps> = ({
  logo,
  description,
  currentTeam,
  clickLeftArrow,
  clickRightArrow,
  teams,
}) => {
  return (
    <div className={styles.teamItem}>
      <div className={styles.imageBlock}>
        <Image className={styles.brooklynLogo} src={logo} alt="BrooklynLogo" />
        <Image
          className={styles.ballLogo}
          height={556}
          width={556}
          src={BallLogo}
          alt="BallLogo"
        />
      </div>
      {description && teams && (
        <div className={styles.teamDescription}>
          {/* render left arrow */}
          {currentTeam != 0 && (
            <Image
              className={`${styles.arrowLeft} ${styles.arrow}`}
              src={ArrowLeft}
              alt={"Arrow Left"}
              onClick={clickLeftArrow}
            />
          )}
          <p className={`${styles.teamText} ${teamTextFont.className}`}>
            {description}
          </p>
          {/* render Right arrow */}
          {currentTeam !== teams.length - 1 && (
            <Image
              className={`${styles.arrowRight} ${styles.arrow}`}
              src={ArrowRight}
              alt={"Arrow right"}
              onClick={clickRightArrow}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TeamItem;
