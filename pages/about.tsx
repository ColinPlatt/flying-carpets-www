import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Warp 💫</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: 12,
          }}
        >
          <ConnectButton />
        </div>
        

        <h1 className={styles.title}>
          WTF is <a href="/">Warp</a>? {' '}
        </h1>

        <a>
          <h2>Warp is an "ephemeral token", which can be moved to a new token iteration once per month. </h2>
          <p>Each time the token moves to a new iteration, it removes all its liquidity from Uniswap, and moves it to the newest iteration.
             Users holding the last valid iteration of warp are eligible to claim the latest version. Holders who don't claim in the latest iteration are not eligible to claim the subsequent iteration.</p>
          <h2>Launch</h2>
          <p>Everything about warp is different from a normal token, in fact, no one even knows who will launch it, or if it it will launch.</p>
          <p>A special contract, titled "click_to_start_mayhem" has been created, anyone who knows the compiled bytecode for the initial warp token (warp0) can deploy the token and special helper contract.</p>
          <p>A total maximum supply of 100 million warp0 tokens will be available, if deployed.</p>
          <p>If launched, warp0, allows <a href="https://sudorugs.netlify.app/">SudoRugs NFT</a> holders to claim 33.3k warp tokens, during the one week period after warp0 is launched.</p>
          <p>Up to half of the supply (50m) is available for <a href="claim">claim with ETH</a> at the price of 0.000000000005 per warp token. Raising up to 10 ETH, which will be used to seed the initial liquidity pool.</p>
          <p>warp0 tokens are non transferrable until after one week, and after liquidity from ETH used to claim warp0 tokens, which launches the first iteration (warp1) tokens, which must be claimed by warp0 token holders before the iteration to warp2 tokens.</p>
          <p>The monthly iteration aspect makes warp potentially highly deflationary, with users ignoring iterations losing their ability to make later claims.</p>
          
        </a>
          
      </main>

      <footer className={styles.footer}>
        <a href="http://www.rugresearch.wtf/" target="_blank" rel="noopener noreferrer">
          Made in 🤝 with Rug Research
        </a>
      </footer>
    </div>
  );
};

export default About;
