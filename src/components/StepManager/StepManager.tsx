import React, { useContext, useMemo } from "react";
import { Box, Wrapper } from "../ConnectWallet/ConnectWallet.styles";
import { ReactComponent as BackIcon } from "../../assets/back.svg";
import { ReactComponent as CrossIcon } from "../../assets/cross.svg";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";
import { Steps } from "../../constants";
import { ConnectorContext } from "../MyConnectorProvider";
import { Account } from "../Account/Account";

const steps = [Steps.connect, Steps.account];

export function StepManager(): React.ReactElement {
  const context = useContext(ConnectorContext);

  

  const prevStep = useMemo(() => {
    const index = steps.findIndex((elem) => elem === context?.currentStep);
    if (index > 0) {
      return steps[index - 1];
    }
  }, [context?.currentStep]);

  const component = useMemo(() => {
    switch (context?.currentStep) {
      case Steps.connect:
        return <ConnectWallet />;
      case Steps.account:
        return <Account />;

      default:
        return <ConnectWallet />;
    }
  }, [context?.currentStep]);

  function onGoBack() {
    if(prevStep)
    context?.setCurrentStep(prevStep);
  }

  return (
    <Wrapper>
      <Box display="flex" justify="space-between">
        <Box onClick={onGoBack} cursor="pointer">
          <BackIcon />
        </Box>
        <CrossIcon />
      </Box>
      {component}
    </Wrapper>
  );
}
