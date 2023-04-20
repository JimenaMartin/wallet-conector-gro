import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { ConnectWallet } from './components/ConnectWallet/ConnectWallet';
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { LedgerConnector } from "wagmi/connectors/ledger";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { MyConnectorProvider } from './components/MyConnectorProvider';
import { metamaskConnector } from './connectors/metamask';
import { walletConnectConnector } from './connectors/walletConnect';
import { infuraProvider } from "wagmi/providers/infura";
import GlobalStyle from './theme/globalStyles';
import { coinbaseConnector } from './connectors/coinbase';
import { injectedConnector } from './connectors/injected';
import { Box } from './components/ConnectWallet/ConnectWallet.styles';
import { Account } from './components/Account/Account';

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [infuraProvider({ apiKey: "9aa3d95b3bc440fa88ea12eaa4456161" })]
);

const client = createClient({
  provider,
  webSocketProvider,
});

const context = {
  connectors: [
    injectedConnector({ chains }),
    metamaskConnector({ chains }),
    coinbaseConnector({ chains }),
    walletConnectConnector({
      chains,
      projectId: "e7009b28df3ff8b20f0e1678f2d4c702",
    }),
  ],
};

function App() {
  return (
    <MyConnectorProvider context={context}>
      <WagmiConfig client={client}>
      <GlobalStyle />
      <Box display="flex">
        <Box margin="0 30px 0 0">
        <ConnectWallet />

        </Box>
        <Account />
      </Box>
      </WagmiConfig>
    </MyConnectorProvider>
  );
}

export default App;
