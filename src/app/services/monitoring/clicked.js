import axios from "axios";
import Resources from "../../resources/resources";
export default async function clicked(access_token, id) {
  let header = {
    headers: {
      apitoken: access_token,
    },
  };
  try {
    await axios.post(
      Resources.config.monitoringEndpoint + "/clicked",
      {
        product_id: id,
      },
      header
    );
  } catch (e) {}
}
