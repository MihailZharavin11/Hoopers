import React from "react";
import styles from "./teamLogo.module.scss";
import Image from "next/image";

type TeamLogoProps = {
  imageSrc: string;
  alt: string;
};

export const TeamLogo: React.FC<TeamLogoProps> = ({ imageSrc, alt }) => {
  return (
    <div className={styles.teamLogo}>
      <Image className={styles.teamLogoImage} src={imageSrc} alt={alt} />
    </div>
  );
};
