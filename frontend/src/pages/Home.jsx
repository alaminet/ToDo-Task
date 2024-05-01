import React, { useEffect, useState } from "react";
import HeaderHome from "../components/HeaderHome";
import { Card, Col, Divider, Flex, Row } from "antd";
import NewTask from "../components/NewTask";
import NewTaskList from "../components/NewTaskList";
import CompleteTaskList from "../components/CompleteTaskList";
import axios from "axios";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((user) => user.loginSlice.login);
  const [click, setClick] = useState("");
  const [pendingTask, setPendingTask] = useState([]);
  const [completeTask, setCompleteTask] = useState([]);

  useEffect(() => {
    async function newTask() {
      const taskList = await axios.get(
        "http://localhost:8000/v1/api/task/viewtask",
        {
          headers: {
            Authorization: "TeEW3B93guUofdP",
          },
        }
      );
      let pendingTaskList = [];
      let completeTaskList = [];
      taskList?.data.map((item, i) => {
        if (item?.taskby === user._id) {
          if (item?.status === "pending") {
            pendingTaskList.push({
              key: i,
              id: item._id,
              title: item.title,
              discription: item.discription,
            });
          } else {
            completeTaskList.push({
              key: i,
              id: item._id,
              title: item.title,
              discription: item.discription,
            });
          }
        }
      });
      setPendingTask(pendingTaskList);
      setCompleteTask(completeTaskList);
    }
    newTask();
  }, [click]);

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Card>
            <div>
              <Flex justify="center">
                <HeaderHome />
              </Flex>
            </div>
            <div>
              <NewTask click={setClick} />
            </div>
            <div>
              <NewTaskList tasklist={pendingTask} click={setClick} />
            </div>
            <Divider />
            <div>
              <CompleteTaskList tasklist={completeTask} click={setClick} />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
