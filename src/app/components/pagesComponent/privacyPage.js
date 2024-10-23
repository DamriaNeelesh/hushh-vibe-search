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
// import Resources from "../resources/resources";
import { useRef, useState } from "react";
import { Link } from "react-scroll";
import Header from "../AboutUs/Header/Header";
import { HamburgerIcon } from "@chakra-ui/icons";
import Head from "next/head";

const PrivacyPolicyPage = () => {
  const headerHeight = 80;
  const introductionRef = useRef(null);
  const infoCollectRef = useRef(null);
  const howWeUseRef = useRef(null);
  const sharingInfoRef = useRef(null);
  const privacyChoicesRef = useRef(null);
  const dataSecurityRef = useRef(null);
  const childrenPrivacyRef = useRef(null);
  const changesPolicyRef = useRef(null);
  const contactUsRef = useRef(null);
  const linksToPoliciesRef = useRef(null);

  const infoYouProvideRef = useRef(null);
  const infoCollectedAutomaticallyRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let [page, setPage] = useState("PrivacyPolicy");

  const handleLinkClick = (section) => {
    onClose();
  };

  return (
    <>
     {/* <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
      </Head> */}

      <Header page={page} setPage={setPage}></Header>

      <Container
        minW={"100%"}
        bg={"#FFFFFF"}
        fontFamily={"Figtree, sans-serif"}
      >
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
                        Introduction
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="information-collect"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Information We Collect
                      </Link>
                      <UnorderedList styleType="circle" pl={4}>
                        <ListItem cursor={"pointer"}>
                          <Link
                            to="information-you-provide"
                            smooth
                            offset={-headerHeight}
                            onSetActive={onClose}
                          >
                            Information You Provide
                          </Link>
                        </ListItem>
                        <ListItem cursor={"pointer"}>
                          <Link
                            to="information-collected-automatically"
                            smooth
                            offset={-headerHeight}
                            onSetActive={onClose}
                          >
                            Information Collected Automatically
                          </Link>
                        </ListItem>
                      </UnorderedList>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="how-we-use"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        How We Use Your Information
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="sharing-info"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Sharing Your Information
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="privacy-choices"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Your Privacy Choices
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="data-security"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Data Security
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="children-privacy"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Children's Privacy
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="changes-policy"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Changes to this Privacy Policy
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="contact-us"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Contact Us
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="links-policies"
                        smooth
                        offset={-headerHeight}
                        onSetActive={onClose}
                      >
                        Links to Hushone Policies
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
                    Introduction
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="information-collect"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Information We Collect
                  </Link>
                  <UnorderedList styleType="circle" pl={4}>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="information-you-provide"
                        smooth
                        offset={-headerHeight}
                        onClick={() => handleLinkClick("introduction")}
                      >
                        Information You Provide
                      </Link>
                    </ListItem>
                    <ListItem cursor={"pointer"}>
                      <Link
                        to="information-collected-automatically"
                        smooth
                        offset={-headerHeight}
                        onClick={() => handleLinkClick("introduction")}
                      >
                        Information Collected Automatically
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="how-we-use"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    How We Use Your Information
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="sharing-info"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Sharing Your Information
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="privacy-choices"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Your Privacy Choices
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="data-security"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Data Security
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="children-privacy"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Children's Privacy
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="changes-policy"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Changes to this Privacy Policy
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="contact-us"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Contact Us
                  </Link>
                </ListItem>
                <ListItem cursor={"pointer"}>
                  <Link
                    to="links-policies"
                    smooth
                    offset={-headerHeight}
                    onClick={() => handleLinkClick("introduction")}
                  >
                    Links to Hushone Policies
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
                  as={'h1'}
                >
                  Vibe Search Privacy Policy
                </Heading>
                <Text
                  mt={4}
                  color={"#273434"}
                  fontWeight={"600"}
                  letterSpacing={"0.005rem"}
                  fontSize={{ md: "1.5rem", base: "0.8rem" }}
                  lineHeight={{ md: "40px", base: "32px" }}
                  as={'h2'}
                >
                  Your style choices and searches help us tailor Vibe Search
                  just for you. We use this information responsibly to deliver a
                  unique and personalised experience.
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  letterSpacing={"0.005rem"}
                  lineHeight={"25px"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  color={"#000000"}
                >
                  At Vibe Search, a service of Hushone, Inc. (“Vibe Search,”
                  "we," "us," "our"), we're dedicated to delivering a unique
                  search experience while safeguarding your privacy. This policy
                  outlines how we collect, use, share, and protect your personal
                  data when you interact with Vibe Search.
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
                  Information We Collect
                </Text>
                <Text
                  letterSpacing={"0.005rem"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  mt={4}
                  color={"#000000"}
                  fontWeight="700"
                  ref={infoYouProvideRef}
                  id="information-you-provide"
                >
                  Information You Provide:
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
                      {" "}
                      Account Information:{" "}
                    </span>
                    If you choose to create an account, we collect information
                    like your name and email address to personalise your
                    experience and manage your account settings.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>
                      {" "}
                      Style Preferences:
                    </span>{" "}
                    Your swiping choices on style options (boho, minimal,
                    vintage, etc.) are used to s your search results but not
                    tied to your identity.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}> Search Queries:</span>{" "}
                    Text you enter in the search bar, including product
                    descriptions, are used to return relevant results.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>Uploaded Images: </span>{" "}
                    If you upload an image to find similar products, the image
                    itself and its visual characteristics are used solely for
                    matching purposes and not stored with identifying
                    information.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>Wishlist:</span> If you
                    choose to create a wish list, we collect information about
                    the products you add to help you keep track of items you
                    like and potentially provide personalised recommendations.
                  </ListItem>
                </UnorderedList>

                <Text
                  letterSpacing={"0.005rem"}
                  fontSize={{ md: "1rem", base: "0.65rem" }}
                  mt={4}
                  color={"#000000"}
                  fontWeight="700"
                  ref={infoCollectedAutomaticallyRef}
                  id="information-collected-automatically"
                >
                  Information Collected Automatically:
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
                      Device Information:{" "}
                    </span>{" "}
                    Data like your device type, operating system, and browser
                    type may be collected to optimise Vibe Search’s performance.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>Usage Data: </span>{" "}
                    Information about how you interact with Vibe Search, such as
                    your search history (not tied to your identity), product
                    clicks, and time spent on pages, is used to improve our
                    service.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>
                      Location Information :
                    </span>{" "}
                    We may collect your general location (e.g., state) based on
                    your IP address to personalise search results with locally
                    available products.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>
                      Cookies and Similar Technologies:{" "}
                    </span>{" "}
                    We use cookies and similar tracking technologies to enhance
                    your experience, provide personalised results, and analyse
                    website traffic.
                  </ListItem>
                </UnorderedList>
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
                  How We Use Your Information
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
                      Personalise Your Search Experience:{" "}
                    </span>{" "}
                    Your style preferences and (optionally) general location are
                    used to tailor search results to your vibe.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>
                      {" "}
                      Improve Vibe Search:
                    </span>{" "}
                    We analyse aggregated usage data to understand user
                    behaviour, identify trends, and improve the functionality
                    and relevance of our search engine.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>
                      Deliver Relevant Advertisements:{" "}
                    </span>{" "}
                    We may use non-identifiable information, such as your
                    general location and product interests, to display ads that
                    may be of interest to you.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>
                      Security and Fraud Prevention:{" "}
                    </span>{" "}
                    We may use collected information to protect Vibe Search and
                    our users from fraudulent or malicious activity.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Divider />

              <Box id="sharing-info" ref={sharingInfoRef}>
                <Text
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Sharing Your Information
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
                      Affiliate Partners:{" "}
                    </span>{" "}
                    When you click on a product you like, you will be redirected
                    to the website of our affiliate partner who offers that
                    product. We may share non-identifiable information about
                    your product interests with our affiliates to ensure you see
                    relevant offerings.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>
                      Service Providers:{" "}
                    </span>{" "}
                    We may engage trusted third-party service providers to
                    assist us in operating Vibe Search. These providers are
                    contractually obligated to handle your data securely and
                    only as instructed by us.
                  </ListItem>
                  <ListItem>
                    <span style={{ fontWeight: "700" }}>Legal Compliance:</span>{" "}
                    We may disclose your information when required to comply
                    with applicable laws, regulations, legal processes, or
                    governmental requests.
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
                  Your Privacy Choices
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
                    Cookies: You can manage your cookie preferences through your
                    browser settings. However, disabling cookies may limit
                    certain functionalities on Vibe Search.
                  </ListItem>
                  <ListItem>
                    Location Information: You can usually prevent Vibe Search
                    from accessing your precise location through your device
                    settings.
                  </ListItem>
                  <ListItem>
                    Do Not Track (DNT) Signals: Vibe Search currently does not
                    respond to DNT signals.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box id="data-security" ref={dataSecurityRef}>
                <Text
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Data Security
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  We implement appropriate technical and organisational security
                  measures to protect your personal data against unauthorised
                  access, disclosure, alteration, or destruction.
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
                  Children's Privacy
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  Vibe Search is not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children. If you believe a child has provided us with their
                  data, please contact us, and we will take steps to delete this
                  information.
                </Text>
              </Box>

              <Divider />

              <Box id="changes-policy" ref={changesPolicyRef}>
                <Text
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Changes to this Privacy Policy
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  We may update this Privacy Policy from time to time. We will
                  notify you of any material changes by posting the revised
                  policy on this page and updating the "Last Updated" date. Your
                  continued use of Vibe Search after the changes become
                  effective will signify your acceptance of the revised policy.
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

              <Box id="links-policies" ref={linksToPoliciesRef}>
                <Heading
                  fontSize={{ md: "1.5rem", base: "0.75rem" }}
                  letterSpacing={"0.005rem"}
                  fontWeight={"700"}
                  lineHeight={{ md: "40px", base: "32px" }}
                  color={"#624737"}
                >
                  Links to Hushone Policies
                </Heading>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  For more detailed information on Hushone's overall privacy
                  practices, please refer to: [Link to Hush1one's Privacy
                  Policy]
                </Text>
                <Text
                  mt={4}
                  fontWeight={"400"}
                  fontSize={{ md: "1rem", base: "0.5rem" }}
                  lineHeight={"25px"}
                  letterSpacing={"0.005rem"}
                >
                  To learn more about Hushone's terms of service, visit: [Link
                  to Hush1one’s Terms of Service page]
                </Text>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default PrivacyPolicyPage;

