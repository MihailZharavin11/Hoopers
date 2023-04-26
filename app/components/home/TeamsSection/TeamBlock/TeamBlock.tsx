"use client";
import React, { useState } from "react";
import styles from "./teamBlock.module.scss";
import {
  ChicagoLogo,
  CelticsLogo,
  NetsLogo,
  LakersLogo,
  MiamiLogo,
  GoldenStateLogo,
} from "@/app/images";
import TeamItem from "../TeamItem/TeamItem";

export interface Team {
  description: string;
  logo: string;
}

const teams: Team[] = [
  {
    description: `The Los Angeles Lakers are an American professional basketball team based in Los Angeles. 
    The Lakers compete in the National Basketball Association (NBA), as a member of the league's Western Conference Pacific Division. 
    The Lakers play their home games at Crypto.com Arena, an arena shared with the NBA's Los Angeles Clippers, 
    the Los Angeles Sparks of the Women's National Basketball Association, 
    and the Los Angeles Kings of the National Hockey League.
    `,
    logo: LakersLogo,
  },
  {
    description: `The Brooklyn Nets are a professional basketball team based in the New York City borough of Brooklyn. 
    They are a member of the Atlantic Division of the Eastern Conference in the National Basketball Association (NBA). 
    The team is one of two NBA franchises that play home games in New York City; the other is the Knicks.`,
    logo: NetsLogo,
  },
  {
    description: `The Miami Heat are an American professional basketball team based in Miami, Florida. 
    They play in the National Basketball Association (NBA) as part of the league's Eastern Conference Southeast Division.
     The club plays its home games at Kaseya Center, and has won three NBA championships in 2006, 2012, and 2013.`,
    logo: MiamiLogo,
  },
  {
    description: `The Golden State Warriors an American professional basketball team based in San Francisco, California. 
    The Warriors compete in the National Basketball Association (NBA) as a member of the league's Western Conference Pacific Division.
     The Warriors play their home games at the Chase Center in San Francisco.`,
    logo: GoldenStateLogo,
  },
  {
    description: `The Chicago Bulls are an American professional basketball team based in Chicago, Illinois. 
    The Bulls compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Central Division. 
    The team was founded on January 16, 1966. The team plays its home games at the United Center, an arena shared with the Chicago Blackhawks of the National Hockey League (NHL).`,
    logo: ChicagoLogo,
  },
  {
    description: `The Boston Celtics are a National Basketball Association (NBA) team based in Boston, Massachusetts. 
    They play in the Atlantic Division of the Eastern Conference. Founded in 1946, the team is currently owned by Boston Basketball Partners LLC. 
    The Celtics play their home games at the TD Garden, which they share with the Nationl Hockey League's Boston Bruins. 
    The franchise's seventeen championships are the most for any NBA franchise.`,
    logo: CelticsLogo,
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
