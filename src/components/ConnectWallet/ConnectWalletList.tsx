import React, { useContext } from "react";
import { Box, ConnectWalletBtn } from "./ConnectWallet.styles";
import { Connector, useAccount, useDisconnect } from "wagmi";
import { ConnectorContext } from "../MyConnectorProvider";

type ConnectWalletListProps = {
    connect: any
}

export function ConnetWalletList({connect}: ConnectWalletListProps): React.ReactElement {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const context = useContext(ConnectorContext);

  function onConnectWallet(
    icon: React.ReactElement,
    connector: Connector<any, any, any>
  ) {
    context?.setIcon(icon);
    if(address) disconnect()
    connect({ connector });
  }

  return (
    <>
      {(context?.connectors || []).map((elem, i) => (
        <div key={elem.name || elem.connector.name}>
          <ConnectWalletBtn
            onClick={() => onConnectWallet(elem.icon, elem.connector)}
          >
            <Box display="flex" align="center">
              {elem.icon}
              <span>{elem.name || elem.connector.name}</span>
            </Box>
          </ConnectWalletBtn>
        </div>
      ))}
      {address && <button onClick={() => disconnect()}>disconnect</button>}
    </>
  );
}
