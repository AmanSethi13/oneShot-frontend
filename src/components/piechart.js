import { React, useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router";
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
  if (a.State < b.State) {
    return -1;
  }
  if (a.State > b.State) {
    return 1;
  }
  return 0;
}

const PieChart = (props) => {
  const history = useNavigate();
  const [collegeCount, setCollegeCount] = useState([]);
  const [values, setValues] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const responseData = await axios.get("/api/college/by_state");
        responseData.data.colleges_by_states.sort(compare);
        setCollegeCount(responseData.data.colleges_by_states);
        let temp = [];
        responseData.data.colleges_by_states.forEach((item) => {
          temp.push(item.State);
        });
        let temp2 = [];
        responseData.data.colleges_by_states.forEach((item) => {
          temp2.push(parseInt(item.percentage));
        });

        setValues(temp2);
        setLabels(temp);

        // setData({
        //   labels: temp,
        //   datasets: [
        //     {
        //       label: "Colleges by States",
        //       data: temp2,
        //       backgroundColor: [
        //         "rgba(255, 99, 132, 0.2)",
        //         "rgba(54, 162, 235, 0.2)",
        //         "rgba(255, 206, 86, 0.2)",
        //         "rgba(75, 192, 192, 0.2)",
        //         "rgba(153, 102, 255, 0.2)",
        //         "rgba(255, 159, 64, 0.2)",
        //       ],
        //       borderColor: [
        //         "rgba(255, 99, 132, 1)",
        //         "rgba(54, 162, 235, 1)",
        //         "rgba(255, 206, 86, 1)",
        //         "rgba(75, 192, 192, 1)",
        //         "rgba(153, 102, 255, 1)",
        //         "rgba(255, 159, 64, 1)",
        //       ],
        //       borderWidth: 1,
        //     },
        //   ],
        // });
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  const data2 = {
    labels: labels,
    datasets: [
      {
        label: "My First Dataset",
        data: values,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      {collegeCount.length && (
        <Doughnut
          data={data2}
          options={{
            onClick: async (e, element) => {
              if (element.length > 0) {
                let name1 = labels[element[0].index];
                history(`/state/${name1}`);
              }
            },
            responsive: true,
            interaction: {
              mode: "point",
            },
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
      )}
      <h3
        style={{
          textAlign: "center",
        }}
      >
        NUMBER OF COLLEGES IN A STATE
      </h3>
    </div>
  );
};

export default PieChart;
