import React from "react";
import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { coy } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, codeString }) => {
  return (
    <div className="code">
      <SyntaxHighlighter language={language} style={dark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

CodeBlock.propTypes = {
  codeString: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeBlock.defaultProps = {
  language: "javascript",
};

export default CodeBlock;
