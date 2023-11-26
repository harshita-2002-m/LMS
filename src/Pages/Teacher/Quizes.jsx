import React, { useState } from "react";
import Quiz from "./Quiz";
function Quizes() {
  const [QuizData, setQuizData] = useState([
    {
      id: 1,
      courseID: 1,
      quizID: 1,
      title: "Quiz 1",
      isEnable: true,
    },
    {
      id: 2,
      courseID: 1,
      quizID: 2,
      title: "Quiz 2",
      isEnable: true,
    },
    {
      id: 3,
      courseID: 1,
      quizID: 3,
      title: "Quiz 3",
      isEnable: true,
    },
    {
      id: 4,
      courseID: 1,
      quizID: 4,
      title: "Quiz 4",
      isEnable: true,
    },
  ]);

  const handleQuizDelete = (id) => {
    // Remove the quiz from QuizData
    const updatedQuizData = QuizData.filter((quiz) => quiz.id !== id);
    setQuizData(updatedQuizData);
    // Send a request to your API to delete the quiz
    // Replace 'API_ENDPOINT' with the actual endpoint of your API
    fetch(`API_ENDPOINT/quiz/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // quiz successfully deleted in the API
        } else {
          // Handle errors, e.g., show an error message
          console.error("Failed to delete quiz from API");
        }
      })
      .catch((error) => {
        console.error("Error deleting quiz:", error);
      });
  };
  return (
    <div className="card courseContent-container">
      <div className="card-header class-header-style text-white">Quiz</div>
      <ul className="list-group list-group-flush">
        {QuizData.map((quiz) => (
          <Quiz
            title={quiz.title}
            id={quiz.id}
            onDelete={() => handleQuizDelete(quiz.id)}
          />
        ))}
      </ul>
    </div>
  );
}
export default Quizes;
