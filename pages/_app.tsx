import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import merge from 'lodash.merge';
import { RainbowKitProvider, lightTheme, Theme, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.goerli,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [chain.goerli, chain.sepolia]
      : []),
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: '_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC',
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Carpet App',
  chains,
});

const customTheme = merge(lightTheme(), {
  colors: {
    accentColor: 'LightPink',
    accentColorForeground: '#0d76fc',
    actionButtonSecondaryBackground: 'LightPink',
    modalBackground: 'LightPink',
    menuItemBackground: 'LightPink',
    closeButtonBackground: 'LightPink',
    connectButtonBackground: 'LightPink',
    downloadBottomCardBackground: 'LightPink',
    downloadTopCardBackground: 'LightPink',
  },
  fonts: {
    body: 'aladdin',
  },
} as Theme);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function CarpetApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        chains={chains}
        theme={customTheme} 
        >
        <Component {...pageProps} />
        <style global jsx>{`
          body {
            background: LightSkyBlue;
          }
        `}</style>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default CarpetApp;
