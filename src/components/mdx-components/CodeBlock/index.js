import React from "react";
import propTypes from "prop-types";
import { Block } from "./style/codeblock.styled";

export const CodeBlock = ({ children, ...props }) => {
  return <Block {...props}>{children}</Block>;
};

propTypes.CodeBlock = {
  children: propTypes.node.isRequired,
};
