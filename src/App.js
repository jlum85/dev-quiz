import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import QuizList from "./components/QuizList";
import Quiz from "./components/Quiz";

// listQuiz
// selectedQuiz

function App() {
  return (
    <Router>
      <div className="container">
        <div class="wrapper">
          <Header />
          <Switch>
            <Route path="/" exact component={QuizList}></Route>
            <Route path="/quiz/:id" component={Quiz}></Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
