import React from "react";
const QuizDashboard = () => {
  return (
    <div>
      <div className="container mt-4">
        <h3 className="pb-1 mb-4">Quiz</h3>
        <div className="row md-4 CourseDash-Card">
          <div className="col-md-6">
            <div className="d-flex">
              <div className="card courseDashboardCard">
                <a href="#">
                  <img
                    src="https://source.unsplash.com/1800x1800/?course&1"
                    className="card-img-top"
                    alt="#"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    <a href="/Teacher/NewQuiz" className="btn btn-primary btn-color">
                      Add New Quiz
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card courseDashboardCard">
              <a href="#">
                <img
                  src="https://source.unsplash.com/1800x1800/?course&2"
                  className="card-img-top"
                  alt="..."
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">
                  <a href="/Teacher/Quizes" className="btn btn-primary btn-color">
                    View Quizes
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDashboard;
