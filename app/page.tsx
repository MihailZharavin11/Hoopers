import Image from "next/image";
import { Inter } from "next/font/google";
import GameSection from "./components/homeComponents/GamesSection/GameSection";
import PhotoSection from "./components/homeComponents/PhotoSection/PhotoSection";
import PlayersSection from "./components/homeComponents/PlayersSection/PlayersSection";
import TeamsSection from "./components/homeComponents/TeamsSection/TeamsSection";

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
