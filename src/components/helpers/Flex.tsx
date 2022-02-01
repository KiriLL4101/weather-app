import React from "react";
import styled from "styled-components";

interface FlexProps {
  direction?: string;
  align?: string;
  justify?: string;
}

const StylesFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props: FlexProps) => props.direction || "row"};
  align-items: ${(props: FlexProps) => props.align || "stretch"};
  justify-content: ${(props: FlexProps) => props.justify || "stretch"};
`;

const Flex: React.FC<FlexProps> = (props) => {
  return <StylesFlex {...props} />;
};

export default Flex;
