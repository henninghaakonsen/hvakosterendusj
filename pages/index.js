import { useState, useRef } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

const KWh_forEnDusj = 6.5;
const nettleie = 0.5;

export const getServerSideProps = async () => {
  const idag = new Date();
  const dato = idag.toISOString().substring(0, 10);
  const time = ("0" + idag.getHours()).slice(-2);
  const dusjenKoster = await fetch(
    "https://us-central1-hvakosterendusj-backend.cloudfunctions.net/hent_dagens_strompriser"
  )
    .then((response) => response.json())
    .then((data) => {
      const timekey = dato + "T" + time + ":00:00+01:00";
      const timespris = data[timekey];

      return timespris.NOK_per_kWh * KWh_forEnDusj + KWh_forEnDusj * nettleie;
    });

  return {
    props: {
      dusjenKoster,
    },
  };
};

export default function Home({ dusjenKoster }) {
  const [dusjteller, settDusjteller] = useState(1);
  const [brukDusjteller, settBrukDusjteller] = useState(false);

  const timer = useRef(null);
  const startStopTimer = () => {
    if (!timer.current) {
      settBrukDusjteller(true);
      timer.current = setInterval(() => {
        settDusjteller((prevstate) => prevstate + 1);
      }, 1000);
    } else {
      settBrukDusjteller(false);
      settDusjteller(0);
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  const beregnDusjtellerIKroner = () => {
    const dusjPerSekund = dusjenKoster / 10 / 60;
    return (dusjPerSekund * dusjteller).toFixed(2);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Hva koster en dusj?`}</title>
        <meta name="description" content="Hva koster en dusj?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {dusjenKoster &&
          (brukDusjteller ? (
            <h1
              className={styles.title}
              onClick={startStopTimer}
            >{`Du har brukt ${beregnDusjtellerIKroner().toLocaleString(
              "no-NO"
            )} kr på å dusje i ${
              dusjteller < 60
                ? `${dusjteller} sekunder`
                : `${Math.round(dusjteller / 60)} minutter`
            }`}</h1>
          ) : (
            <h1
              className={styles.title}
              onClick={startStopTimer}
            >{`Dusjen koster ${dusjenKoster
              .toFixed(2)
              .toLocaleString("no-NO")} kr på østlandet (NO1)`}</h1>
          ))}
        <p>
          Se{" "}
          <a
            href={
              "https://www.nordpoolgroup.com/en/Market-data1/#/nordic/table"
            }
          >
            her
          </a>{" "}
          for informasjon om soner.
        </p>
      </main>
      <footer>
        Laget av <a href={"https://github.com/henninghaakonsen"}>Henning</a>
        <br />
        {`Basert på ${KWh_forEnDusj} KWh per dusj og ${nettleie.toLocaleString(
          "no-NO"
        )} kr per KWh i nettleie`}
      </footer>
    </div>
  );
}
