import React, { useState } from "react";
import axios from "axios";
import { Alert, List } from "antd";
import { CheckCircleTwoTone, DeleteTwoTone } from "@ant-design/icons";

const NewTaskList = ({ tasklist, click }) => {
  const [loadings, setLoadings] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const handleDone = async (e) => {
    try {
      setLoadings(true);
      const data = await axios.put(
        "http://localhost:8000/v1/api/task/updatetask",
        {
          id: e.id,
        },
        {
          headers: {
            Authorization: "TeEW3B93guUofdP",
          },
        }
      );

      setLoadings(false);
      setMsg(data.data.message);
      setMsgType("success");
      setTimeout(() => {
        setMsg("");
        click(e.id);
      }, 1500);
    } catch (error) {
      setLoadings(false);
      setMsg(error.response.data.message);
      setMsgType("error");
      setTimeout(() => {
        setMsg("");
      }, 2000);
    }
  };
  const handleDelete = (e) => {
    console.log(e);
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
              <List.Item.Meta
                avatar={
                  <CheckCircleTwoTone
                    style={{ fontSize: "24px" }}
                    onClick={() => handleDone(item)}
                    loadings={loadings}
                    disabled={loadings}
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
