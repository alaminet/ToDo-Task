import React from "react";
import { Avatar, Divider, Flex } from "antd";
import defaultimg from "../assets/defaultProPic.png";
import { useSelector } from "react-redux";
const HeaderHome = () => {
  const user = useSelector((user) => user.loginSlice.login);

  return (
    <>
      <div>
        <Flex vertical align="center">
          <Avatar
            style={{
              backgroundColor: "#fde3cf",
              color: "#f56a00",
            }}
            size={80}
            src={defaultimg}
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
    </>
  );
};

export default HeaderHome;
