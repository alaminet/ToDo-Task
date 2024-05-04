import React, { useEffect, useRef, useState } from "react";
import { Avatar, Divider, Flex, Form, Modal } from "antd";
import defaultimg from "../assets/defaultProPic.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Loginuser } from "../Slice/UserSlice";
const HeaderHome = () => {
  const user = useSelector((user) => user.loginSlice.login);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [imageName, setImageName] = useState("");
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = async (event) => {
    setOpen(false);
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    const result = await axios.post("http://localhost:5000/", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    setImageName(`http://localhost:5000${result.data}`);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (imageName) {
      const imgSendDatabase = async () => {
        try {
          const data = await axios
            .put(
              "http://localhost:8000/v1/api/auth/profilePic",
              {
                userImg: imageName,
                userID: user._id,
              },
              {
                headers: {
                  Authorization: "TeEW3B93guUofdP",
                },
              }
            )
            .then((e) => {
              dispatch(Loginuser({ ...user, avater: imageName }));
              localStorage.setItem(
                "user",
                JSON.stringify({ ...user, avater: imageName })
              );
            });
        } catch (error) {
          console.log(error);
        }
      };
      imgSendDatabase();
    }
  }, [imageName]);
  return (
    <>
      <div>
        <Flex vertical align="center">
          <Avatar
            onClick={showModal}
            style={{
              backgroundColor: "#fde3cf",
              color: "#f56a00",
              cursor: "pointer",
            }}
            size={80}
            src={user.avater || defaultimg}
          />
          <h2
            style={{
              marginBottom: "0",
              marginTop: "14px",
              color: "#444444",
              fontSize: "30px",
            }}
          >
            Task Of {user.username}
          </h2>
          <p style={{ margin: "0", color: "#BEBEBE", fontSize: "14px" }}>
            Super Easiest Way Track Your Daily Task !
          </p>
          <Divider style={{ margin: "13px 0", color: "#D9D9D9" }} />
        </Flex>
      </div>
      <div>
        <Modal
          title="Title"
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form>
            <input
              filename={file}
              onChange={(e) =>
                setFile(e.target.files ? e.target.files[0] : null)
              }
              type="file"
              accept="image/*"
            ></input>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default HeaderHome;
