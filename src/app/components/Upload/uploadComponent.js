"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Input,
  HStack,
  Button,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { FiUpload, FiX } from "react-icons/fi";
import Image from "next/image";
import CameraIcon from "../svg/colorcameraIcon.svg";
import styles from "./uploadComponent.module.scss";
const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const toast = useToast();
  const [fileInputElement, setFileInput] = useState(null);
  useEffect(() => {
    setFileInput(document.getElementById("searchBox__fileInput"));
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
  };

  const showComingSoonToast = () => {
    toast({
      title: "Coming Soon!",
      description: "We are working on it.",
      status: "info",
      duration: 5000, // Shortened to a reasonable time
      isClosable: true,
      position: "top-right",
      containerStyle: {
        maxWidth: "320px", // Ensure the width of the toast is limited
        zIndex: 999999, // Make sure it's on top of everything
        position: "fixed", // Ensure it's fixed at the top
      },
      render: ({ onClose }) => (
        <Box
          p={4}
          bg="blue.500"
          color="white"
          borderRadius="md"
          boxShadow="lg"
          textAlign="left"
          onClick={onClose} // Clicking closes the toast
          cursor="pointer"
        >
          <HStack justify="space-between">
            <Text fontWeight="bold">Coming Soon!</Text>
            <FiX size={20} cursor="pointer" onClick={onClose} />
          </HStack>
          <Text fontSize="sm">We are working on it.</Text>
        </Box>
      ),
    });
  };

  return (
    <Box
      //onClick={showComingSoonToast}
      borderRadius="xl"
      p={4}
      bg={"#FFFFFF"}
      textAlign="left"
      mt={{ md: "2rem", base: "1rem" }}
      sx={{
        boxShadow: "0px 4px 6px 0px #0000000D, 0px 4px 50px 0px #00000014",
      }}
      w={"100%"}
      mx="auto"
      display={"flex"}
      flexDirection={"column"}
    >
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        Image Upload
      </Text>

      <Box
        borderWidth="2px"
        borderStyle="dashed"
        borderRadius="md"
        p={4}
        mb={4}
        position="relative"
        textAlign={"center"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {uploadedImage ? (
          <Box
            display={"flex"}
            flexDirection={"column"}
            position="relative"
            textAlign={"center"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image
              src={uploadedImage}
              alt="Hushh Vibe Uploaded"
              boxSize="150px"
              width={"30"}
              height={"30"}
            />
            <Button
              position="absolute"
              top="0"
              right="0"
              size="sm"
              onClick={removeImage}
              colorScheme="red"
              variant="ghost"
            >
              <FiX />
            </Button>
          </Box>
        ) : (
          <>
            <Box
              display={"flex"}
              flexDirection={"column"}
              position="relative"
              textAlign={"center"}
              alignItems={"center"}
              justifyContent={"center"}
              onClick={() => {
                if (fileInputElement) {
                  fileInputElement.click();
                }
              }}
            >
              <Image src={CameraIcon} alt="Scan you vibe" />
              <Text mt={2}>
                Drag your image or{" "}
                <Button as="label" variant="link" cursor="pointer">
                  browse
                  <input
                    type="file"
                    accept="image/*"
                    className={`${styles.uploadComponent__fileInput}`}
                    id="uploadComponent__fileInput"
                    onChange={(event) => {
                      const file = event.target.files[0];

                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const base64String = event.target.result;
                          setFile(base64String);

                          let temp = base64String.split(";");
                          temp = temp[1].split(",");

                          // Storing the image in localStorage
                          localStorage.setItem("image-file", temp[1]);
                          router.push(
                            `/components/SearchResults?imageSearch=${temp[1].slice(
                              -5
                            )}`
                          );
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </Button>
              </Text>
              <Text fontSize="sm" color="gray.500">
                Only support .jpg, .png files
              </Text>
            </Box>
          </>
        )}
      </Box>

      <Flex align="center" my={2}>
        <Box flex="1" borderBottom="1px solid" borderColor="gray.300" />
        <Text fontSize="sm" color="gray.500" mx={2}>
          OR
        </Text>
        <Box flex="1" borderBottom="1px solid" borderColor="gray.300" />
      </Flex>

      <Flex align="center" my={4}>
        <Input
          id="uploadComponent__linkInput"
          placeholder="https://sharefile.xyz/file.jpg"
          flex="1"
          mr={2}
        />
        <Button
          bg="#2D0D3A"
          color={"white"}
          onClick={() => {
            console.log(fileInputElement);
            if (fileInputElement) {
              let url = document.getElementById(
                "uploadComponent__linkInput"
              ).value;
              // Create a File object
              fetch('https://proxy.cors.sh/'+url, {
                headers:{
                  'Access-Control-Allow-Origin': '*'
                }
              })
                .then((response) => response.blob())
                .then((blob) => {
                  const file = new File([blob], "image.jpg", {
                    type: "image/jpeg",
                  });

                  // Create a DataTransfer object
                  const dataTransfer = new DataTransfer();
                  dataTransfer.items.add(file);

                  // Set the files property of the file input element
                  fileInputElement.files = dataTransfer.files;

                  // Trigger the onChange event
                  const event = new Event("change", { bubbles: true });
                  fileInputElement.dispatchEvent(event);
                })
                .catch((error) =>
                  console.error("Error fetching the image:", error)
                );
            }
          }}
        >
          Upload
        </Button>
      </Flex>
    </Box>
  );
};

export default ImageUpload;
