import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import List from "./collegeList";
import StudentList from "./studentList";

const StudentData = () => {
  const [students, setStudents] = useState([]);

  let params = useParams().id;
  //   console.log(params);

  useEffect(() => {
    const getData = async () => {
      let responseData = await axios.get(`/api/college/student-list/${params}`);
      //   console.log(responseData.data.Students);
      setStudents(responseData.data.Students);
    };
    getData();
  }, []);

  if (students.length) {
    console.log(students);
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "-moz-initials",
        }}
      >
        Student List
      </h1>
      <StudentList data={students} />
    </div>
  );
};

export default StudentData;
