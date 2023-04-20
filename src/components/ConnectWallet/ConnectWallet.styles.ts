import styled from "styled-components";

export const Wrapper = styled.div`
  width: 340.91px;
  height: 529px;
  border-radius: 15.6741px;
  background: #f5f5f7;
  box-shadow: 0px 3.91852px 19.5926px rgba(0, 0, 0, 0.05);
  padding: 23px;
`;

export const Title = styled.h3`
  color: #141769;
  text-align: center;
  margin: 13px 0px;
  font-weight: 700;
`;

interface BoxProps {
  readonly display?: string;
  readonly justify?: string;
  readonly align?: string;
  readonly maxWidth?: string;
  readonly cursor?: string;
  readonly position?: string;
  readonly top?: string;
  readonly left?: string;
  readonly margin?: string;
}

export const Box = styled.div<BoxProps>`
  display: ${(props) => props.display || "block"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  max-width: ${(props) => props.maxWidth || "100%"};
  cursor: ${(props) => props.cursor || "auto"};
  position: ${(props) => props.position || "auto"};
  top: ${(props) => props.top || "auto"};
  left: ${(props) => props.left || "auto"};
  margin: ${(props) => props.margin || "0"};
`;

export const ConnectWalletBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  height: 54px;
  width: 100%;
  color: rgba(20, 23, 105, 0.7);
  margin-top: 12px;
  & span {
    font-weight: 600;
    font-size: 16px;
    margin-left: 12px;
  }
`;

export const BigTitle = styled.h2`
  color: #141769;
  text-align: center;
  margin: 0;
  /* margin-bottom: 8px; */
`;

interface TextProps {
  readonly margin?: string;
  readonly align?: string;
}

export const Text = styled.p<TextProps>`
  color: rgba(20, 23, 105, 0.5);
  font-size: 14px;
  text-align: ${(props) => props.align || "left"};
  margin: ${(props) => props.margin || "0"};
`;

export const IconWrapper = styled.div`
    & svg {
        width: 72px;
        height: 72px;
    }
`
