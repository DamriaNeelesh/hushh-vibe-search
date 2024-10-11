export default async function getUserDetails(setUserDetails){
    let localCreds=localStorage.getItem('sb-eaeokyefsdfamwqqzfko-auth-token');
    console.log(localCreds)
    let localCredsJSON=JSON.parse(localCreds? localCreds: '{}')
    let userDetails={
        "data":localCredsJSON
    }
    setUserDetails(userDetails);
}