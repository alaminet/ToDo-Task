import React, { useState } from "react";
import { Alert, Button, Col, Form, Input, Row } from "antd";
import axios from "axios";
import { useSelector } from "react-redux";

const NewTask = ({ click }) => {
  const user = useSelector((user) => user.loginSlice.login);
  const [loadings, setLoadings] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");

  const onFinish = async (values) => {
    try {
      setLoadings(true);
      const data = await axios.post(
        "http://localhost:8000/v1/api/task/newtask",
        {
          title: values.title,
          discription: values.discription,
          taskby: user._id,
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
        click(data.data.task._id);
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
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div>
        <Form
          name="taskform"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={20} justify="space-between" align="bottom">
            <Col span={6}>
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: "Your Task!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>

            <Col span={14}>
              <Form.Item
                name="discription"
                label="Discription"
                rules={[
                  {
                    required: true,
                    message: "Your Task!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item>
                <Button
                  loading={loadings}
                  disabled={loadings}
                  style={{ width: "100%" }}
                  type="primary"
                  htmlType="submit"
                >
                  Add
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      {msg && <Alert message={msg} type={msgType} showIcon closable />}
    </>
  );
};

export default NewTask;
