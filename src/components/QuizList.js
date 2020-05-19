import React from "react";
import { data } from "../data/sample";

const QuizList = () => {
  const elems = data.map((item, index) => {
    const { title, description } = item;
    return (
      <div key={title} className="quiz-list">
        <li>
          <h3> {title} </h3>
          <p>{description}</p>
        </li>
      </div>
    );
  });

  return (
    <div>
      <h1>QuizList</h1>
      {elems}
    </div>
  );
};

export default QuizList;
