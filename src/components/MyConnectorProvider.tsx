import React, { createContext, useState } from "react";
import { Connector } from "wagmi";

type CustomConnector = {
    icon: React.ReactElement;
    connector: Connector<any, any, any>,
    name?: string

}

type Context = {
  connectors?: CustomConnector[];
  icon?: React.ReactElement;
  setIcon: (val: React.ReactElement) => void;
};

type MyConnectorProviderProps = {
  context: {
    connectors: CustomConnector[]
  };
  children: React.ReactElement;
};

export const ConnectorContext = createContext<Context | null>(null);

export function MyConnectorProvider({
  children,
  context,
}: MyConnectorProviderProps): React.ReactElement {
  const [icon, setIcon] = useState<React.ReactElement>()


  return (
    <ConnectorContext.Provider value={{...context, icon, setIcon}}>
      {children}
    </ConnectorContext.Provider>
  );
}
