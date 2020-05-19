import React from "react";
import { useParams } from "react-router-dom";

import CodeBlock from "./CodeBlock";
import { data } from "../data/sample";

const codeString2 = `    // javascript
const arr = ['a', 'b', 'c']
arr['five'] = 5
arr.length
// 3 ;
`;

const codeString = "(num) => num + 1";
const reg = '/^.{5}$/.test("1234")';

const Quiz = () => {
  let { id } = useParams();
  const res = data.filter((item) => item.id === id);
  console.log(res);

  return (
    <>
      <h1>
        Quiz , id : {id} - {id}
      </h1>

      <CodeBlock codeString={codeString} />
      <br></br>
      <CodeBlock codeString={codeString2} />

      <br></br>
      <CodeBlock codeString={reg} />
    </>
  );
};

export default Quiz;
