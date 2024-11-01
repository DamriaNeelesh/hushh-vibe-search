"use client"
import resources from "../../../resources/resources";
import styles from "./Header.module.css";
import { useEffect } from "react";
import services from "../../../services/services";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
export default function Header() {
  let [userDetails, setUserDetails] = useState(null);
  const items = [
    {
      key: "1",
      label: "Logout",
      onClick: ()=>{
        services.authentication.signOut()
      }
      
    },
  ];
  useEffect(() => {
    setInterval(() => {
      userDetails == null
        ? services.authentication.getUserDetails(setUserDetails)
        : "";
    }, 1000);
  }, []);

  return (
    <div className={`${styles.Header}`}>
      <div className={`${styles.Header__Wrapper}`}>
        <img
          className={`${styles.Header__VibeLogo}`}
          src={resources.images.VibeLogo.src}
          alt="Vibe Search"
        ></img>
        <Dropdown
          menu={{
            items,
          }}
        >
          <Space>
            <img
              className={`${styles.Header__GuestAccount}`}
              src={
                userDetails?.data?.user?.user_metadata?.avatar_url
                  ? userDetails?.data?.user?.user_metadata?.avatar_url
                  : resources.images.GuestAccount.src
              }
              alt="user profile"
            ></img>

            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </div>
  );
}
