"use client";
import dynamic from "next/dynamic";
const GoogleSignIn = dynamic(() => import("../GoogleSignIn/GoogleSignIn"), {
  ssr: true,
});

const PostSignInSearchBox = dynamic(
  () => import("../PostSignInSearchBox/PostSignInSearchBox"),
  {
    ssr: true,
  }
);
export default function DynamicSignInWrapper({ isSignedIn, fullName }) {
  return (
    <>
      {!isSignedIn ? (
        <GoogleSignIn />
      ) : (
        <PostSignInSearchBox fullName={fullName} />
      )}
    </>
  );
}
