import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import College from "./college";
import "antd/dist/antd.css";
// import { Descriptions, Badge } from "antd";

import { Empty } from "antd";

const CollegeById = () => {
  let params = useParams().id;
  //   console.log(params);
  const [college, setCollege] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let responseData = await axios.get(`/api/college/id/${params}`);
      //   console.log(responseData.data);
      setCollege(responseData.data.college);
    };
    getData();
  }, []);

  if (college.length) {
    // console.log(college);
  }

  //   console.log(college.Name);
  return (
    <div>
      {!college.length && <Empty />}
      {college.length && <College data={college[0]} />}
    </div>
  );
};

export default CollegeById;
