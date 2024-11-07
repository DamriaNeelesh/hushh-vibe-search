"use client";
import resources from "../../../resources/resources";
import styles from "./Header.module.css";
import { useEffect } from "react";
import services from "../../../services/services";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  let [userDetails, setUserDetails] = useState(null);
  const items = [
    {
      key: "1",
      label: "Logout",
      onClick: () => {
        services.authentication.signOut();
      },
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
        <Link href={"/"}>
          <Image
            className={`${styles.Header__VibeLogo}`}
            src={resources.images.VibeLogo.src}
            alt="Vibe Search"
            width={"69"}
            height={"35"}
          />
        </Link>
        <Dropdown
          menu={{
            items,
          }}
        >
          <Space>
            <div className={`${styles.Header__GuestAccount}`}>
              <Image
                src={
                  userDetails?.data?.user?.user_metadata?.avatar_url
                    ? userDetails?.data?.user?.user_metadata?.avatar_url
                    : resources.images.GuestAccount.src
                }
                alt="user profile"
                width={"50"}
                height={"50"}
              />
            </div>
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </div>
  );
}
