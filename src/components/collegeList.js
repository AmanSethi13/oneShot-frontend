import React from "react";
import { Table, Button } from "antd";
import { useNavigate } from "react-router-dom";
// const Button = antd.Button;

const List = (props) => {
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
              //   console.log(record.id);
              navigate(`/college_id/${record.id}`);
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
      render: (text, record, index) => (
        <div
        // className="btn-wrap"
        // style={{
        //   width: "200px",
        // }}
        >
          <Button
            onClick={(e) => {
              // console.log(record.name);
              navigate(`/college_name/${record.name}`);
            }}
          >
            {record.name}
          </Button>
        </div>
      ),
    },
    {
      title: "Year Founded",
      dataIndex: "Year_Founded",
      key: "Year_Founded",
    },
    {
      title: "City",
      dataIndex: "City",
      key: "City",
    },
    {
      title: "State",
      key: "State",
      dataIndex: "State",
    },
    {
      title: "Number of Students",
      key: "Total_Students",
      dataIndex: "Total_Students",
    },
  ];

  const data = [];
  //   console.log(props.data);

  props.data.forEach((item) => {
    var clone = Object.assign({}, item);
    delete clone.Country;
    delete clone.Courses;
    delete clone._id;
    // console.log(clone);
    data.push(clone);
  });

  //   console.log(data);

  return <Table columns={columns} dataSource={data} />;
};

export default List;
