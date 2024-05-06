import React, { useState } from "react";
import axios from "axios";
import { Alert, Flex, List } from "antd";
import { CheckCircleFilled, DeleteTwoTone } from "@ant-design/icons";

const CompleteTaskList = ({ tasklist, click }) => {
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const handleDelete = async (e) => {
    try {
      const dataDtl = await axios.put(
        "http://localhost:8000/v1/api/task/taskDlt",
        {
          id: e.id,
        },
        {
          headers: {
            Authorization: "TeEW3B93guUofdP",
          },
        }
      );
      setMsg(dataDtl.data.message);
      setMsgType("success");
      setTimeout(() => {
        setMsg("");
        click(dataDtl.data.message);
      }, 1500);
    } catch (error) {
      setMsg("Plz Try again !");
      setMsgType("error");
      setTimeout(() => {
        setMsg("");
      }, 2000);
    }
  };
  return (
    <>
      <div>
        {msg && <Alert message={msg} type={msgType} showIcon closable />}
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
