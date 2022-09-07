import React from "react";
import { useState } from "react";
//import questions from "/public/data/QuizQuestions.json";

export const QuizQuestions: React.FunctionComponent = () => {
  const questions = [
    {
      id: 1,
      Question: "How many moons does Mars have?",
      Answers: ["none", "1", "2"],
      Answer: 2,
      details:
        "Mars has 2 moons. They are named Phobos, meaning fear and Deimos, which is greek for panik.",
      url: "https://svs.gsfc.nasa.gov/vis/a010000/a011300/a011326/marsmoons_1024x576.jpg",
    },
    {
      id: 2,
      Question: "What is Mars’s nickname?",
      Answers: ["The red Planet", "The dusty planet", "The stinky planet"],
      Answer: 0,
      details: "Rusted iron particles in rocks give mars it's distinct red hue",
      url: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia19393-main_sol3973_spirit_of_st_louis_l257atc.jpg",
    },
  ];

  // load up the json and asign it to a state !

  const [activeQuestion, setActiveQuestion] = useState(questions[0]);
  const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Quiz</h1>
      <div>
        <h3>Question {activeQuestion.id}</h3>
        <p> {activeQuestion.Question}</p>
        <img src={activeQuestion.url} />
      </div>
      <form>
        <ul>
          {activeQuestion.Answers.map((answer: any, index: any) => {
            return (
              <li>
                <button type="submit" name="index">
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
};
