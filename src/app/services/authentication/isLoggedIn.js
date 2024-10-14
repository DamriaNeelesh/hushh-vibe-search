import services from '../services'
export default async function isLoggedIn(setIsLoggedIn){
    let userDetails = await services.authentication.getUserDetails();
    setIsLoggedIn? setIsLoggedIn(!(userDetails.data==null)): '';
    return !(userDetails.data==null);
}