"use client";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import styles from "./navigation.module.scss";
import Link from "next/link";
import { navigationList } from "@/app/utils/data";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Lato } from "next/font/google";

const fontHeader = Lato({
  weight: "400",
  subsets: ["latin"],
});

export const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleBurgerMenu = () => {
    if (activeMenu) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }

    setActiveMenu((prev) => !prev);
  };

  return (
    <div className={styles.navigationWrapper}>
      <nav>
        <ul className={styles.navigationList}>
          {navigationList.map((navElement, index) => (
            <Link
              className={`${styles.linkNav} ${fontHeader.className}`}
              href={navElement.toLocaleLowerCase()}
              key={index}
            >
              <li>{navElement}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <nav>
        <div
          onClick={() => {
            handleBurgerMenu();
          }}
          className={styles.navigationBtn}
        >
          <span></span>
        </div>
      </nav>
      <AnimatePresence>
        {activeMenu && <BurgerMenu handleBurgerMenu={handleBurgerMenu} />}
      </AnimatePresence>
    </div>
  );
};
