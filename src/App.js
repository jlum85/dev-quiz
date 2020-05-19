import React from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import QuizList from "./components/QuizList";

// listQuiz
// selectedQuiz

function App() {
  return (
    <div className="container">
      <Header />
      <QuizList />
      <Footer />
    </div>
  );
}

export default App;
