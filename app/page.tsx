import Image from "next/image";
import { Inter } from "next/font/google";
import GameSection from "./components/home/GamesSection/GameSection";
import PhotoSection from "./components/home/PhotoSection/PhotoSection";
import PlayersSection from "./components/home/PlayersSection/PlayersSection";
import TeamsSection from "./components/home/TeamsSection/TeamsSection";

export default function Home() {
  return (
    <div>
      <PhotoSection />
      <GameSection />
      <PlayersSection />
      <TeamsSection />
    </div>
  );
}
