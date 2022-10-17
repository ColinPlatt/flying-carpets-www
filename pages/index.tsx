import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
//import { Layout } from '../components/layout/Layout';
import {useAccount} from 'wagmi'



import { getRugsBalance }  from "../components/Rugs/rugs";

import Carpet from "../components/Carpet/Carpet";
import { typography } from '@chakra-ui/react';



const Home: NextPage = () => {
  const {address, isConnected } = useAccount();

  console.log(address)
  
  if(typeof address === 'string') {
    const balance = getRugsBalance(address);
  
    return (
      
        <div className={styles.container}>
          <Head>
            <title>Flying Rugs 🧞</title>
            <meta
              name="Magic Flying Rugs Tokens"
              content="An experimental crypto art project, in conjunction with Rug Research"
            />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.ico" />
          </Head>
          <div>
            checking
            {isConnected}
            {balance}
          </div>

          <div>
          <ConnectButton 
                    label='Get Rugged'
                    accountStatus='address'
                    chainStatus='none'
                  />
          </div>
          <div className={styles.scene}>
            <Carpet/>
          </div>
        </div>
    );
  } else {
    console.log("undefined address")
    return <div>undefined address 1</div>
  }
};

export default Home;
