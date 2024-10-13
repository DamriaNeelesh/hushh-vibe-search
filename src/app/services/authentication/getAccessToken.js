import services from "../services";
export default async function getAccessToken(setAccessToken) {
  let userDetails = await services.authentication.getUserDetails();
  if (!(userDetails && userDetails.data)) return null;
  setAccessToken ? setAccessToken(userDetails.data.access_token) : "";
  return userDetails.data.access_token;
}
