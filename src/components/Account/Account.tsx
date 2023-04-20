import React, { useContext, useMemo } from "react";

import { useAccount, useDisconnect, useEnsName } from "wagmi";

import { ConnectorContext } from "../MyConnectorProvider";
import {
  Box,
  BigTitle,
  Text,
} from "../ConnectWallet/ConnectWallet.styles";
import { ReactComponent as CopyIcon } from "../../assets/copy.svg";
import { ReactComponent as OpenIcon } from "../../assets/open.svg";
import { ReactComponent as DisconnectIcon } from "../../assets/disconnect.svg";
import { ReactComponent as ChangeIcon } from "../../assets/change.svg";

import { Avatar } from "./Account.styles";
import { Steps } from "../../constants";

export function Account(): React.ReactElement {
  const { disconnect } = useDisconnect();
  const { address } = useAccount();
  const context = useContext(ConnectorContext);
  const { data } = useEnsName({ address })

  const formattedAddress = useMemo(() => {
    return data || `${address?.slice(0, 4)}...${address?.slice(address.length -4, address.length)}`
  }, [address, data])

  function onDisconnect() {
    disconnect();
    context?.setCurrentStep(Steps.connect)
  }

  function onSwitch() { 
    context?.setCurrentStep(Steps.connect);
  }

  function onCopy() {
    navigator.clipboard.writeText(address || "");
  }

  return (
    <>
      <Box display="flex" justify="center" margin="">
        <Avatar />
      </Box>
      <Box display="flex" margin="20px 0 0 " justify="center" align="center">
        <BigTitle>{formattedAddress || ''}</BigTitle>
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
        <Box
          onClick={onDisconnect}
          cursor="pointer"
          display="flex"
          align="center"
        >
          <DisconnectIcon />
          <Text margin="0 0 0 4px">Disconnect</Text>
        </Box>
        <Box
          onClick={onSwitch}
          cursor="pointer"
          margin="0 0 0 14px"
          display="flex"
          align="center"
        >
          <ChangeIcon />
          <Text margin="0 0 0 4px">Switch wallet</Text>
        </Box>
      </Box>
    </>
  );
}
