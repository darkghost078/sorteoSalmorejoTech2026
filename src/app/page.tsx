"use client";
import FindUs from "@/app/components/findUs/findUs";
import Navbar from "@/app/components/navbar/navbar";
import Body from "@/app/components/body/body";
import Footer from "@/app/components/footer/footer";
import Timetable from "@/app/components/Timetable/Timetable";
import Cards from "@/app/components/Cards/Cards"


import { motion } from "framer-motion";
import { useState } from "react";
import { SponsorProps } from '../app/components/Sponsors'
import sponsors from '@/data/sponsors.json'
import { SponsorsGrid } from '@/app/components/Sponsors/grid'


export default function Home() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  return (
    <div className="relative" style={{ minHeight: "100vh" }}>
      <Cards/>
    </div>
  );
}
