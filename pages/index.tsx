//import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';


import { Canvas } from "@react-three/fiber";

import Carpet from "../components/Carpet/Carpet";


const Home: NextPage = () => {
  return (
    <Layout>      
      <div className={styles.container}>
        <Head>
          <title>Flying Rugs 🧞</title>
          <meta
            name="Magic Flying Rugs Tokens"
            content="An experimental crypto art project, in conjunction with Rug Research"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.ico" />
        </Head>
        <div className={styles.scene}>
          <Carpet />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
