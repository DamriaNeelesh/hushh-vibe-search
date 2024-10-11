import getUserDetails from "./getUserDetails";
import googleSignIn from "./googleSignIn";
import signOut from "./signOut";
const authentication = {
  googleSignIn: googleSignIn,
  getUserDetails: getUserDetails,
  signOut: signOut,
};
export default authentication;
