"use client";
import {
  Box,
  Container,
  Divider,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import Resources from "../../resources/resources";
import { useRef, useState } from "react";
import { Link } from "react-scroll";
import Header from "../AboutUs/Header/Header";
import { HamburgerIcon } from "@chakra-ui/icons";
import Head from "next/head";
import utilities from "../utilities/utilities";
import figtree from "../../fonts/Figtree";
const TermsPage = () => {
  const headerHeight = 80;
  const introductionRef = useRef(null);
  const acceptanceTermsRef = useRef(null);
  const descriptionServiceRef = useRef(null);
  const userContentRef = useRef(null);
  const prohibitedConductRef = useRef(null);
  const intellectualPropertyRef = useRef(null);
  const terminationRef = useRef(null);
  const disclaimersRef = useRef(null);
  const limitationLiabilityRef = useRef(null);
  const entireAgreementRef = useRef(null);
  const changesTermsRef = useRef(null);
  const contactUsRef = useRef(null);
  const linksToPoliciesRef = useRef(null);
  const infoCollectRef = useRef(null);
  const howWeUseRef = useRef(null);
  const sharingInfoRef = useRef(null);
  const privacyChoicesRef = useRef(null);
  const dataSecurityRef = useRef(null);
  const childrenPrivacyRef = useRef(null);
  const changesPolicyRef = useRef(null);

  const infoYouProvideRef = useRef(null);
  const infoCollectedAutomaticallyRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let [page, setPage] = useState("PrivacyPolicy");

  const handleLinkClick = (section) => {
    onClose();
  };

  return (
    <>
      <Header page={page} setPage={setPage}></Header>

      <Container minW={"100%"} bg={"#FFFFFF"} className={figtree.className}>
        <Stack direction={{ base: "column", lg: "row" }} spacing={10}>
          {/* Left sidebar for table of contents */}

          <Box
            display={{ base: "block", lg: "none" }}
            position="fixed"
            top="0"
            left="0"
            zIndex="100"
          >
            <IconButton
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Open Table of Contents"
              onClick={isOpen ? onClose : onOpen} // Toggle drawer open/close
              m={4}
            />
          </Box>

          <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Table of Contents</DrawerHeader>
              <DrawerBody>
                <VStack align="start" spacing={3}>
                  <UnorderedList
                    styleType="none"
                    spacing={2}
                    fontWeight={"400"}
                    lineHeight={{ md: "50px", base: "36px" }}
                    fontSize={{ md: "1rem", base: "0.6rem" }}
                  >
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="introduction"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Acceptance of Terms
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="information-collect"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Description of Service
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="how-we-use"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        User Content
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="sharing-info"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Prohibited Conduct
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="privacy-choices"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Intellectual Property
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="data-security"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Termination
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="children-privacy"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Disclaimers
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="changes-policy"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Limitation of Liability
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="contact-us"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Indemnification
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="links-policies"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Entire Agreement
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="links-policies"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Changes to Terms
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="links-policies"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Contact Us
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>

          <Box
            w={{ base: "100%", lg: "25%" }}
            position="sticky"
            top={4}
            display={{ base: "none", lg: "block" }}
            py={10}
            alignSelf="flex-start"
          >
            <VStack align="start" spacing={3}>
              <UnorderedList
                styleType="none"
                spacing={2}
                fontWeight={"400"}
                lineHeight={{ md: "50px", base: "36px" }}
                fontSize={{ md: "1rem", base: "0.6rem" }}
              >
                <ListItem cursor={"pointer"}>
                  <Link
                    to="introduction"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Acceptance of Terms
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="information-collect"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Description of Service
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="how-we-use"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    User Content
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="sharing-info"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Prohibited Conduct
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="privacy-choices"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Intellectual Property
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="data-security"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Termination
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="children-privacy"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Disclaimers
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="changes-policy"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Limitation of Liability
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="contact-us"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Indemnification
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="links-policies"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Entire Agreement
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="links-policies"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Changes to Terms
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="links-policies"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Contact Us
                  </Link>
                </ListItem>
              </UnorderedList>
            </VStack>
          </Box>
          <Divider
            orientation="vertical"
            borderColor="#CBCBCB"
            borderWidth="2px"
            height="auto"
            alignSelf="stretch"
            mx={4}
            display={{ base: "none", md: "flex" }}
          />
          {/* Main content area */}
          <Box
            w={{ base: "100%", lg: "75%" }}
            mt={{ md: "0", base: "3rem" }}
            mr={{ md: "4rem", base: "1rem" }}
            p={{ md: 12, base: 2 }}
          >
            <Stack spacing={8}>
              <Box id="introduction" ref={introductionRef}>
                <Heading
                  fontWeight={"700"}
                  letterSpacing={"0.005rem"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  color={"#C9AD9D"}
                  as={"h1"}
                >
                  Vibe Search Terms of Use
                </Heading>
                <Text
                  mt={4}
                  color={"#273434"}
                  fontWeight={"600"}
                  letterSpacing={"0.005rem"}
                  fontSize={{ md: "1.5rem", base: "0.8rem" }}
                  lineHeight={{ md: "40px", base: "32px" }}
                  as={"h2"}
                >
                  We get it, Terms of Service aren't exactly the most thrilling
                  read. But taking a few minutes to understand what you can
                  expect from Vibe Search, and what we expect in return, helps
                  ensure a smooth and enjoyable experience for everyone.
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  letterSpacing={"0.005rem"}
                  lineHeight={"25px"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  color={"#000000"}
                >
                  These Terms of Use ("Terms") govern your access to and use of
                  the Vibe Search website, mobile application, and any related
                  services (collectively, the "Service"). The Service is owned
                  and operated by Vibe Search, a subsidiary of Hushone, Inc.
                  ("Vibe Search," "we," "us," or "our").
                </Text>
                <Text
                  letterSpacing={"0.005rem"}
                  fontWeight={"500"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  lineHeight={"25px"}
                  color={"#624737"}
                >
                  Last updated: 19 October 2024
                </Text>
              </Box>

              {/* <Divider /> */}

              <Box id="information-collect" ref={infoCollectRef}>
                <Text
                  fontWeight={"700"}
                  letterSpacing={"0.005rem"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  fontSize={{ md: "1.5rem", base: "0.8rem" }}
                  color={"#624737"}
                >
                  Acceptance of Terms
                </Text>
                <Text
                  spacing={3}
                  letterSpacing={"0.005rem"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  mt={4}
                  color={"#000000"}
                  fontWeight="400"
                >
                  By accessing or using the Service, you agree to be bound by
                  these Terms. If you disagree with any part of the Terms, you
                  may not access or use the Service.
                </Text>

                <Text
                  letterSpacing={"0.005rem"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  mt={4}
                  color={"#000000"}
                  fontWeight="700"
                  ref={infoCollectedAutomaticallyRef}
                  id="information-collected-automatically"
                >
                  Description of Service
                </Text>
                <Text
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                >
                  Vibe Search is a visual and semantic search engine that helps
                  you discover and purchase products that match your unique
                  style. You can interact with the Service by:
                </Text>
                <UnorderedList
                  spacing={3}
                  letterSpacing={"0.005rem"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  mt={4}
                  color={"#000000"}
                  fontWeight="400"
                >
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>
                      Style Preferences:{" "}
                    </span>{" "}
                    Indicate your style preferences by swiping left or right on
                    various style options (e.g., boho, minimal, vintage).
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>Text Search:</span> Use
                    natural language to search for products.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>Image Search:</span>{" "}
                    Upload an image to find matching or similar products.
                  </ListItem>
                </UnorderedList>
                <Text
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  Vibe Search partners with various brands and retailers
                  ("Partners") to provide you with a curated selection of
                  products. When you click on a product listing on Vibe Search,
                  you will be redirected to the Partner's website to complete
                  your purchase. We participate in affiliate marketing programs,
                  which means we may earn a commission from qualifying purchases
                  made through our links.
                </Text>
              </Box>

              {/* <Divider /> */}

              <Box id="how-we-use" ref={howWeUseRef}>
                <Text
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  User Content
                </Text>
                <Text
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  You are solely responsible for any content, including images,
                  text, or other materials that you upload, submit, or otherwise
                  make available through the Service ("User Content"). You
                  represent and warrant that you own all rights to your User
                  Content or have obtained all necessary licenses and
                  permissions to use it in connection with the Service.
                </Text>
              </Box>

              <Box id="sharing-info" ref={sharingInfoRef}>
                <Text
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Prohibited Conduct
                </Text>
                <Text
                  spacing={3}
                  letterSpacing={"0.005rem"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  my={4}
                  lineHeight={"25px"}
                  color={"#000000"}
                  fontWeight="400"
                >
                  When using the Service, you agree not to:
                </Text>
                <UnorderedList
                  spacing={3}
                  letterSpacing={"0.005rem"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  mt={4}
                  lineHeight={"25px"}
                  color={"#000000"}
                  ml={{ md: 8, base: 4 }}
                  fontWeight="400"
                >
                  <ListItem>
                    Violate any applicable laws or regulations.
                  </ListItem>
                  <ListItem>
                    Violate any applicable laws or regulations.
                  </ListItem>
                  <ListItem>
                    Upload or transmit viruses, malware, or other harmful code.
                  </ListItem>
                  <ListItem>
                    Interfere with or disrupt the Service or its servers or
                    networks.
                  </ListItem>
                  <ListItem>
                    Attempt to gain unauthorised access to the Service or its
                    systems.
                  </ListItem>
                  <ListItem>
                    Collect or harvest any personally identifiable information
                    from the Service.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box id="privacy-choices" ref={privacyChoicesRef}>
                <Text
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Intellectual Property
                </Text>
                <Text
                  color={"#000000"}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  The Service and its content, including but not limited to
                  text, graphics, logos, images, software, and the compilation
                  thereof (collectively, the "Vibe Search Content"), are the
                  property of Vibe Search or its licensors and are protected by
                  copyright, trademark, and other intellectual property laws.
                </Text>
              </Box>

              <Box id="data-security" ref={dataSecurityRef}>
                <Text
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Termination
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  Vibe Search may terminate or suspend your access to the
                  Service, with or without cause, for any reason permitted by
                  applicable law, including but not limited to your breach of
                  these Terms.
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  We will endeavour to provide you with notice of any
                  termination or suspension, including the reason for the
                  action, where commercially reasonable and permissible under
                  applicable law. However, we reserve the right to terminate or
                  suspend your access to the Service immediately and without
                  notice if required to do so by law or if we have a good faith
                  belief that such action is reasonably necessary to (a) comply
                  with legal process, (b) enforce these Terms, (c) respond to
                  your violation of the rights of a third party, or (d) protect
                  the rights, property or safety of Vibe Search, our users, or
                  the public.
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  You may terminate your account at any time.
                </Text>
              </Box>

              <Box id="children-privacy" ref={childrenPrivacyRef}>
                <Text
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Disclaimers
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING, BUT NOT
                  LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED OR
                  ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE
                  SERVICE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </Text>
              </Box>

              {/* <Divider /> */}

              <Box id="changes-policy" ref={changesPolicyRef}>
                <Heading
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Limitation of Liability
                </Heading>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VIBE SEARCH
                  AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
                  AND LICENSORS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                  ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE
                  THE SERVICE.
                </Text>
              </Box>

              <Box id="changes-policy" ref={changesPolicyRef}>
                <Text
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Limitation of Liability
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, VIBE SEARCH
                  AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS,
                  AND LICENSORS WILL NOT BE LIABLE FOR ANY DIRECT, INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                  ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE
                  THE SERVICE.
                </Text>
              </Box>

              <Box id="changes-policy" ref={changesPolicyRef}>
                <Text
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Entire Agreement
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  These Terms constitute the entire agreement between you and
                  Vibe Search relating to your access to and use of the Service.{" "}
                </Text>
              </Box>

              <Box id="changes-policy" ref={changesPolicyRef}>
                <Text
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Changes to Terms
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  We may revise these Terms at any time by posting the revised
                  Terms on the Service. Your continued use of the Service after
                  the effective date of the revised Terms constitutes your
                  acceptance of the revised Terms.
                </Text>
              </Box>
              <Box id="contact-us" ref={contactUsRef}>
                <Text
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Contact Us
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  If you have any questions or concerns about our privacy
                  practices, please contact us at:
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  <span style={{ fontWeight: "700" }}>Email:</span>{" "}
                  info@hush1one.com
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  <span style={{ fontWeight: "700" }}>Address:</span> 1021 5th
                  St W, Kirkland, WA 98033, United States of America (USA)
                </Text>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
      <utilities.Footer></utilities.Footer>
    </>
  );
};

export default TermsPage;
