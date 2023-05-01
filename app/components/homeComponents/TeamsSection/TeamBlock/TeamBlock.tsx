"use client";
import React, { useEffect, useState } from "react";
import styles from "./teamBlock.module.scss";
import {
  ChicagoLogo,
  CelticsLogo,
  NetsLogo,
  LakersLogo,
  MiamiLogo,
  GoldenStateLogo,
  ArrowRight,
  ArrowLeft,
} from "@/app/images";
import TeamItem from "../TeamItem/TeamItem";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Scrollbar } from "swiper";
import Image from "next/image";
import Arrow from "../Arrow/Arrow";

export interface Team {
  description: string;
  logo: string;
}

export const teams: Team[] = [
  {
    description: `The Los Angeles Lakers are an American professional basketball team based in Los Angeles. 
    The Lakers compete in the National Basketball Association (NBA), as a member of the league's Western Conference Pacific Division. 
    The Lakers play their home games at Crypto.com Arena, an arena shared with the NBA's Los Angeles Clippers, 
    the Los Angeles Sparks of the Women's National Basketball Association, 
    and the Los Angeles Kings of the National Hockey League.
    `,
    logo: LakersLogo,
  },
  {
    description: `The Brooklyn Nets are a professional basketball team based in the New York City borough of Brooklyn. 
    They are a member of the Atlantic Division of the Eastern Conference in the National Basketball Association (NBA). 
    The team is one of two NBA franchises that play home games in New York City; the other is the Knicks.`,
    logo: NetsLogo,
  },
  {
    description: `The Miami Heat are an American professional basketball team based in Miami, Florida. 
    They play in the National Basketball Association (NBA) as part of the league's Eastern Conference Southeast Division.
     The club plays its home games at Kaseya Center, and has won three NBA championships in 2006, 2012, and 2013.`,
    logo: MiamiLogo,
  },
  {
    description: `The Golden State Warriors an American professional basketball team based in San Francisco, California. 
    The Warriors compete in the National Basketball Association (NBA) as a member of the league's Western Conference Pacific Division.
     The Warriors play their home games at the Chase Center in San Francisco.`,
    logo: GoldenStateLogo,
  },
  {
    description: `The Chicago Bulls are an American professional basketball team based in Chicago, Illinois. 
    The Bulls compete in the National Basketball Association (NBA) as a member of the league's Eastern Conference Central Division. 
    The team was founded on January 16, 1966. The team plays its home games at the United Center, an arena shared with the Chicago Blackhawks of the National Hockey League (NHL).`,
    logo: ChicagoLogo,
  },
  {
    description: `The Boston Celtics are a National Basketball Association (NBA) team based in Boston, Massachusetts. 
    They play in the Atlantic Division of the Eastern Conference. Founded in 1946, the team is currently owned by Boston Basketball Partners LLC. 
    The Celtics play their home games at the TD Garden, which they share with the Nationl Hockey League's Boston Bruins. 
    The franchise's seventeen championships are the most for any NBA franchise. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a optio inventore deleniti accusamus quia eos, obcaecati, ex aliquid, ullam voluptatem temporibus eum facilis quibusdam illo modi doloribus impedit. Iste!
    Sed dolor repellendus optio corporis libero odio exercitationem sint sunt, atque iure ex rerum similique repellat quibusdam suscipit incidunt? Praesentium mollitia fuga quibusdam aspernatur molestias, reprehenderit rem unde facere ut?
    Eos, modi sit hic quas fugiat, sunt quasi natus velit rerum ipsam, id eum facilis aliquid laborum repellendus vel nihil exercitationem inventore eveniet ab quam doloremque nulla. Ea, dolor facilis.
    Quas, consequuntur voluptas dicta ea expedita labore fugit quos, enim, omnis quaerat modi asperiores rerum unde eos dolor ipsum saepe vitae cumque consequatur eius. Labore fugiat consequatur at veritatis ipsam?
    Neque doloremque quo, aliquam vel eos velit minima quos quibusdam doloribus? Facilis ratione eius unde sit perspiciatis? Quae eius ea repellat praesentium accusantium possimus blanditiis laborum incidunt pariatur ullam. Ab?
    Magni veritatis illum incidunt facere laudantium, assumenda ipsa quisquam sit vero nemo rerum harum omnis totam possimus molestiae blanditiis vel exercitationem? Ut, dolor et! Sunt quibusdam officia nostrum temporibus velit!
    Necessitatibus, et explicabo minus, dolorum impedit inventore pariatur assumenda sapiente recusandae ipsam aut! Nisi pariatur repellendus, fugiat nihil vitae facilis numquam nam, sunt nobis a, optio sint laborum inventore modi?
    Labore dicta, recusandae fuga aperiam placeat animi repudiandae vero eligendi laudantium aspernatur deserunt. Aliquam rerum impedit tenetur deserunt deleniti ipsa saepe animi, magnam excepturi, provident ullam delectus culpa nemo voluptate.
    Sed minima maxime mollitia nesciunt asperiores eveniet dolore sapiente, numquam obcaecati porro magni voluptates velit? Facere ex quos voluptas atque qui esse aspernatur et laboriosam, enim doloribus minus magni delectus!
    Sapiente, at ipsum necessitatibus dolorem dolor cum ab velit. Reiciendis, esse quae sed excepturi optio rerum eius nesciunt, obcaecati temporibus non commodi, ab qui rem maxime. Placeat quidem sunt inventore. `,
    logo: CelticsLogo,
  },
];

const TeamBlock = () => {
  const [isLoaded, setLoaded] = useState(false);
  const swipper = useSwiper();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {isLoaded && (
        <div className={styles.gamesWrapper}>
          <Swiper
            className={styles.swapper}
            modules={[Scrollbar]}
            slidesPerView={2.1}
            effect="fade"
            speed={500}
            centeredSlides
            scrollbar={{ draggable: true }}
          >
            <Arrow direction="left" />
            {teams.map((team) => (
              <SwiperSlide className={styles.box} key={team.description}>
                <TeamItem logo={team.logo} description={team.description} />
              </SwiperSlide>
            ))}
            <Arrow direction="right" />
          </Swiper>
        </div>
      )}
    </>
  );
};

export default TeamBlock;
