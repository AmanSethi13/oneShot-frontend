import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CollegesByState from "./components/collegesByState";
import CollegeByCourse from "./components/collegeByCourse";
import CollegeByName from "./components/collegeByName";
import CollegeById from "./components/collegeById";
import Home from "./components/home";
import SimilarColleges from "./components/similarColleges";
import StudentData from "./components/student/studentData";
import StudentInfo from "./components/student/studendinfo";
// import StudentList from "./components/student/studentList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/state/:name" exact element={<CollegesByState />}></Route>
        <Route path="/course/:name" exact element={<CollegeByCourse />}></Route>
        <Route
          path="/college_name/:name"
          exact
          element={<CollegeByName />}
        ></Route>
        <Route path="/college_id/:id" exact element={<CollegeById />}></Route>
        <Route path="/similar/:id" exact element={<SimilarColleges />}></Route>
        <Route path="/student_list/:id" exact element={<StudentData />}></Route>
        <Route path="/student/:id" exact element={<StudentInfo />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
