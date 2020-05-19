import React from "react";
// import ReactMarkdown from "react-markdown";
import "./App.css";
import CodeBlock from "./CodeBlock";

function App() {
  const codeString2 = `    // javascript
    const arr = ['a', 'b', 'c']
    arr['five'] = 5
    arr.length
    // 3 ;
   `;

  const codeString = "(num) => num + 1";
  const reg = '/^.{5}$/.test("1234")';

  return (
    <div className="App">
      <div className="container">
        {/* <header className="App-header"></header> */}
        {/* <ReactMarkdown source={input} renderers={{ code: CodeBlock }} /> */}
        <CodeBlock codeString={codeString} />
        <br></br>
        <CodeBlock codeString={codeString2} />

        <br></br>
        <CodeBlock codeString={reg} />
      </div>
    </div>
  );
}

export default App;
