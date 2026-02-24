"use client"
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./background.module.css";

export default function Background() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.fondo}>
          <div className={styles.texture}>
          </div>
        </div>
      </div>
    );
  }

