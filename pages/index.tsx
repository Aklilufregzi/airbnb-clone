import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Banner } from "../components/Banner";
import Footer from "../components/Footer";
import { Header } from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

const Home: NextPage = ({ exploreData, cardsData }: any) => {
  return (
    <div>
      <Head>
        <title>Air bnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto">
        <section className="pt-6">
          <h1 className="text-4xl  font-semibold">Explore Nearby</h1>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ location, img, distance }: any) => (
              <SmallCard
                key={location}
                img={img}
                distance={distance}
                location={location}
              ></SmallCard>
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h1 className="text-4xl mb-4 font-semibold">Live Anywhere</h1>

          <div className=" flex space-x-3 overflow-scroll scrollbar-hide">
            {cardsData?.map(({ title, img }: any) => (
              <MediumCard key={title} img={img} title={title}></MediumCard>
            ))}
          </div>
        </section>

        <section className="py-2 max-w-7xl mx-auto">
          <LargeCard></LargeCard>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export async function getStaticProps() {
  const exploreData: any[] = await fetch(
    "https://www.jsonkeeper.com/b/4G1G"
  ).then((res) => res.json());

  const cardsData: any[] = await fetch(
    "https://www.jsonkeeper.com/b/VHHT"
  ).then((res) => res.json());

  console.log(exploreData);
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}

export default Home;
