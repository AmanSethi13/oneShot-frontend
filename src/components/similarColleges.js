import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import List from "./collegeList";

const SimilarColleges = () => {
  let params = useParams().id;
  //   console.log(params);
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let responseData = await axios.get(`/api/college/similar/${params}`);
      //   console.log(responseData.data.colleges);
      setColleges(responseData.data.colleges);
    };
    getData();
  }, []);

  if (colleges.length) {
    // console.log(colleges);
  }

  return (
    <div>
      <div>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "-moz-initials",
          }}
        >
          Similar Colleges
        </h1>
        <List data={colleges} />
      </div>
    </div>
  );
};

export default SimilarColleges;
