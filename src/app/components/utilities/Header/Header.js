"use client";
import { HStack, Flex, Image } from "@chakra-ui/react";
import { FiHeart } from "react-icons/fi";
import utilities from "../utilities";
import VibeText from "../../svg/vibeText.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Resources from "../../../resources/resources";

export default function Header() {
  let router = useRouter();

  return (
    <HStack
      bg="white"
      py={4}
      position="sticky"
      top={0}
      textAlign={{ md: "center", base: "left" }}
      zIndex={100}
      alignItems={{ base: "center" }}
      justifyContent={{ md: "space-between", base: "center" }}
      mx={{ md: "4rem", base: "1rem" }}
      // borderBottom="1px solid #E2E8F0"
    >
      <Flex
        gap={{ md: "1rem", base: "1rem" }}
        align="center"
        flexDirection={"column"}
        justifyContent={{ md: "center", base: "center" }}
        alignItems={"center"}
        display={{ md: "flex", base: "none" }}
        flex={1}
        mx={6}
      >
        <Image
          src={VibeText.src}
          width={"100"}
          height={"40px"}
          style={{ cursor: "pointer" }}
          alt="Vibe Search"
          onClick={() => router.push("/")}
        />
      </Flex>
      <Flex
        gap={{ md: "2rem", base: "1rem" }}
        align="left"
        justifyContent={{ md: "center", base: "center" }}
        alignItems={"center"}
        display={{ md: "none", base: "flex" }}
        flex={1}
        mx={6}
      >
        <Link href={"/"}>
          <Image
            src={Resources.images.VibeLogo.src}
            width={"60"}
            height={"20px"}
            alt="Vibe Search"
          />
        </Link>
      </Flex>
      <HStack spacing={6}>
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.3891 11.2821C13.5644 10.6479 14.4945 9.63956 15.0321 8.41695C15.5696 7.19435 15.6839 5.82734 15.3568 4.53245C15.0297 3.23756 14.2799 2.08882 13.2262 1.26819C12.1725 0.44756 10.8751 0.00195313 9.53956 0.00195312C8.204 0.00195313 6.90661 0.44756 5.8529 1.26819C4.79919 2.08882 4.0494 3.23756 3.7223 4.53245C3.3952 5.82734 3.50948 7.19435 4.04704 8.41695C4.58461 9.63956 5.51472 10.6479 6.69006 11.2821C3.50106 11.8671 0.539062 13.2301 0.539062 14.0001V18.0001H18.5391V14.0001C18.5391 13.2301 15.5771 11.8681 12.3891 11.2821ZM13.5391 6.00014C13.5391 7.061 13.1176 8.07842 12.3675 8.82857C11.6173 9.57871 10.5999 10.0001 9.53906 10.0001C8.4782 10.0001 7.46078 9.57871 6.71064 8.82857C5.96049 8.07842 5.53906 7.061 5.53906 6.00014C5.53906 4.93927 5.96049 3.92186 6.71064 3.17171C7.46078 2.42157 8.4782 2.00014 9.53906 2.00014C10.5999 2.00014 11.6173 2.42157 12.3675 3.17171C13.1176 3.92186 13.5391 4.93927 13.5391 6.00014ZM16.5391 14.7481V16.0001H2.53906V14.7481C2.91606 14.5301 3.48606 14.2681 4.21206 14.0081C5.80806 13.4381 7.82606 13.0001 9.53906 13.0001C11.2521 13.0001 13.2691 13.4381 14.8661 14.0091C15.5921 14.2681 16.1621 14.5301 16.5391 14.7491V14.7481Z"
            fill="#222222"
          />
        </svg>
        {Resources.config.featureFlags.wishlist && (
          <Link href={"/wishlist"}>
            <FiHeart size={24} cursor="pointer" />
          </Link>
        )}
      </HStack>
    </HStack>
  );
}
