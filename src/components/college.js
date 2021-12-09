import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Descriptions, Badge, Button } from "antd";
import { useNavigate } from "react-router-dom";

const College = (props) => {
  const navigate = useNavigate();
  //   console.log(props.data);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          margin: "auto",
          paddingTop: "10px",
          paddingBottom: "10px",
          fontFamily: "monospace",
        }}
      >
        {props.data.name} Information
      </h1>
      <Descriptions
        layout="vertical"
        bordered

        //   size="middle"
      >
        <Descriptions.Item label="Name">{props.data.name}</Descriptions.Item>

        <Descriptions.Item label="ID">{props.data.id}</Descriptions.Item>
        <Descriptions.Item label="City">{props.data.City}</Descriptions.Item>
        <Descriptions.Item label="State">{props.data.State}</Descriptions.Item>
        <Descriptions.Item label="Country">
          {props.data.Country}
        </Descriptions.Item>
        <Descriptions.Item label="Total Students">
          {props.data.Total_Students}
        </Descriptions.Item>
        <Descriptions.Item label="Courses">
          <ul
            style={{
              listStyle: "none",
              //   cursor: "pointer",
            }}
          >
            {props.data.Courses.map((course) => {
              return (
                <span>
                  <li
                    style={{
                      cursor: "pointer",
                      width: "100px",
                    }}
                    onClick={(e) => {
                      navigate(`/course/${course}`);
                    }}
                  >
                    {course}
                  </li>
                </span>
              );
            })}
          </ul>
        </Descriptions.Item>
      </Descriptions>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            paddingTop: "10px",
            paddingLeft: "10px",
            paddingRight: "20px",
          }}
        >
          <Button
            type="primary"
            onClick={(e) => {
              navigate(`/student_list/${props.data.id}`);
            }}
          >
            SHOW STUDENT LIST
          </Button>
        </div>
        <div style={{ paddingTop: "10px", paddingLeft: "20px" }}>
          <Button
            type="primary"
            onClick={(e) => {
              navigate(`/similar/${props.data.id}`);
            }}
          >
            SHOW SIMILAR COLLEGES
          </Button>
        </div>
      </div>
    </div>
  );
};

export default College;
