"use client";
/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Circle,
  useBreakpointValue,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slide1 from "./components/svg/slideImage1.svg";
import Slide2 from "./components/svg/slideImage2.svg";
import Card1 from "./components/svg/card1.svg";
import Card2 from "./components/svg/card2.svg";
import Slide3 from "./components/svg/slideImage3.svg";
import GoogleIcon from "./components/svg/googleIcon.svg";
import AppleIcon from "./components/svg/appleIcon.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SearchGif from "./components/gif/searchGif.gif";
import services from "./services/services";
import VibeText from "./components/svg/vibeText.svg";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "antd/es/modal/Modal";
import Resources from "./resources/resources";
import VibeSearchGif from "../app/resources/images/VibeSearch.gif";
import getUserDetails from "./services/authentication/getUserDetails";
import utilities from "./components/utilities/utilities";
import ToBeLaunched from './components/ToBeLaunched/ToBeLaunched'
const slides = [
  {
    image: Slide1,
    text: "Shop Smoothly,",
    text2: "Save the Maze for Game Night",
  },
  {
    image: VibeSearchGif,
    text: "Type like you talk,",
    text2: " Vibe gets it",
  },
  {
    image: Slide3,
    text: "Spot a style you love?",
    text2: "Let's find its twin",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null); // State for user details

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Check if the user has just signed up
    if (isSignedUp) {
      setIsModalOpen(true);
    }
  }, [isSignedUp]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = await getUserDetails(setUserDetails);
      if (!user) {
        console.error("No user data found.");
      } else {
        console.log("User data set successfully:", user);
        return user;
      }
      console.log("Name:", user.data.user.user_metadata?.full_name);
    };
    fetchUserDetails();
  }, []); // Ensure this runs only on component mount

  useEffect(() => {
    setInterval(() => {
      isSignedUp ? "" : services.authentication.isLoggedIn(setIsSignedUp);
    }, 1000);
  }, []);

  useEffect(() => {
    isSignedUp ? setIsModalOpen(true) : "";
  }, [isSignedUp]);

  const handleGoogleSignIn = async () => {
    try {
      await services.authentication.googleSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Show modal after 1 second

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000); //7 seconds delay for slide change

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <ToBeLaunched></ToBeLaunched>
    // <>
    //   <Modal
    //     title="Welcome Aboard!"
    //     open={isModalOpen}
    //     footer={null}
    //     closable={true}
    //     onCancel={() => {
    //       setIsModalOpen(false);
    //     }}
    //   >
    //     <p>
    //       <Text>Welcome!</Text>
    //       Thank you for registering!
    //       {/* {userDetails?.user?.user_metadata?.full_name} */}
    //       <br></br>We'll notify you by email when we launch on{" "}
    //       <strong>October 20th</strong> and keep you updated on other exciting
    //       developments.
    //       <br></br>
    //       <br></br>
    //       <div className="card-container">
    //         <Image src={Card1} alt="Card Front" className="card card-front" />
    //         {/* <Image src={Card2} alt="Card Back" className="card card-back" /> */}
    //         <Box
    //           zIndex={"1"}
    //           pos={"relative"}
    //           py={{ md: "4rem", base: "2rem" }}
    //           className="card card-back"
    //           px={{ md: "2.5rem", base: "1rem" }}
    //           gap={{ md: "1rem", base: "0.65rem" }}
    //           width={"100%"}
    //           display={"flex"}
    //           flexDirection={"column"}
    //           alignItems={"center"}
    //           justifyContent={"center"}
    //           textAlign={"left"}
    //           bg={"#624737"}
    //           borderRadius={"5px"}
    //         >
    //           <Text
    //             zIndex={"2"}
    //             w={"100%"}
    //             textAlign={"left"}
    //             color={"#C9AD9D"}
    //             fontSize={{ md: "1.5rem", base: "1rem" }}
    //             fontWeight={"600"}
    //             lineHeight={"20px"}
    //             fontFamily={"Afacad, sans-serif"}
    //           >
    //             {userDetails?.data?.user?.user_metadata?.full_name}
    //           </Text>
    //           <Text
    //             zIndex={"2"}
    //             fontWeight={"300"}
    //             fontSize={{ md: "1rem", base: "0.5rem" }}
    //             color={"#FBFAF8"}
    //             lineHeight={"20.8px"}
    //             fontFamily={"Figtree, sans-serif"}
    //           >
    //             Get ready to elevate your fashion game. As a Vibe pioneer,
    //             you'll have <span style={{ fontWeight: "700" }}>exclusive</span>{" "}
    //             access to our groundbreaking features. Enjoy!
    //           </Text>
    //           <Box
    //             as="svg"
    //             // width="131"
    //             height="100%"
    //             viewBox="0 0 131 151"
    //             fill="none"
    //             xmlns="http://www.w3.org/2000/svg"
    //             position="absolute" // Set the position to absolute
    //             // top="20%"
    //             left="40%"
    //             zIndex="0.5" // Ensure it is behind the text
    //           >
    //             <svg
    //               width="131"
    //               height="151"
    //               viewBox="0 0 131 151"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M0.144863 0.161255C-0.42195 0.698349 0.484952 0.811417 6.29479 0.811417C11.6795 0.811417 12.6714 0.86795 12.9832 1.23544C13.1816 1.48985 13.465 2.93153 13.5783 4.42973C13.72 5.92795 13.9468 7.62404 14.1168 8.16113C14.2585 8.69823 14.4002 9.71588 14.4002 10.4226C14.4002 11.1293 14.5419 12.2035 14.712 12.8254C14.882 13.4473 15.1087 14.9172 15.2504 16.0762C15.3638 17.2352 15.7606 19.9207 16.1007 22.0125C16.4407 24.1044 16.8092 26.6485 16.9225 27.6661C17.291 30.4647 17.7728 34.0265 18.2262 36.9946C18.4529 38.4646 18.8497 41.0652 19.0764 42.7896C19.3315 44.4857 19.6432 46.4079 19.7849 47.0298C19.9266 47.6517 20.125 48.9803 20.2101 49.998C20.2951 51.0156 20.5501 52.9096 20.7769 54.2382C21.1453 56.5279 21.5704 59.6657 22.0522 63.4253C22.3073 65.5737 22.8457 68.9941 23.2142 70.6337C23.3559 71.3404 23.6109 73.1778 23.7526 74.7608C23.8943 76.3156 24.1494 77.9551 24.3194 78.3792C24.4612 78.8032 24.6029 79.6795 24.6029 80.3297C24.6029 80.9798 24.7446 82.0258 24.9146 82.6477C25.0563 83.2696 25.3114 84.8526 25.4531 86.1812C25.5948 87.5098 25.8498 89.4603 26.0199 90.5627C26.8418 95.7923 27.4369 99.7499 28.0037 103.849C28.1171 104.782 28.3722 106.506 28.5422 107.665C28.7123 108.824 29.0523 111.17 29.2791 112.895C29.5058 114.591 29.7609 116.456 29.8459 116.993C29.9309 117.531 30.1576 119.198 30.3843 120.668C30.6111 122.138 30.9228 124.117 31.0645 125.05C31.2346 125.983 31.5747 128.272 31.8297 130.138C32.0848 132.004 32.3965 134.124 32.5666 134.831C32.7366 135.537 32.9633 137.403 33.1051 138.93C33.2468 140.456 33.4735 142.35 33.6435 143.141C33.7852 143.905 34.0686 145.686 34.267 147.099C34.4654 148.484 34.7205 149.954 34.8622 150.322L35.1172 151L35.7407 150.406C36.0808 150.095 36.6193 149.332 36.931 148.739C37.2428 148.145 38.2347 146.505 39.1133 145.064C40.0202 143.65 40.757 142.406 40.757 142.322C40.757 142.237 41.1255 141.615 41.6073 140.937C42.0607 140.23 42.4575 139.608 42.4575 139.523C42.4575 139.354 44.2996 136.498 45.3199 135.029C45.6033 134.604 45.8583 134.124 45.8583 133.983C45.8583 133.813 46.4252 132.852 47.1337 131.806C47.8422 130.788 48.409 129.884 48.409 129.771C48.409 129.658 48.9758 128.696 49.6843 127.651C50.3929 126.576 50.9597 125.672 50.9597 125.615C50.9597 125.559 51.2998 125.022 51.6965 124.428C52.0933 123.834 52.5467 123.099 52.6884 122.788C52.8302 122.477 53.1986 121.827 53.5103 121.375C53.8221 120.894 54.1622 120.329 54.2755 120.103C54.3889 119.877 54.814 119.17 55.2391 118.548C55.6359 117.926 56.0893 117.135 56.1744 116.767C56.2877 116.428 56.4861 116.145 56.6278 116.145C56.7412 116.145 56.9112 115.919 57.0246 115.637C57.1096 115.382 57.4497 114.76 57.7614 114.308C58.0732 113.827 58.4133 113.234 58.4983 112.951C58.6117 112.697 58.7817 112.471 58.8951 112.471C59.0368 112.471 59.2635 112.131 59.4335 111.679C59.6036 111.255 60.0003 110.52 60.3121 110.068C61.2757 108.57 61.7008 107.806 61.8992 107.297C61.9842 107.043 62.1826 106.817 62.3243 106.817C62.466 106.817 62.8911 106.138 63.2879 105.319C64.1664 103.538 64.6199 102.775 64.9316 102.548C65.1867 102.351 65.7535 101.418 66.2353 100.457C66.377 100.146 66.8304 99.4107 67.2272 98.817C67.624 98.2234 67.9641 97.5732 67.9641 97.3471C67.9641 97.1209 68.1058 96.9231 68.2475 96.9231C68.4175 96.9231 68.6442 96.6404 68.7859 96.2729C68.9277 95.9337 69.3528 95.1987 69.7212 94.6616C70.0896 94.1245 70.4864 93.4744 70.5997 93.2482C70.7131 93.0221 71.0532 92.4284 71.3649 91.9761C71.6767 91.4956 72.0451 90.8737 72.2152 90.5627C72.3852 90.2518 72.7536 89.6016 73.0654 89.1493C73.3771 88.6688 73.7172 88.0751 73.8022 87.8207C73.8873 87.5663 74.1423 87.2836 74.3691 87.1988C74.5958 87.114 74.7658 86.8031 74.7658 86.5204C74.7658 86.2094 74.9642 85.8137 75.1909 85.6158C75.4177 85.4179 75.6161 85.0505 75.6161 84.7678C75.6161 84.4851 75.8144 84.2024 76.0412 84.0893C76.2679 84.0045 76.4663 83.7501 76.4663 83.524C76.4663 83.2978 76.5513 83.0717 76.693 83.0151C77.0614 82.8455 78.1667 81.1212 78.1667 80.6689C78.1667 80.4427 78.2801 80.2449 78.4501 80.2449C78.5918 80.2449 79.0453 79.5664 79.442 78.7467C80.3489 76.9375 80.6323 76.4287 81.6526 75.1283C82.0777 74.563 82.4178 73.9976 82.4178 73.8845C82.4178 73.7715 82.7862 73.1213 83.268 72.4146C83.7498 71.7362 84.1182 70.9729 84.1182 70.7468C84.1182 70.5489 84.2599 70.351 84.4017 70.351C84.5717 70.351 84.8268 70.0683 84.9685 69.7009C85.1385 69.3616 85.5069 68.6832 85.8187 68.2309C86.1304 67.7504 86.4989 67.1002 86.6406 66.761C86.7823 66.45 87.0657 66.0825 87.2074 65.9695C87.3774 65.8847 87.5191 65.5737 87.5191 65.2628C87.5191 64.9801 87.7175 64.6974 87.9442 64.5843C88.171 64.4995 88.3693 64.1886 88.3693 63.9059C88.3693 63.5949 88.5677 63.1992 88.7945 63.0013C89.0212 62.8034 89.2196 62.4925 89.2196 62.2946C89.2196 62.0967 89.4179 61.8706 89.6447 61.7575C89.8714 61.6727 90.0698 61.4183 90.0698 61.2204C90.0698 60.9943 90.2682 60.6551 90.4949 60.4572C90.7216 60.2593 90.92 59.9201 90.92 59.6939C90.92 59.4678 91.2884 58.7894 91.7135 58.224C92.167 57.6586 92.6205 57.0085 92.7055 56.7823C92.8188 56.5562 93.1306 56.0191 93.414 55.5951C93.8108 54.9732 95.3978 52.4573 96.7298 50.3089C96.8999 50.0545 97.3533 49.3478 97.7501 48.7259C98.1469 48.104 98.5436 47.4538 98.6003 47.3125C98.742 46.9733 101.916 42.1112 104.212 38.7472C105.09 37.4469 106.111 35.8639 106.479 35.2137C106.847 34.5636 107.726 33.2915 108.406 32.4152C109.058 31.5389 109.625 30.7474 109.625 30.6626C109.625 30.2668 117.078 20.0903 119.091 17.744C119.572 17.1787 120.593 15.9631 121.386 15.0585C123.824 12.1752 128.5 7.68057 130.795 5.95622C134.791 3.0446 140.403 0.811417 143.832 0.811417C144.711 0.811417 145.051 0.698349 144.994 0.443939C144.881 0.189529 139.694 0.0764465 120.508 0.0199127C107.131 -0.00836182 95.8796 0.0199127 95.5112 0.104721C94.4909 0.359131 95.0861 0.811417 96.4181 0.811417C98.2319 0.811417 100.811 1.80081 102.568 3.18594C104.212 4.45801 105.742 7.03041 106.309 9.4332C107.386 14.0692 106.337 23.6521 104.155 29.0795C104.013 29.4753 103.787 30.1537 103.645 30.6343C103.333 31.765 101.774 36.2879 101.463 36.9098C101.321 37.1925 101.009 37.8992 100.754 38.4928C99.8757 40.4999 99.4789 41.3762 98.572 43.3549C97.495 45.7012 95.3978 49.8566 94.3209 51.8354C93.8958 52.5986 93.0739 54.1251 92.4787 55.2276C91.9119 56.3018 91.3168 57.3194 91.1751 57.4608C91.0334 57.6304 90.92 57.913 90.92 58.0826C90.92 58.4219 90.2115 59.5809 88.341 62.3794C87.8876 63.0296 87.5191 63.8211 87.5191 64.1038C87.5191 64.3864 87.3207 64.6974 87.094 64.8105C86.8673 64.8953 86.6689 65.0931 86.6689 65.2628C86.6689 65.4041 86.3005 66.0825 85.8187 66.7327C85.3652 67.3546 84.9685 68.0613 84.9685 68.2309C84.9685 68.4288 84.7701 68.6549 84.5434 68.768C84.3166 68.8528 84.1182 69.192 84.1182 69.503C84.1182 69.8139 83.9199 70.1531 83.6931 70.238C83.4664 70.351 83.268 70.5772 83.268 70.8033C83.268 71.0295 82.8996 71.7362 82.4178 72.3863C81.936 73.0082 81.5676 73.7149 81.5676 73.9128C81.5676 74.1107 81.3975 74.3934 81.1992 74.5064C81.0008 74.6195 80.604 75.2414 80.2923 75.8633C79.9805 76.4852 79.3854 77.4463 78.9602 78.0117C78.5068 78.577 78.1667 79.199 78.1667 79.3968C78.1667 79.5947 77.8266 80.2166 77.4015 80.782C76.4096 82.054 75.9845 82.7607 75.6444 83.5522C75.4743 83.8632 75.2193 84.2307 75.0776 84.3438C74.9075 84.4286 74.7658 84.7678 74.7658 85.0787C74.7658 85.3614 74.6241 85.6158 74.4824 85.6158C74.3124 85.6158 74.0573 85.8985 73.9156 86.2377C73.5755 87.0292 73.037 87.849 72.5836 88.3861C72.3852 88.584 72.2152 88.9232 72.2152 89.1211C72.2152 89.3472 72.0168 89.6582 71.7901 89.856C71.5633 90.0539 71.3649 90.4497 71.3649 90.7323C71.3649 91.0433 71.2232 91.2694 71.0815 91.2694C70.9115 91.2694 70.6564 91.5521 70.5147 91.8913C70.3447 92.2588 69.9763 92.909 69.6645 93.3895C69.3528 93.8418 68.9843 94.492 68.8143 94.803C68.6442 95.1139 68.2758 95.7358 67.9641 96.2164C67.6523 96.6687 67.3122 97.2623 67.1989 97.4884C67.0855 97.7146 66.6604 98.4213 66.2069 99.0149C65.7818 99.6085 65.4134 100.287 65.4134 100.513C65.4134 100.711 65.3 100.881 65.1583 100.881C64.8749 100.881 64.7332 101.135 63.4296 103.623C63.0328 104.358 62.551 105.093 62.381 105.206C62.1826 105.319 62.0125 105.686 62.0125 105.969C62.0125 106.28 61.8708 106.534 61.7291 106.534C61.5591 106.534 61.304 106.817 61.1623 107.156C60.9923 107.524 60.6238 108.174 60.3121 108.654C60.0003 109.107 59.6319 109.757 59.4619 110.068C59.2918 110.379 58.9234 111.001 58.6117 111.481C58.2999 111.933 57.9315 112.584 57.7614 112.895C57.2796 113.912 55.9193 115.665 55.6359 115.693C55.4942 115.721 55.3241 115.326 55.2958 114.873C55.2391 114.393 55.0407 112.81 54.7857 111.34C54.5589 109.87 54.1905 107.184 53.9354 105.404C53.6804 103.623 53.3686 101.503 53.1986 100.711C53.0569 99.9195 52.8018 98.0821 52.6601 96.6121C52.405 93.9266 52.15 91.8913 51.3848 87.0292C51.1581 85.5593 50.903 83.8915 50.8463 83.3544C50.5346 80.7537 50.0528 77.6442 49.6843 75.7785C49.4576 74.6478 49.2592 73.0648 49.2592 72.245C49.2592 71.4252 49.0608 70.1531 48.8341 69.3899C48.6074 68.6267 48.409 67.3263 48.409 66.5348C48.409 65.715 48.2673 64.3582 48.0973 63.5384C47.9272 62.6904 47.7005 61.1922 47.5588 60.1745C47.0203 55.8212 46.6236 53.1357 46.2551 51.2983C46.0284 50.2241 45.8583 48.7824 45.8583 48.0475C45.83 47.3408 45.7166 46.1818 45.5466 45.4751C45.4049 44.7684 45.0932 42.6765 44.8664 40.8108C44.6397 38.9451 44.2713 36.2031 44.0162 34.7332C43.7611 33.2632 43.4494 31.0301 43.3077 29.7863C43.166 28.5425 42.9109 27.016 42.7692 26.3941C42.5992 25.7722 42.4575 24.7545 42.4575 24.1326C42.4575 23.5107 42.2874 21.9843 42.0607 20.7404C41.834 19.4967 41.4372 16.9525 41.1821 15.0868C40.9554 13.2211 40.6153 10.7618 40.4453 9.63107C39.9635 6.35197 39.5667 3.01633 39.5384 1.94214L39.4817 0.952759L47.6438 0.811417C52.7735 0.726624 55.7776 0.557007 55.7776 0.38739C55.7776 0.0764465 0.456611 -0.177963 0.144863 0.161255Z"
    //                 fill="#A3765C"
    //                 fill-opacity="0.2"
    //               />
    //             </svg>
    //           </Box>
    //         </Box>
    //       </div>
    //     </p>
    //   </Modal>
    //   <Box
    //     display="flex"
    //     flexDirection={{ base: "column", md: "row" }}
    //     minH="100vh"
    //     gap={{ base: "2rem", md: "0" }}
    //     position="relative"
    //   >
    //     <VStack
    //       align="start"
    //       justify="center"
    //       p={8}
    //       ml={4}
    //       spacing={4}
    //       flex={{ md: 1, base: 2 }}
    //       bg="white"
    //       position="relative" // Allow for absolute positioning inside
    //     >
    //       <Image src={VibeText} alt="Vibe Search" />
    //       <Text
    //         mb={{ md: "2rem", base: "0.5rem" }}
    //         color={"#000000"}
    //         fontSize={{ md: "1.25rem", base: "0.85rem" }}
    //         lineHeight={"24px"}
    //         fontWeight="600"
    //       >
    //         Product Discovery, Elevated
    //       </Text>
    //       <VStack
    //         maxW={{ md: "60%" }}
    //         gap={{ md: "1.2rem" }}
    //         my={{ md: "2rem", base: "1rem" }}
    //         textAlign={"left"}
    //         display={"flex"}
    //         alignItems={"flex-start"}
    //         className="figtree"
    //       >
    //         <Text
    //           color={"#596168"}
    //           fontWeight={"400"}
    //           lineHeight={"21.6px"}
    //           fontSize={{ md: "18px", base: "0.85rem" }}
    //         >
    //           <span style={{ fontWeight: "700" }}>
    //             Launching Oct 20th 2024!{" "}
    //           </span>
    //           <Text
    //             color={"#596168"}
    //             fontWeight={"400"}
    //             lineHeight={"21.6px"}
    //             fontSize={{ md: "18px", base: "0.85rem" }}
    //           >
    //             Vibe Search understands you. We decode natural language to
    //             personalize your product discovery. Get ready for a smarter
    //             shopping experience.
    //           </Text>
    //         </Text>
    //         <Text
    //           color={"#596168"}
    //           fontWeight={"400"}
    //           lineHeight={"21.6px"}
    //           fontSize={{ md: "18px", base: "0.85rem" }}
    //         >
    //           <span style={{ fontWeight: "700" }}>
    //             {!isSignedUp ? "Sign up now" : "Thank you for registering"}{" "}
    //           </span>
    //           for early access and exclusive updates.
    //         </Text>
    //       </VStack>
    //       <div>
    //         {!isSignedUp && (
    //           <Button
    //             textAlign={"left"}
    //             justifyContent={"flex-start"}
    //             gap={{ md: "1rem", base: "0.5rem" }}
    //             color={"#0000008A"}
    //             bg={"#FFFFFF"}
    //             fontWeight={"500"}
    //             cursor={"pointer"}
    //             fontSize={{ md: "1.25rem", base: "1rem" }}
    //             p={"0.6rem"}
    //             w={{ md: "20rem", base: "14rem" }}
    //             borderRadius={"10px"}
    //             boxShadow="0px 2px 3px 0px #0000002B"
    //             onClick={handleGoogleSignIn}
    //           >
    //             <Image src={GoogleIcon} alt="Google Sign Up" /> Sign Up with
    //             Google
    //           </Button>
    //         )}
    //       </div>

    //       {/* Footer-like text at bottom left */}
    //       <Box
    //         position="absolute"
    //         bottom="0" // Align to the bottom
    //         left="0" // Align to the left
    //         p={4} // Add padding
    //       >
    //         <Link href={"https://www.hush1one.com"}>
    //           <Text
    //             fontFamily={"Figtree"}
    //             color={"#0000008A"}
    //             fontSize={{ md: "1rem", base: "0.75rem" }}
    //             fontWeight={"400"}
    //             lineHeight={"11px"}
    //           >
    //             Powered by{" "}
    //             <span style={{ fontWeight: "700", color: "#0000008A" }}>
    //               hushh.ai
    //             </span>
    //             , a Hushh Labs project
    //           </Text>
    //         </Link>
    //         <div className={''}>
    //           <div>About</div>
    //           <div>Contact us</div>
    //         </div>
    //         {/* <utilities.Footer></utilities.Footer> */}
    //       </Box>
    //     </VStack>

    //     <Box
    //       flex={1}
    //       bg="#F4F3F1"
    //       display={{ md: "flex", base: "none" }}
    //       alignItems="center"
    //       justifyContent="center"
    //       position="relative"
    //       flexDirection="column"
    //       minW={"650px"}
    //       // minH={'490px'}
    //       // maxW="640px"
    //       // maxH={'540px'}
    //       as={motion.div}
    //       initial={{ opacity: 0, y: 50 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.5 }}
    //     >
    //       <AnimatePresence mode="wait">
    //         <motion.div
    //           key={currentSlide}
    //           initial={{ opacity: 0 }}
    //           animate={{ opacity: 1 }}
    //           exit={{ opacity: 0 }}
    //           transition={{ duration: 1 }}
    //         >
    //           <Image
    //             src={slides[currentSlide].image}
    //             alt="Slide illustration"
    //             width={"579px"}
    //             height={"286px"}
    //             style={{ zIndex: "1", margin: "0 auto", display: "block" }}
    //           />
    //           <Text
    //             fontSize={{ md: "2rem", base: "1.15rem" }}
    //             fontWeight="700"
    //             textAlign="center"
    //             zIndex="2"
    //             lineHeight={{ md: "41.6px", base: "35px" }}
    //             letterSpacing="-1%"
    //             fontFamily="Figtree"
    //             mt={{ md: "3rem", base: "0.5rem" }}
    //           >
    //             {slides[currentSlide].text}
    //           </Text>
    //           <Text
    //             fontSize={{ md: "2rem", base: "1.15rem" }}
    //             fontWeight="700"
    //             textAlign="center"
    //             zIndex="2"
    //             lineHeight={{ md: "41.6px", base: "35px" }}
    //             letterSpacing="-1%"
    //             fontFamily="Figtree"
    //           >
    //             {slides[currentSlide].text2}
    //           </Text>
    //         </motion.div>
    //       </AnimatePresence>
    //       <HStack spacing={10} mt={16} position="absolute" bottom="60px">
    //         {slides.map((_, index) => (
    //           <Circle
    //             key={index}
    //             size="10px"
    //             bg={currentSlide === index ? "#1E1E48" : "#BBBBCA"}
    //             onClick={() => handleSlideChange(index)}
    //             cursor="pointer"
    //           />
    //         ))}
    //       </HStack>
    //     </Box>
    //   </Box>
    // </>
  );
}
