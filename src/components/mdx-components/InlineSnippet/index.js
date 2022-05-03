import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

export const Code = styled.code`
  code {
    background: var(--grey);
    padding: 5px 3px;
    border-radius: 3px;
  }
`;

export const InlineSnippet = ({ children, ...props }) => {
  return <Code {...props}>{children}</Code>;
};

propTypes.InlineSnippet = {
  children: propTypes.node.isRequired,
};
