import React from "react";
import propTypes from "prop-types";
import { Block } from "./style/codeblock.styled";

const CodeBlock = ({ children, ...props }) => {
  return <Block {...props}>{children}</Block>;
};

export default CodeBlock;

propTypes.CodeBlock = {
  children: propTypes.node.isRequired,
};
