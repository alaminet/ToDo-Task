import React from "react";
import { Flex, List } from "antd";
import { CheckCircleFilled, DeleteTwoTone } from "@ant-design/icons";

const CompleteTaskList = () => {
  const handleDelete = (e) => {
    console.log(e);
  };
  const data = [
    {
      id: "1",
      title: "Ant Design Title 1",
      discription: "Ant Design Title 1",
    },
    {
      id: "2",
      title: "Ant Design Title 2",
      discription: "Ant Design Title 2",
    },
    {
      id: "3",
      title: "Ant Design Title 3",
      discription: "Ant Design Title 3",
    },
    {
      id: "4",
      title: "Ant Design Title 4",
      discription: "Ant Design Title 4",
    },
  ];
  return (
    <>
      <div>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item key={index}>
              <div style={{ width: "100%" }}>
                <Flex gap={20} align="center">
                  <div>
                    <CheckCircleFilled
                      style={{ fontSize: "24px", color: "#1677FF" }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        margin: "0",
                        fontSize: "15px",
                        color: "#BEBEBE",
                      }}
                    >
                      <del>{item.title}</del>
                    </h3>
                    <p
                      style={{
                        margin: "0",
                        color: "#BEBEBE",
                        fontSize: "14px",
                      }}
                    >
                      <del>{item.discription}</del>
                    </p>
                  </div>
                </Flex>
              </div>
              <div>
                <DeleteTwoTone
                  style={{ fontSize: "24px" }}
                  twoToneColor="#eb2f96"
                  onClick={() => handleDelete(item)}
                />
              </div>
            </List.Item>
          )}
        />
      </div>
    </>
  );
};

export default CompleteTaskList;
