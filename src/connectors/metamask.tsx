import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { ReactComponent as MetamaskSvg} from '../assets/metamask.svg'
import { Chain } from "wagmi";

type MetamaskConnectorArg = {
  chains?: Chain[];
};

export function metamaskConnector({ chains }: MetamaskConnectorArg) {
  return {
    connector: new MetaMaskConnector(),
    icon: <MetamaskSvg />,
  };
}