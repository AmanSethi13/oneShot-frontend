import React from "react";
// import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Empty, Descriptions } from "antd";
// import { useNavigate } from "react-router-dom";

const Student = (props) => {
  console.log(props.data);
  return (
    <div>
      {!props.data.length && <Empty />}
      {props.data.length && (
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
            {props.data[0].name}'s Information
          </h1>
          <Descriptions
            layout="vertical"
            bordered

            //   size="middle"
          >
            <Descriptions.Item label="ID">{props.data[0].id}</Descriptions.Item>
            <Descriptions.Item label="Name">
              {props.data[0].name}
            </Descriptions.Item>
            <Descriptions.Item label="Batch">
              {props.data[0].Year_Of_Batch}
            </Descriptions.Item>
            <Descriptions.Item label="Skills">
              <ul
                style={{
                  listStyle: "none",
                  //   cursor: "pointer",
                }}
              >
                {props.data[0].Skills.map((skill) => {
                  return (
                    <span>
                      <li
                        style={{
                          cursor: "pointer",
                          width: "100px",
                        }}
                      >
                        {skill}
                      </li>
                    </span>
                  );
                })}
              </ul>
            </Descriptions.Item>
          </Descriptions>
        </div>
      )}
    </div>

    // <div>here</div>
  );
};

export default Student;
