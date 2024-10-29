import axios from "axios";
import Resources from "../../resources/resources";
export default async function redirect(access_token, id) {
  let header = {
    headers: {
      apitoken: access_token,
    },
  };

  try {
    console.log(
      await axios.post(
        Resources.config.monitoringEndpoint + "/redirect",
        {
          product_id: id,
        },
        header
      )
    );
  } catch (e) {}
}
