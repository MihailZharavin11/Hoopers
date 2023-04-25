"use client";
import React, { useState } from "react";
import styles from "./teamBlock.module.scss";
import { Lato } from "next/font/google";
import {
  ChicagoLogo,
  BrooklynLogo,
  GoldenStateLogo,
  HeatLogo,
  LakersLogo,
  BallLogo,
  ArrowLeft,
  ArrowRight,
  ArrowLeftDisable,
  ArrowRightDisable,
} from "@/app/images";
import TeamItem from "../TeamItem/TeamItem";
import Image from "next/image";

const teamTextFont = Lato({
  weight: "400",
  subsets: ["latin"],
});

export interface Team {
  description: string;
  logo: string;
}

const teams: Team[] = [
  {
    description: `The Chicago Bulls are an American professional basketball team based
    in Chicago. The Bulls compete in the National Basketball Association
    (NBA) as a member of the league's Eastern Conference Central Division.
    The team was founded on January 16, 1966, and played its first game
    during the 1966–67 NBA season.The Bulls play their home games at the
    United Center, an arena on Chicago's West Side.`,
    logo: LakersLogo,
  },
  {
    description: `The Chicago Bulls are an American professional basketball team based
    in Chicago. The Bulls compete in the National Basketball Association
    (NBA) as a member of the league's Eastern Conference Central Division.
    The team was founded on January 16, 1966, and played its first game
    during the 1966–67 NBA season.The Bulls play their home games at the
    United Center, an arena on Chicago's West Side.`,
    logo: BrooklynLogo,
  },
  {
    description: `The Chicago Bulls are an American professional basketball team based
    in Chicago. The Bulls compete in the National Basketball Association
    (NBA) as a member of the league's Eastern Conference Central Division.
    The team was founded on January 16, 1966, and played its first game
    during the 1966–67 NBA season.The Bulls play their home games at the
    United Center, an arena on Chicago's West Side.`,
    logo: HeatLogo,
  },
];

const TeamBlock = () => {
  const [currentTeam, setCurrentTeam] = useState(0);

  const clickRightArrow = () => {
    setCurrentTeam(currentTeam + 1);
  };

  const clickLeftArrow = () => {
    setCurrentTeam(currentTeam - 1);
  };

  return (
    <div className={styles.teamBlock}>
      {/* render previous team */}

      {currentTeam >= 1 && (
        <div className={styles.previousTeam}>
          <TeamItem logo={teams[currentTeam - 1].logo} />
        </div>
      )}

      {/* render current team */}

      <TeamItem
        logo={teams[currentTeam].logo}
        description={teams[currentTeam].description}
        currentTeam={currentTeam}
        clickLeftArrow={clickLeftArrow}
        clickRightArrow={clickRightArrow}
        teams={teams}
      />

      {/* render next team */}
      {currentTeam != teams.length - 1 && (
        <div className={styles.nextTeam}>
          <TeamItem logo={teams[currentTeam + 1].logo} />
        </div>
      )}
    </div>
  );
};

export default TeamBlock;
