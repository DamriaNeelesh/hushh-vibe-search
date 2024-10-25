import utilities from "../utilities/utilities";
import error500 from "./resources/error500.svg";
export default function ErrorPage500() {
  return (
    <div>
      <utilities.ErrorPage
        title={"Wardrobe Malfunction! We're having a little technical snafu."}
        subTitle={
          "Our servers are getting a quick style check. Please try again shortly. In the meantime, you can read about us in our about us section."
        }
        code={"500"}
        image={error500.src}
      ></utilities.ErrorPage>
    </div>
  );
}
