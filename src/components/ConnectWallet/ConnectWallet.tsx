import React from "react";

import { useConnect } from "wagmi";

import { Title } from "./ConnectWallet.styles";
import { ConnectWalletStatus } from "./ConnectWalletStatus";
import { ConnetWalletList } from "./ConnectWalletList";


export function ConnectWallet(): React.ReactElement {
  const { reset, status, connect } = useConnect();

  function onRetry() {
    reset()
  }

  return (
    <>
      <Title>Connect wallet</Title>
      {status !== "idle" && (
        <ConnectWalletStatus onRetry={onRetry} status={status} />
      )}
      {status === "idle" && <ConnetWalletList connect={connect} />}
    </>
  );
}
