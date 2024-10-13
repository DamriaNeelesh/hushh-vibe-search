import getUserDetails from "./getUserDetails";
import googleSignIn from "./googleSignIn";
import signOut from "./signOut";
import getAccessToken from "./getAccessToken";
const authentication = {
  googleSignIn: googleSignIn,
  getUserDetails: getUserDetails,
  signOut: signOut,
  getAccessToken: getAccessToken,
};
export default authentication;
