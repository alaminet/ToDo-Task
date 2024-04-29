import React from "react";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { NavLink } from "react-router-dom";

const Registration = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
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
              <Button type="primary" htmlType="submit">
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
