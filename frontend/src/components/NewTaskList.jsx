import React from "react";
import { List } from "antd";
import { CheckCircleTwoTone, DeleteTwoTone } from "@ant-design/icons";

const NewTaskList = () => {
  const handleDone = (e) => {
    console.log(e);
  };
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
              <List.Item.Meta
                avatar={
                  <CheckCircleTwoTone
                    style={{ fontSize: "24px" }}
                    onClick={() => handleDone(item)}
                  />
                }
                title={item.title}
                description={item.discription}
              />
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

export default NewTaskList;
