import React from "react";
import { Table, Tag, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";

const StudentList = (props) => {
  var navigate = useNavigate();

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      render: (text, record, index) => (
        <div>
          <Button
            onClick={(e) => {
              console.log(record.id);
              //   navigate(`/college_id/${record.id}`);
              navigate(`/student/${record.id}`);
            }}
          >
            {record.id}
          </Button>
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Batch",
      dataIndex: "Year_Of_Batch",
      key: "Year_Of_Batch",
    },
    {
      title: "College Id",
      dataIndex: "College_ID",
      key: "College_ID",
    },
  ];

  const data = [];
  //   console.log(props.data);

  props.data.forEach((item) => {
    var clone = Object.assign({}, item);
    delete clone.Skills;
    // delete clone.Courses;
    // delete clone._id;
    // console.log(clone);
    data.push(clone);
  });

  //   console.log(data);

  return <Table columns={columns} dataSource={data} />;
};

export default StudentList;
