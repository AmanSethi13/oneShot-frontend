import { React, useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useNavigate } from "react-router-dom";

const axios = require("axios").default;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function compare(a, b) {
  if (a.courseName < b.courseName) {
    return -1;
  }
  if (a.courseName > b.courseName) {
    return 1;
  }
  return 0;
}

const BarChart = () => {
  const navigate = useNavigate();
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);
  const [collegeByCourses, setCollege] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await axios.get("/api/college/get_list");
        // console.log(responseData.data.collegeCountByCourses);

        let temp = [];
        let temp2 = [];

        responseData.data.collegeCountByCourses.sort(compare);

        responseData.data.collegeCountByCourses.forEach((item) => {
          temp.push(item.courseName);
          temp2.push(item.collegeList);
        });
        setLabels(temp);
        setValues(temp2);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  if (collegeByCourses.length) {
    console.log(collegeByCourses);
  }

  let data = {
    labels: labels,
    datasets: [
      {
        label: "Colleges",
        data: values,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        options={{
          onClick: async (e, element) => {
            if (element.length > 0) {
              //   console.log(labels[element[0].index]);
              let name = labels[element[0].index];

              //   let temp = [];

              //   let responseData = await axios.get(
              //     `http://localhost:3000/api/college/course/${name}`
              //   );

              //   temp = responseData.data.collegeList;

              //   setCollege(temp);
              navigate(`/course/${name}`);
            }
          },
          responsive: true,
          interaction: { mode: "index" },
          onHover: function (e) {
            const points = this.getElementsAtEventForMode(
              e,
              "index",
              { axis: "x", intersect: true },
              false
            );

            if (points.length) e.native.target.style.cursor = "pointer";
            else e.native.target.style.cursor = "default";
          },
        }}
      />
      <h3
        style={{
          textAlign: "center",
        }}
      >
        NUMBER OF COLLEGES OFFERING A COURSE
      </h3>
    </div>
  );
};

export default BarChart;
