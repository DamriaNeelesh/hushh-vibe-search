import utilities from "../utilities/utilities";
import error400 from "./resources/error400.svg";
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
            <a>Head to Home to log in</a>
          </div>
        }
        code={"401"}
        image={error400.src}
      ></utilities.ErrorPage>
    </div>
  );
}
