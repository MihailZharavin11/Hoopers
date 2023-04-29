"use client";
import Image from "next/image";
import React from "react";
import styles from "./arrow.module.scss";
import { ArrowLeft, ArrowRight } from "@/app/images";
import { useSwiper, useSwiperSlide } from "swiper/react";

interface ArrowProps {
  direction: "left" | "right";
}

const Arrow: React.FC<ArrowProps> = ({ direction }) => {
  const swiper = useSwiper();

  const handleClickLeftArrow = () => {
    swiper.slidePrev();
  };

  const handleClickRightArrow = () => {
    swiper.slideNext();
  };
  return (
    <>
      {direction === "left" && (
        <Image
          className={`${styles.arrowLeft} ${styles.arrow}`}
          src={ArrowLeft}
          alt={"Arrow Left"}
          onClick={handleClickLeftArrow}
        />
      )}
      {direction === "right" && (
        <Image
          className={`${styles.arrowRight} ${styles.arrow}`}
          src={ArrowRight}
          alt={"Arrow Right"}
          onClick={handleClickRightArrow}
        />
      )}
    </>
  );
};

export default Arrow;
