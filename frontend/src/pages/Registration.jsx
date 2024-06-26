import React, { useState } from "react";
import axios from "axios";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

const Registration = () => {
  const [loadings, setLoadings] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      setLoadings(true);
      const data = await axios.post(
        "http://localhost:8000/v1/api/auth/registration",
        {
          username: values.username,
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            Authorization: "TeEW3B93guUofdP",
          },
        }
      );
      setLoadings(false);
      setMsg(data.message);
      setMsgType("success");
      setTimeout(() => {
        navigate(`/otpverify/${values.email}`);
      }, 1500);
    } catch (error) {
      setLoadings(false);
      setMsg(error.response.data.message);
      setMsgType("error");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      {msg && (
        <Alert
          style={{ minWidth: "500px", margin: "0 auto" }}
          message={msg}
          type={msgType}
          showIcon
          closable
        />
      )}
      <Flex justify="center" style={{ marginTop: "50px" }}>
        <div>
          <h1>Need Your Registration !</h1>
          <Form
            name="registration"
            // labelCol={{
            //   span: 8,
            // }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              maxWidth: 500,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              //   label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
            <Form.Item
              //   label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input type="email" placeholder="Your Email" />
            </Form.Item>

            <Form.Item
              //   label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item style={{ marginBottom: "0" }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loadings}
                disabled={loadings}
              >
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <NavLink to="/login">Already Have an account?</NavLink>
            </Form.Item>
          </Form>
        </div>
      </Flex>
    </>
  );
};

export default Registration;
