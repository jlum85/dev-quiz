import React from "react";
import { Link } from "react-router-dom";

import { data } from "../data/sample";

const QuizList = () => {
  const elems = data.map((item, index) => {
    const { id, title, description } = item;
    return (
      <div key={id} className="quiz-list">
        <Link to={`/quiz/${id}`}>
          <h3> {title} </h3>
          <p>{description}</p>
        </Link>
      </div>
    );
  });

  return (
    <div>
      <h2>QuizList</h2>
      {elems}
    </div>
  );
};

export default QuizList;
