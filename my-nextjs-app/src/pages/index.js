import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({items}) {
  return (
    <>
      <Head>
        <title>Online Store</title>
        <meta name="description" content="Online Storefront" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.titleContainer}>
          Fake Products
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch('https://fakestoreapi.com/products');
  const items = await response.json();

  return {
    props: {
      items,
    },
  };
}