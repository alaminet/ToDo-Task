import React from "react";
import HeaderHome from "../components/HeaderHome";
import { Card, Col, Divider, Flex, Row } from "antd";
import NewTask from "../components/NewTask";
import NewTaskList from "../components/NewTaskList";
import CompleteTaskList from "../components/CompleteTaskList";

const Home = () => {
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
              <NewTask />
            </div>
            <div>
              <NewTaskList />
            </div>
            <Divider />
            <div>
              <CompleteTaskList />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Home;
