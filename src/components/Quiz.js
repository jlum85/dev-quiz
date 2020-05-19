import React from "react";
import CodeBlock from "./components/CodeBlock";

const codeString2 = `    // javascript
const arr = ['a', 'b', 'c']
arr['five'] = 5
arr.length
// 3 ;
`;

const codeString = "(num) => num + 1";
const reg = '/^.{5}$/.test("1234")';

const Quiz = () => {
  return (
    <>
      <h1>Quiz</h1>

      <CodeBlock codeString={codeString} />
      <br></br>
      <CodeBlock codeString={codeString2} />

      <br></br>
      <CodeBlock codeString={reg} />
    </>
  );
};

export default Quiz;
