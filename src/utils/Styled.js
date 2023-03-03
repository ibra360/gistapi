import styled from "styled-components";

export const Text = styled.div`
  ${(props) => {
    return `
    color: ${props.color || "#0261c7"};
    font-size: ${props.size || "14px"};
    margin: ${props.margin || "0px"};
    font-weight:${props.fontWeight};    
`;
  }}
`;

export const WrapperDiv = styled.div`
  padding: 14px 14px 30px 14px;
  width: 50%;
  border-bottom: 1px solid #eef0f1;
`;

export const FlexDiv = styled.div`
  ${(props) => {
    return `
    display:flex;
    flex-wrap:wrap;
    flex-direction: ${props.flexDirection || "row"};
    margin: ${props.margin};
    cursor: ${props.cursor};
    align-items: ${props.alignItems || "center"};
    justify-content:${props.justifyContent || "center"};    
`;
  }}
`;
