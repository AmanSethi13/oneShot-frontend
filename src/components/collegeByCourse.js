import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import List from "./collegeList";

const CollegeByCourse = () => {
  let params = useParams().name;
  //   console.log(params);
  const [collegeList, setCollegeList] = useState([]);
  useEffect(() => {
    let temp = [];
    const getData = async () => {
      let responseData = await axios.get(`/api/college/course/${params}`);
      temp = responseData.data.collegeList;
      //   console.log(temp);
      setCollegeList(temp);
    };
    getData();
  }, []);

  if (collegeList.length) {
    // console.log(collegeList);
  }

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "-moz-initials",
        }}
      >
        Colleges Offering {params} Course
      </h1>
      <List data={collegeList} />
    </div>
  );
};

export default CollegeByCourse;
