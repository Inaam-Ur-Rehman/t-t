import React from "react";
import styles from "./clients.module.scss";

import Image from "next/image";
import Heet from "../../images/heet.png";
import Kee from "../../images/kee.png";
import Vibes from "../../images/vibes-2.png";
import Link from "next/link";
import Head from "next/head";

const Clients = () => {
  return (
    <>
      <Head>
        <title>Our Clients | T & T Marketing </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className={styles.clientInfo}>
        <div>
          <Image src={Heet} alt="Heet Logo" />
          <p>
            HEET Gaming is a premier gaming community that is dedicated to
            providing an exciting experience for gamers. HEET competes in
            numerous games at the highest levels, including being in the top 30
            world-wide in the game of Counter-Strike. Members are known for
            their competitive spirit and love of the game.
          </p>
          <Link className={`${styles.btn} button`} href="/clients/heet">
            Case Study
          </Link>
        </div>

        <div>
          <Image width="100%" src={Kee} alt="Keenetic Logo" />
          <p>
            Keenetic is an ambitious and innovative designer, developer &
            vendor, focused on Wi-Fi routers. They deliver commercially useful
            cutting-edge Wi-Fi router performance. Since 2010 several dozen
            models have been launched, and the number of users of the brand has
            exceeded seven million cross Europe.
          </p>
          <Link className={`${styles.btn} button`} href="/clients/keenetic">
            Case Study
          </Link>
        </div>
      </div>
      <div className={styles.clientInfoSecond}>
        <div>
          <Image
            src={Vibes}
            alt="Vibes Logo"
            style={{
              filter: "revert",
            }}
          />
          <p>
            Running Vibes is a Website for runners by runners.We believe fitness
            should be accessible to everyone, everywhere, regardless of income
            or access to a gym. With hundreds of professional workouts, healthy
            recipes and informative articles, as well as one of the most
            positive communities on the web, you’ll have everything you need to
            reach your personal fitness goals – for free!
          </p>
          <Link
            className={`${styles.btn} button`}
            target="_blank"
            href="https://running-vibes.vercel.app/"
          >
            Case Study
          </Link>
        </div>
      </div>
    </>
  );
};

export default Clients;
