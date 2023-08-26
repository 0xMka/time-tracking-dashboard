"use client";
import s from "./page.module.css";
import { Profile } from "@/components/Profile/Profile";
import img from "@/assets/images/image-jeremy.png";
import { DashboardListItem } from "@/components/DashboardListItem/DashboardListItem";
import { useState } from "react";

export default function Home() {
  const [currentTimeframe, setCurrentTimeframe] = useState("Weekly");

  const setTimeframe = (timeframe) => {
    setCurrentTimeframe(timeframe);
  };
  return (
    <main className={s.main}>
      <Profile
        onItemClick={setTimeframe}
        userName="Jeremy Robson"
        imageProfile={img}
        currentTimeframe={currentTimeframe}
      />
      <DashboardListItem currentTimeframe={currentTimeframe} />
    </main>
  );
}
