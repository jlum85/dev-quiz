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
      {completed ? <h4>Terminé</h4> : <></>}
    </>
  );
};

export default Quiz;
