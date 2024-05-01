import React, { useState } from "react";
import axios from "axios";
import { Alert, Button, Flex, Form, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";

const OTPVerify = () => {
  const [loadings, setLoadings] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      setLoadings(true);
      const data = await axios.post(
        "http://localhost:8000/v1/api/auth/otpverify",
        {
          email: params.email,
          otp: values.otp,
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
        navigate(`/login`);
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
          <h1>Verify Your OTP !</h1>
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
              name="otp"
              rules={[
                {
                  required: true,
                  message: "Please input your OTP!",
                },
              ]}
            >
              <Input placeholder="Your OTP" />
            </Form.Item>

            <Form.Item style={{ marginBottom: "0" }}>
              <Button
                type="primary"
                htmlType="submit"
                loading={loadings}
                disabled={loadings}
              >
                Verify
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Flex>
    </>
  );
};

export default OTPVerify;
