import React, { useState } from "react";
import axios from "axios";
import { Alert, Button, Flex, Form, Input } from "antd";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Loginuser } from "../Slice/UserSlice";

const Login = () => {
  const [loadings, setLoadings] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      setLoadings(true);
      const data = await axios.post(
        "http://localhost:8000/v1/api/auth/login",
        {
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
      setMsg(data.data.message);
      setMsgType("success");
      setTimeout(() => {
        navigate(`/`);
      }, 1500);
      dispatch(Loginuser(data.data.user));
      localStorage.setItem("user", JSON.stringify(data.data.user));
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
          <h1>Login Your Account !</h1>
          <Form
            name="otpverify"
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
              //   label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
            >
              <Input placeholder="Your Email" />
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
                Login
              </Button>
            </Form.Item>
            <Form.Item>
              <NavLink to="/signup">Don't have an account?</NavLink>
            </Form.Item>
          </Form>
        </div>
      </Flex>
    </>
  );
};

export default Login;
