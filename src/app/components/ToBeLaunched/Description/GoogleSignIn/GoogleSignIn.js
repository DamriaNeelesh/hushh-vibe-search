import styles from "./GoogleSignIn.module.scss";
import gSignInButton from "../resources/gsignin-button.svg";
import services from "../../../../services/services";
import Image from "next/image";
import figtree from "../../../../fonts/Figtree";
import { Box, useMediaQuery } from "@chakra-ui/react";

export default function GoogleSignIn() {
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [isTablet] = useMediaQuery("(max-width: 768px)");

  const handleGoogleSignIn = async () => {
    try {
      await services.authentication.googleSignIn();
    } catch (error) {}
  };

  return (
    <Box 
      className={styles.Description__SignIn}
      width="100%"
      maxWidth={{ base: "85%", sm: "75%", md: "60%", lg: "50%" }}
      margin="0 auto"
      padding={{ base: "0.5rem", md: "1rem" }}
    >
      <Box 
        className={styles.Description__GoogleSignIn}
        position="relative"
        width="100%"
        height="auto"
        cursor="pointer"
      >
        <Image
          src={gSignInButton.src}
          onClick={handleGoogleSignIn}
          alt="Vibe Search Google Sign In"
          width={isMobile ? 240 : isTablet ? 300 : 340}
          height={isMobile ? 36 : isTablet ? 42 : 48}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
            maxWidth: isMobile ? "240px" : "auto"
          }}
          priority
        />
      </Box>
      <Box 
        className={`${styles.Description__EarlyAccessNotifier} ${figtree.className}`}
        textAlign="center"
        fontSize={{ base: "0.8rem", sm: "0.9rem", md: "1rem" }}
        marginTop={{ base: "0.5rem", md: "0.75rem" }}
        padding={{ base: "0.25rem", md: "0.5rem" }}
      >
        <div>
          Get <strong>early access</strong> and{" "}
          <strong>exclusive updates</strong>
        </div>
      </Box>
    </Box>
  );
}
