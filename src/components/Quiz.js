import React, { useState } from "react";
import { useParams } from "react-router-dom";

import CodeBlock from "./CodeBlock";
import { data, questions } from "../data/sample";

const Quiz = () => {
  const [selected, setSelected] = useState(1);
  const [completed, setCompleted] = useState(false);

  let { id } = useParams();
  const title = data.filter((item) => item.id === id)[0].title;

  const onAnswer = () => {
    if (selected < questions.length) {
      setSelected(() => selected + 1);
    } else {
      setCompleted(() => true);
      console.log(completed);
    }
  };

  const elems = questions.map((item, idx) => {
    if (item.order < selected) {
      return (
        <div key={idx} className="question-item">
          <CodeBlock codeString={item.question} />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            role="img"
            aria-label="Pass Icon"
          >
            <title>Pass Icon</title>
            <g aria-hidden="true">
              <path d="M8.75 17.882l-4.359-4.359a.75.75 0 0 1 1.06-1.06l4.006 4.005 9.005-9.006a.75.75 0 0 1 1.061 1.061l-9.359 9.359a1 1 0 0 1-1.414 0z"></path>
            </g>
          </svg>
        </div>
      );
    } else if (item.order === selected) {
      return (
        <div key={idx} className="question-item">
          <CodeBlock codeString={item.question} />
          <button onClick={onAnswer}>Run</button>
        </div>
      );
    }
    return <div key={idx}></div>;
  });

  return (
    <>
      <h1>
        {title} {selected} / {questions.length}
      </h1>
      {elems}
      {completed ? <h4 className="completed">Terminé</h4> : <></>}
    </>
  );
};

export default Quiz;
