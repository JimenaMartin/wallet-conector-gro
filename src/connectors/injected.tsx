import { InjectedConnector } from "wagmi/connectors/injected";
import { ReactComponent as InjectedIcon } from '../assets/injected.svg'
import { Chain } from "wagmi";

type InjectedConnectorArg = {
  chains?: Chain[];
};


export function injectedConnector({ chains }: InjectedConnectorArg) {
  return {
    connector: new InjectedConnector({ chains }),
    icon: <InjectedIcon />,
    name: "Browser Wallet",
  };
}