import { Chain } from "wagmi";
import { ReactComponent as CoinbaseIcon } from "../assets/coinbase.svg";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";


type CoinbaseConnectorArg = {
  chains?: Chain[];
};


export function coinbaseConnector({ chains }: CoinbaseConnectorArg) {
  return {
    connector: new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "my app",
        jsonRpcUrl:
          "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      },
    }),
    icon: <CoinbaseIcon />,
  };
}
