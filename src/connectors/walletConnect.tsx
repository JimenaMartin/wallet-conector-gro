import { Chain } from "wagmi";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { ReactComponent as WalletConnectSvg} from '../assets/walletconnect.svg'

type WalletConnectorArg = {
    chains?: Chain[],
    projectId: string
}


export function walletConnectConnector({ chains, projectId }: WalletConnectorArg) {
  return {
    connector: new WalletConnectConnector({
      chains,
      options: {
        projectId,
      },
    }),
    icon: <WalletConnectSvg />,
  };
}
