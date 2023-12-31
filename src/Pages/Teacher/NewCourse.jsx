
// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const baseUrl = 'https://danville.pythonanywhere.com/api';

// function NewCourse() {
//   // Get Instructor
//   const [instructor, setInstructor] = useState([]);
//   useEffect(() => {
//     axios.get(baseUrl + "/instructor/")
//       .then((response) => {
//         setInstructor(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   // Get Category
//   const [category, setCategory] = useState([]);
//   useEffect(() => {
//     axios.get(baseUrl + "/category/")
//       .then((response) => {
//         setCategory(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const [courseData, setCourseData] = useState({
//     'courseName': '',
//     'description': '',
//     'fk_category': '',
//     'fk_instructor': '',
//     'enrollmentCapacity': '',
//     'startDate': '',
//     'endDate': '',
//     'status': '',
//   });

//   const handleChange = (event) => {
//     setCourseData({
//       ...courseData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const submitForm = (event) => {
//     event.preventDefault();
//     const courseFormData = new FormData();
//     courseFormData.append("courseName", courseData.courseName);
//     courseFormData.append("description", courseData.description);
//     courseFormData.append("fk_category", courseData.fk_category);
//     courseFormData.append("fk_instructor", courseData.fk_instructor);
//     courseFormData.append("enrollmentCapacity", courseData.enrollmentCapacity);
//     courseFormData.append("startDate", courseData.startDate);
//     courseFormData.append("endDate", courseData.endDate);

//     try {
//       axios.post(baseUrl + "/course/", courseFormData)
//         .then((response) => {
//           console.log(response.data);
//           setCourseData({
//             'courseName': '',
//             'description': '',
//             'fk_category': '',
//             'fk_instructor': '',
//             'enrollmentCapacity': '',
//             'startDate': '',
//             'endDate': '',
//             'status': 'success',
//           });
//           toast('Course added successfully', {
//             position: "top-center",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light"
//           });
//         });
//     } catch (error) {
//       console.error(error);
//       setCourseData({ 'status': 'error' });
//       toast("Course cannot be added");
//     }
//   };

//   return (
//     <div className="formcontainer">
//       <form id="courseForm" action="#" method="POST">
//         {courseData.status === 'error' && toast("Course cannot be added")}
//         <h1>New Course</h1>

//         <div className="form-group">
//           <label htmlFor="courseName">Course Name:</label>
//           <input onChange={handleChange} type="text" id="courseName" size="65" name="courseName" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="category">Category:</label>
//           <select name="fk_category" onChange={handleChange}>
//             <option value="fk_category">Select a category</option>
//             {category.map((category, index) => (
//               <option key={index} value={category.id}>{category.categoryName}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="instructor">Instructor:</label>
//           <select name="fk_instructor" onChange={handleChange}>
//             <option value="fk_instructor">Select an instructor</option>
//             {instructor.map((instructor, index) => (
//               <option key={index} value={instructor.id}>{instructor.firstName} {instructor.lastName}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description:</label>
//           <textarea onChange={handleChange} id="description" name="description" rows="4" required></textarea>
//         </div>

//         <div className="form-group">
//           <label htmlFor="enrollmentCapacity">Enrollment Capacity:</label>
//           <input onChange={handleChange} type="number" id="enrollmentCapacity" name="enrollmentCapacity" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="startDate">Start Date:</label>
//           <input onChange={handleChange} type="date" id="startDate" name="startDate" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="endDate">End Date:</label>
//           <input onChange={handleChange} type="date" id="endDate" name="endDate" required />
//         </div>

//         <div className="form-group">
//           <button onClick={submitForm} type="button">Submit</button>
//           <ToastContainer
//             position="top-center"
//             autoClose={false}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//           />
//         </div>
//       </form>

//     </div>
//   );
// }

// export default NewCourse;





// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const baseUrl = 'https://danville.pythonanywhere.com/api';

// function NewCourse() {
//   const navigate = useNavigate();

//   const [instructor, setInstructor] = useState([]);
//   useEffect(() => {
//     axios.get(baseUrl + "/instructor/")
//       .then((response) => {
//         setInstructor(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const [category, setCategory] = useState([]);
//   useEffect(() => {
//     axios.get(baseUrl + "/category/")
//       .then((response) => {
//         setCategory(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const [courseData, setCourseData] = useState({
//     'courseName': '',
//     'description': '',
//     'fk_category': '',
//     'fk_instructor': '',
//     'enrollmentCapacity': '',
//     'startDate': '',
//     'endDate': '',
//     'status': '',
//   });

//   const handleChange = (event) => {
//     setCourseData({
//       ...courseData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const submitForm = (event) => {
//     event.preventDefault();
//     const courseFormData = new FormData();
//     courseFormData.append("courseName", courseData.courseName);
//     courseFormData.append("description", courseData.description);
//     courseFormData.append("fk_category", courseData.fk_category);
//     courseFormData.append("fk_instructor", courseData.fk_instructor);
//     courseFormData.append("enrollmentCapacity", courseData.enrollmentCapacity);
//     courseFormData.append("startDate", courseData.startDate);
//     courseFormData.append("endDate", courseData.endDate);

//     try {
//       axios.post(baseUrl + "/course/", courseFormData)
//         .then((response) => {
//           console.log(response.data);
//           setCourseData({
//             'courseName': '',
//             'description': '',
//             'fk_category': '',
//             'fk_instructor': '',
//             'enrollmentCapacity': '',
//             'startDate': '',
//             'endDate': '',
//             'status': 'success',
//           });
//           toast('Course added successfully', {
//             position: "top-center",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light"
//           });

//           // Redirect to the course dashboard after adding a course
//           navigate("/Teacher/CourseDashboard");
//         });
//     } catch (error) {
//       console.error(error);
//       setCourseData({ 'status': 'error' });
//       toast("Course cannot be added");
//     }
//   };

//   return (
//     <div className="formcontainer">
//       <form id="courseForm" action="#" method="POST">
//         {courseData.status === 'error' && toast("Course cannot be added")}
//         <h1>New Course</h1>

//         <div className="form-group">
//           <label htmlFor="courseName">Course Name:</label>
//           <input onChange={handleChange} type="text" id="courseName" size="65" name="courseName" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="category">Category:</label>
//           <select name="fk_category" onChange={handleChange}>
//             <option value="fk_category">Select a category</option>
//             {category.map((category, index) => (
//               <option key={index} value={category.id}>{category.categoryName}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="instructor">Instructor:</label>
//           <select name="fk_instructor" onChange={handleChange}>
//             <option value="fk_instructor">Select an instructor</option>
//             {instructor.map((instructor, index) => (
//               <option key={index} value={instructor.id}>{instructor.firstName} {instructor.lastName}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description:</label>
//           <textarea onChange={handleChange} id="description" name="description" rows="4" required></textarea>
//         </div>

//         <div className="form-group">
//           <label htmlFor="enrollmentCapacity">Enrollment Capacity:</label>
//           <input onChange={handleChange} type="number" id="enrollmentCapacity" name="enrollmentCapacity" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="startDate">Start Date:</label>
//           <input onChange={handleChange} type="date" id="startDate" name="startDate" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="endDate">End Date:</label>
//           <input onChange={handleChange} type="date" id="endDate" name="endDate" required />
//         </div>

//         <div className="form-group">
//           <button onClick={submitForm} type="button">Submit</button>
//           <ToastContainer
//             position="top-center"
//             autoClose={false}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default NewCourse;



// import React, { useEffect, useState } from "react";
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const baseUrl = 'https://danville.pythonanywhere.com/api';

// function NewCourse() {
//   // Get Instructor
//   const [instructor, setInstructor] = useState([]);
//   useEffect(() => {
//     axios.get(baseUrl + "/instructor/")
//       .then((response) => {
//         setInstructor(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   // Get Category
//   const [category, setCategory] = useState([]);
//   useEffect(() => {
//     axios.get(baseUrl + "/category/")
//       .then((response) => {
//         setCategory(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const [courseData, setCourseData] = useState({
//     'courseName': '',
//     'description': '',
//     'fk_category': '',
//     'fk_instructor': '',
//     'enrollmentCapacity': '',
//     'startDate': '',
//     'endDate': '',
//     'status': '',
//   });

//   const handleChange = (event) => {
//     setCourseData({
//       ...courseData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const submitForm = (event) => {
//     event.preventDefault();
//     const courseFormData = new FormData();
//     courseFormData.append("courseName", courseData.courseName);
//     courseFormData.append("description", courseData.description);
//     courseFormData.append("fk_category", courseData.fk_category);
//     courseFormData.append("fk_instructor", courseData.fk_instructor);
//     courseFormData.append("enrollmentCapacity", courseData.enrollmentCapacity);
//     courseFormData.append("startDate", courseData.startDate);
//     courseFormData.append("endDate", courseData.endDate);

//     try {
//       axios.post(baseUrl + "/course/", courseFormData)
//         .then((response) => {
//           console.log(response.data);
//           setCourseData({
//             'courseName': '',
//             'description': '',
//             'fk_category': '',
//             'fk_instructor': '',
//             'enrollmentCapacity': '',
//             'startDate': '',
//             'endDate': '',
//             'status': 'success',
//           });
//           toast('Course added successfully', {
//             position: "top-center",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "light"
//           });
//           // Refresh the page after adding the course
//           window.location.reload();
//         });
//     } catch (error) {
//       console.error(error);
//       setCourseData({ 'status': 'error' });
//       toast("Course cannot be added");
//     }
//   };

//   return (
//     <div className="formcontainer">
//       <form id="courseForm" action="#" method="POST">
//         {courseData.status === 'error' && toast("Course cannot be added")}
//         <h1>New Course</h1>

//         <div className="form-group">
//           <label htmlFor="courseName">Course Name:</label>
//           <input onChange={handleChange} type="text" id="courseName" size="65" name="courseName" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="category">Category:</label>
//           <select name="fk_category" onChange={handleChange}>
//             <option value="fk_category">Select a category</option>
//             {category.map((category, index) => (
//               <option key={index} value={category.id}>{category.categoryName}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="instructor">Instructor:</label>
//           <select name="fk_instructor" onChange={handleChange}>
//             <option value="fk_instructor">Select an instructor</option>
//             {instructor.map((instructor, index) => (
//               <option key={index} value={instructor.id}>{instructor.firstName} {instructor.lastName}</option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="description">Description:</label>
//           <textarea onChange={handleChange} id="description" name="description" rows="4" required></textarea>
//         </div>

//         <div className="form-group">
//           <label htmlFor="enrollmentCapacity">Enrollment Capacity:</label>
//           <input onChange={handleChange} type="number" id="enrollmentCapacity" name="enrollmentCapacity" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="startDate">Start Date:</label>
//           <input onChange={handleChange} type="date" id="startDate" name="startDate" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="endDate">End Date:</label>
//           <input onChange={handleChange} type="date" id="endDate" name="endDate" required />
//         </div>

//         <div className="form-group">
//           <button onClick={submitForm} type="button">Submit</button>
//           <ToastContainer
//             position="top-center"
//             autoClose={false}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="light"
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default NewCourse;

import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const baseUrl = 'https://danville.pythonanywhere.com/api/';

function NewCourse() {
  // Get Instructor
  const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    axios.get(baseUrl + "/instructor/")
      .then((response) => {
        setInstructor(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Get Category
  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios.get(baseUrl + "/category/")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [courseData, setCourseData] = useState({
    'courseName': '',
    'description': '',
    'fk_category': '',
    'fk_instructor': '',
    'enrollmentCapacity': '',
    'startDate': '',
    'endDate': '',
    'status': '',
  });

  const handleChange = (event) => {
    setCourseData({
      ...courseData,
      [event.target.name]: event.target.value,
    });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const courseFormData = new FormData();
    courseFormData.append("courseName", courseData.courseName);
    courseFormData.append("description", courseData.description);
    courseFormData.append("fk_category", courseData.fk_category);
    courseFormData.append("fk_instructor", courseData.fk_instructor);
    courseFormData.append("enrollmentCapacity", courseData.enrollmentCapacity);
    courseFormData.append("startDate", courseData.startDate);
    courseFormData.append("endDate", courseData.endDate);

    try {
      const response = await axios.post(baseUrl + "/course/", courseFormData);
      console.log(response.data);

      setCourseData({
        'courseName': '',
        'description': '',
        'fk_category': '',
        'fk_instructor': '',
        'enrollmentCapacity': '',
        'startDate': '',
        'endDate': '',
        'status': 'success',
      });

      toast('Course added successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });

      // Refresh the page after 10 seconds
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    } catch (error) {
      console.error(error);
      setCourseData({ 'status': 'error' });
      toast("Course cannot be added");
    }
  };

  return (
    <div className="formcontainer">
      <form id="courseForm" action="#" method="POST">
        {courseData.status === 'error' && toast("Course cannot be added")}
        <h1>New Course</h1>

        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input onChange={handleChange} type="text" id="courseName" size="65" name="courseName" required />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select name="fk_category" onChange={handleChange}>
            <option value="fk_category">Select a category</option>
            {category.map((category, index) => (
              <option key={index} value={category.id}>{category.categoryName}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="instructor">Instructor:</label>
          <select name="fk_instructor" onChange={handleChange}>
            <option value="fk_instructor">Select an instructor</option>
            {instructor.map((instructor, index) => (
              <option key={index} value={instructor.id}>{instructor.firstName} {instructor.lastName}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea onChange={handleChange} id="description" name="description" rows="4" required></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="enrollmentCapacity">Enrollment Capacity:</label>
          <input onChange={handleChange} type="number" id="enrollmentCapacity" name="enrollmentCapacity" required />
        </div>

        <div className="form-group">
          <label htmlFor="startDate">Start Date:</label>
          <input onChange={handleChange} type="date" id="startDate" name="startDate" required />
        </div>

        <div className="form-group">
          <label htmlFor="endDate">End Date:</label>
          <input onChange={handleChange} type="date" id="endDate" name="endDate" required />
        </div>

        <div className="form-group">
          <button onClick={submitForm} type="button">Submit</button>
          <ToastContainer
            position="top-center"
            autoClose={false}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </form>
    </div>
  );
}

export default NewCourse;

