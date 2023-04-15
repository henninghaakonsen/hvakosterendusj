const KWh_forEnDusj = 6.5;
const nettleie = 0.5;
async function getShowerPrice() {
  const idag = new Date();
  const dato = idag.toISOString().substring(0, 10);
  const time = ('0' + idag.getHours()).slice(-2);
  const dusjenKoster = await fetch(
    'https://us-central1-hvakosterendusj-backend.cloudfunctions.net/hent_dagens_strompriser',
    { next: { revalidate: 60 } }
  )
    .then((response) => response.json())
    .then((data) => {
      const timekeyVintertid = dato + 'T' + time + ':00:00+01:00';
      const timekeySommertid = dato + 'T' + time + ':00:00+02:00';
      const timespris = data[timekeyVintertid] ?? data[timekeySommertid];

      return timespris.NOK_per_kWh * KWh_forEnDusj + KWh_forEnDusj * nettleie;
    });

  return dusjenKoster;
}

export default async function Home() {
  const dusjenKoster = await getShowerPrice();

  return (
    <div className="px-8">
      <main className="flex flex-col items-center justify-center py-16 min-h-[94vh]">
        <h1 className="text-4xl md:text-7xl leading-6">{`Dusjen koster ${dusjenKoster
          .toFixed(2)
          .toLocaleString()} kr på østlandet (NO1)`}</h1>
        <p>
          Se{' '}
          <a
            className="text-blue-800 hover:underline"
            href={
              'https://www.nordpoolgroup.com/en/Market-data1/#/nordic/table'
            }
          >
            her
          </a>{' '}
          for informasjon om soner.
        </p>
      </main>
      <footer className="mt-auto">
        Laget av <a href={'https://github.com/henninghaakonsen'}>Henning</a>
        <br />
        {`Basert på ${KWh_forEnDusj} KWh per dusj og ${nettleie.toLocaleString(
          'no-NO'
        )} kr per KWh i nettleie`}
      </footer>
    </div>
  );
}
