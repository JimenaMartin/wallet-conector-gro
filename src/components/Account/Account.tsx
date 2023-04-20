import React, { useEffect, useContext } from "react";

import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
  useEnsName,
} from "wagmi";

import { ConnectorContext } from "../MyConnectorProvider";
import {
  Wrapper,
  Title,
  Box,
  ConnectWalletBtn,
  BigTitle,
  Text,
} from "../ConnectWallet/ConnectWallet.styles";
import { ReactComponent as BackIcon } from "../../assets/back.svg";
import { ReactComponent as CrossIcon } from "../../assets/cross.svg";
import { ReactComponent as CopyIcon } from "../../assets/copy.svg";
import { ReactComponent as OpenIcon } from "../../assets/open.svg";
import { ReactComponent as DisconnectIcon } from "../../assets/disconnect.svg";
import { ReactComponent as ChangeIcon } from "../../assets/change.svg";

import { Avatar } from "./Account.styles";

type ConnectWalletProps = {};

export function Account(): React.ReactElement {
  const { connect, reset, status } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const context = useContext(ConnectorContext);
  const { data } = useEnsName({ address });

  console.log(data, address);

  useEffect(() => {}, []);

  function onConnectWallet(
    icon: React.ReactElement,
    connector: Connector<any, any, any>
  ) {
    context?.setIcon(icon);
    connect({ connector });
  }

  function onRetry() {
    reset();
  }

  function onCopy() {
    navigator.clipboard.writeText(address || '');
  }

  return (
    <Wrapper>
      <Box display="flex" justify="space-between">
        <BackIcon />
        <CrossIcon />
      </Box>
      <Box display="flex" justify="center" margin="">
        <Avatar />
      </Box>
      <Box display="flex" margin="20px 0 0 " justify="center" align="center">
        <BigTitle>0x00...0000</BigTitle>
        <Box
          onClick={onCopy}
          cursor="pointer"
          display="flex"
          align="center"
          margin="0 0 0 8px"
        >
          <CopyIcon />
        </Box>
        <Box cursor="pointer" display="flex" align="center" margin="0 0 0 8px">
          <a
            href={`https://etherscan.io/address/${address}`}
            target="_blank"
            rel="noreferrer"
          >
            <OpenIcon />
          </a>
        </Box>
      </Box>
      <Box margin="16px 0 0" display="flex" justify="center">
        <Box cursor="pointer" display="flex" align="center">
          <DisconnectIcon />
          <Text margin="0 0 0 4px">Disconnect</Text>
        </Box>
        <Box cursor="pointer" margin="0 0 0 14px" display="flex" align="center">
          <ChangeIcon />
          <Text margin="0 0 0 4px">Switch wallet</Text>
        </Box>
      </Box>
    </Wrapper>
  );
}
