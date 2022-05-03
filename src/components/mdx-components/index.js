import React from "react";
import propTypes from "prop-types";
import { Block, Code } from "./style/codeblock.styled";

export const CodeBlock = ({ children, ...props }) => {
  return <Block {...props}>{children}</Block>;
};

propTypes.CodeBlock = {
  children: propTypes.node.isRequired,
};

export const InlineSnippet = ({ children, ...props }) => {
  return <Code {...props}>{children}</Code>;
};

propTypes.InlineSnippet = {
  children: propTypes.node.isRequired,
};
