"use client";
import React, { useEffect, useState } from "react";
import styles from "./games.module.scss";
import { teams } from "../components/home/TeamsSection/TeamBlock/TeamBlock";
import TeamItem from "../components/home/TeamsSection/TeamItem/TeamItem";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "../images";
import Title from "../components/Title/Title";
const Games = () => {
  return (
    <div className={styles.gamesWrapper}>
      <div className={styles.gameTitle}>
        <Title title="Games" />
      </div>
    </div>
  );
};

export default Games;
