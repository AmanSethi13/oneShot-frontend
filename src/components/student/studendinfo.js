import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Student from "./student";
const StudentInfo = () => {
  let params = useParams().id;
  const [student, setStudent] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let responseData = await axios.get(`/api/student/${params}`);
      //   console.log(responseData);
      setStudent(responseData.data.Students);
    };
    getData();
  }, []);

  if (student.length) {
    // console.log(student);
  }
  return <Student data={student} />;
};

export default StudentInfo;
