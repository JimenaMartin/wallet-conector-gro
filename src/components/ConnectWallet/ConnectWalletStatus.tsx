import React, { useContext, useEffect, useMemo, useState } from "react";
import { BigTitle, Box, IconWrapper, Text } from "./ConnectWallet.styles";
import tickAnimation from "../../animations/success.json";
import errorAnimation from "../../animations/error.json";
import loadingAnimation from "../../animations/loading.json";

import Lottie from "react-lottie-player";
import { Retry } from "./Retry";
import { ConnectorContext } from "../MyConnectorProvider";
import { Steps } from "../../constants";

type ConnectWalletStatusProps = {
  status: "idle" | "error" | "loading" | "success";
  onRetry: () => void;
};

export function ConnectWalletStatus({
  status,
  onRetry,
}: ConnectWalletStatusProps): React.ReactElement {
  const isSuccess = status === "success";
  const isLoading = status === "loading";
  const context = useContext(ConnectorContext);

  const animation = useMemo(() => {
    switch (status) {
      case "success":
        return tickAnimation;
      case "error":
        return errorAnimation;
      default:
        return loadingAnimation;
    }
  }, [status]);

  const text = useMemo(() => {
    switch (status) {
      case "success":
        return "Connected";
      case "error":
        return "Connection failed";
      default:
        return "Connecting...";
    }
  }, [status]);

  useEffect(() => {
    if (status === "success") {
      setTimeout(() => {
        context?.setCurrentStep(Steps.account);
      }, 2000);
    }
  }, [status]);

  return (
    <div>
      <Box position="relative" display="flex" justify="center">
        <Lottie
          style={{ width: 180, height: 180, marginTop: 10, marginBottom: 10 }}
          animationData={animation}
          play
          loop={status === "loading" ? true : 0}
        />
        {isLoading && (
          <Box position="absolute" top="60px" display="flex" justify="center">
            <IconWrapper>{context?.icon}</IconWrapper>
          </Box>
        )}
      </Box>
      <BigTitle>{text}</BigTitle>
      {isLoading && (
        <Box display="flex" justify="center">
          <Box maxWidth="242px">
            <Text align="center" margin="0 0 4px 0">
              Accept in your wallet. A connection request has been sent to your
              wallet
            </Text>
          </Box>
        </Box>
      )}
      {!isSuccess && <Retry onRetry={onRetry} />}
    </div>
  );
}
