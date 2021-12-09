import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import "antd/dist/antd.css";
import { Input } from "antd";
import { Button } from "antd";
import "./home.css";
import PieChart from "./piechart";
import BarChart from "./barchart";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const [name, setName] = useState("");
  const [id, setId] = useState();
  const navigate = useNavigate();
  return (
    <div>
      <div className="search">
        <div className="name">
          <h4>Search College by Name</h4>
          <>
            <Input.Group compact>
              <Input
                style={{ width: "40%" }}
                onChange={(e) => setName(e.target.value)}
              />
              <Button
                type="primary"
                onClick={(e) => {
                  // console.log(name);
                  navigate(`/college_name/${name}`);
                }}
              >
                Submit
              </Button>
            </Input.Group>
          </>
        </div>
        <div className="name">
          <h4>Search College by id</h4>
          <>
            <Input.Group compact>
              <Input
                style={{ width: "40%" }}
                onChange={(e) => setId(e.target.value)}
              />
              <Button
                type="primary"
                onClick={(e) => {
                  navigate(`/college_id/${id}`);
                }}
              >
                Submit
              </Button>
            </Input.Group>
          </>
        </div>
      </div>
      <div className="charts">
        <PieChart />
        <div className="bar">
          <BarChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
