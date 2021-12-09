import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Table, Tag, Space } from "antd";
import List from "./collegeList";

const CollegesByState = (props) => {
  let params = useParams().name;
  const [collegeList, setCollegeList] = useState([]);

  useEffect(() => {
    let temp = [];
    const getData = async () => {
      const responseData = await axios.get(
        `/api/college/state/${params}`
      );
      temp = responseData.data.colleges;
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
        Colleges in {params}
      </h1>
      <List data={collegeList} />
    </div>
  );
};

export default CollegesByState;
