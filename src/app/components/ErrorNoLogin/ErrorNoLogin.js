import utilities from "../utilities/utilities";
import error400 from "./resources/error400.svg";
import config from "../../resources/config/config";
export default function ErrorPage400() {
  return (
    <div>
      <utilities.ErrorPage
        title={"Access Denied: Login Required"}
        subTitle={
          <div>
            Oops! It looks like you're not logged in. Please log in to unlock
            access to this page. Click the button below to log in and continue
            your journey.
            <div>
              <strong>
                <a href={config.redirect_url}>Head to Home to log in</a>
              </strong>
            </div>
          </div>
        }
        code={"401"}
        image={error400.src}
      ></utilities.ErrorPage>
    </div>
  );
}
