import { useState, useEffect } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const vedlikehold = true;
  const [dusjenKoster, settDusjenKoster] = useState(undefined);
  const KWh_forEnDusj = 6.5;
  const nettleie = 0.5;

  const [dusjteller, settDusjteller] = useState(0);
  const [brukDusjteller, settBrukDusjteller] = useState(false);

  useEffect(() => {
    const idag = new Date();
    const dato = idag.toISOString().substr(0, 10);
    const time = ("0" + idag.getHours()).slice(-2);
    fetch(
      `https://norway-power.ffail.win/?zone=NO1&date=${idag
        .toISOString()
        .substr(0, 10)}`
    )
      .then(response => response.json())
      .then(data => {
        const timekey = dato + "T" + time + ":00:00+01:00";
        const timespris = data[timekey];

        settDusjenKoster(
          timespris.NOK_per_kWh * KWh_forEnDusj + KWh_forEnDusj * nettleie
        );
      });
  }, []);

  const oppdaterDusjTeller = () => {
    setTimeout(() => {
      settDusjteller(dusjteller + 1);

      if (brukDusjteller) {
        oppdaterDusjTeller();
      } else {
        settDusjteller(0);
      }
    }, 1000);
  };

  useEffect(() => {
    oppdaterDusjTeller();
  }, []);

  const beregnDusjtellerIKroner = () => {
    const dusjPerSekund = dusjenKoster / 10 / 60;
    return dusjPerSekund * dusjteller;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Hva koster en dusj?`}</title>
        <meta name="description" content="Hva koster en dusj?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {dusjenKoster ? (
          brukDusjteller ? (
            <h1
              className={styles.title}
              onClick={() => settBrukDusjteller(!brukDusjteller)}
            >{`Du har brukt ${beregnDusjtellerIKroner().toLocaleString(
              "no-NO"
            )} kr på å dusje`}</h1>
          ) : (
            <h1
              className={styles.title}
              onClick={() => settBrukDusjteller(!brukDusjteller)}
            >{`Dusjen koster ${dusjenKoster.toLocaleString(
              "no-NO"
            )} kr på østlandet (NO1)`}</h1>
          )
        ) : (
          <h1 className={styles.title}>Klarer ikke å beregne dusjpris</h1>
        )}
        <p>
          Se{" "}
          <a
            href={
              "https://www.nordpoolgroup.com/the-power-market/Bidding-areas"
            }
          >
            her
          </a>{" "}
          for informasjon om soner.
        </p>
      </main>
      <footer>
        Powered by <a href={"https://github.com/henninghaakonsen"}>Henning</a>
        <br />
        {`Basert på ${KWh_forEnDusj} KWh per dusj og ${nettleie.toLocaleString(
          "no-NO"
        )} kr per KWh i nettleie`}
      </footer>
    </div>
  );
}
