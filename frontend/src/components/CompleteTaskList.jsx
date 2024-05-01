import React, { useState } from "react";
import axios from "axios";
import { Flex, List } from "antd";
import { CheckCircleFilled, DeleteTwoTone } from "@ant-design/icons";

const CompleteTaskList = ({ tasklist, click }) => {
  const completeTaskData = tasklist.sort().reverse();
  const [loadings, setLoadings] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const handleDelete = (e) => {
    console.log(e);
  };
  return (
    <>
      <div>
        <List
          itemLayout="horizontal"
          dataSource={tasklist}
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
