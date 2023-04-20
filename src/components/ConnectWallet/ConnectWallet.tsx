import React from "react";

import { useConnect } from "wagmi";

import { Wrapper, Title, Box } from "./ConnectWallet.styles";
import { ReactComponent as BackIcon } from "../../assets/back.svg";
import { ReactComponent as CrossIcon } from "../../assets/cross.svg";
import { ConnectWalletStatus } from "./ConnectWalletStatus";
import { ConnetWalletList } from "./ConnectWalletList";


export function ConnectWallet(): React.ReactElement {
  const { reset, status } = useConnect();

  function onRetry() {
    reset()
  }

  return (
    <Wrapper>
      <Box display="flex" justify="space-between">
        <BackIcon />
        <CrossIcon />
      </Box>
      <Title>Connect wallet</Title>
      {status !== 'idle' && <ConnectWalletStatus onRetry={onRetry} status={status} />}
      {status === "idle" && <ConnetWalletList />}
    </Wrapper>
  );
}
