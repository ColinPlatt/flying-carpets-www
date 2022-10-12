//import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {motion} from 'framer-motion';
import {Layout} from '../components/layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 2.0
          }
        },
      }}>
        <div className={styles.container}>
          <Head>
            <title>Flying Rugs 🧞</title>
            <meta
              name="Magic Flying Rugs Tokens"
              content="An experimental crypto art project, in conjunction with Rug Research"
            />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.ico" />
          </Head>

          <main className={styles.main}>          
            
            <h1 className={styles.title}>
              Welcome to <a href="">Flying Rugs</a> {' '}
            </h1>


            <p className={styles.description}>
              An experimental crypto art project.
            </p>

          </main>
        </div>
      </motion.div>
    </Layout>
  );
};

export default Home;
