// import React, { useState, useEffect } from "react";
// import Card from "./Card";

// function CompletedCourses() {
//   const [completedCourses, setCompletedCourses] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:8000/api/Course");
//         const courses = await response.json();

//         const currentDate = new Date();

//         // Filter completed courses based on the current date
//         const completed = courses.filter((course) => currentDate > new Date(course.endDate));

//         setCompletedCourses(completed);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Completed Courses</h2>
//       <div className="d-flex flex-wrap">
//         {completedCourses.map((course) => (
//           <Card
//             key={course.id}
//             id={course.id}
//             img={course.img} // Update this with the actual image property
//             title={course.courseName}
//             desc={course.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CompletedCourses;




// import React, { useState, useEffect } from "react";
// import Card from "./Card";

// function CompletedCourses() {
//   const [completedCourses, setCompletedCourses] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://danville.pythonanywhere.com/api/course/");
//         const courses = await response.json();

//         const currentDate = new Date();

//         // Filter completed courses based on the current date
//         const completed = courses.filter((course) => currentDate > new Date(course.endDate));

//         setCompletedCourses(completed);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Completed Courses</h2>
//       <div className="d-flex flex-wrap">
//         {completedCourses.map((course) => (
//           <Card
//             key={course.id}
//             id={course.id}
//             img={course.img} // Update this with the actual image property
//             title={course.courseName}
//             desc={course.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CompletedCourses;
import React, { useState, useEffect } from "react";
import Card from "./Card";

function CompletedCourses() {
  const [completedCourses, setCompletedCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://danville.pythonanywhere.com/api/course/");
        const courses = await response.json();

        const currentDate = new Date();

        // Filter completed courses based on the current date
        const completed = courses.filter((course) => currentDate > new Date(course.endDate));

        // Sort completed courses alphabetically based on course name
        const sortedCompleted = completed.sort((a, b) =>
          a.courseName.localeCompare(b.courseName)
        );

        setCompletedCourses(sortedCompleted);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="heading-margin">Completed Courses</h2>
      <div className="d-flex flex-wrap">
        {completedCourses.map((course) => (
          <Card
            key={course.id}
            id={course.id}
            img="https://source.unsplash.com/1800x900/?book" // Update this with the actual image property
            title={course.courseName}
            desc={course.description}
          />
        ))}
      </div>
    </div>
  );
}

export default CompletedCourses;
