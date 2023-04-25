"use client";
import { motion } from "framer-motion";
import React from "react";
import styles from "./burgerMenu.module.scss";
import { navigationList } from "@/app/utils/data";

interface BurgerMenuProps {
  handleBurgerMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ handleBurgerMenu }) => {
  return (
    <motion.div
      onClick={() => {
        handleBurgerMenu();
      }}
      className={styles.container}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.5,
        }}
        className={styles.blur}
      />
      <motion.nav
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        exit={{ x: 1000 }}
        transition={{ duration: 0.5 }}
        className={styles.menuWrapper}
      >
        <motion.ul
          onClick={(e) => e.stopPropagation()}
          className={styles.listMenu}
        >
          {navigationList.map((navElement, index) => (
            <li key={index} onClick={handleBurgerMenu}>
              {navElement}
            </li>
          ))}
        </motion.ul>
      </motion.nav>
    </motion.div>
  );
};

export default BurgerMenu;
