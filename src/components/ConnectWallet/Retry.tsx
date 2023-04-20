import React from 'react'
import { Box, Text } from './ConnectWallet.styles';
import { ReactComponent as RetryIcon } from "../../assets/retry.svg";
    
type RetryProps = {
  onRetry: () => void
};
    
export function Retry({ onRetry }: RetryProps): React.ReactElement {
  return (
    <Box display="flex" justify="center">
      <Box onClick={onRetry} cursor="pointer" display="flex" justify="center" align="center">
        <RetryIcon />
        <Text margin="0 0 0 4px">Retry</Text>
      </Box>
    </Box>
  );
}