import React from "react";
import groBonusJSON from "../abi/groBonusABI.json";
import { useAccount, useContractRead } from "wagmi";
import { BigNumber, FixedNumber } from "ethers";

export function ContractCall(): React.ReactElement {
  const { isConnected } = useAccount();

  const { data } = useContractRead({
    address: "0x8b4A30c8884ca4AfF1E4c82Cce79802a63E61397",
    abi: groBonusJSON,
    functionName: "totalBonus",
    enabled: !!isConnected,
  });

  return (
    <div>
      <p>Call contract:</p>
      {!!data && (
        <p>
          {FixedNumber.from(data)
            .divUnsafe(FixedNumber.from(BigNumber.from(10).pow(18)))
            .toString()}
        </p>
      )}
    </div>
  );
}
