import utilities from "../utilities/utilities";
import error404 from "./resources/error404.svg";
export default function ErrorPage404() {
  return (
    <div>
      <utilities.ErrorPage
        title={"Oops! Looks like this page went out of style."}
        subTitle={
          "Don't worry, your vibe is still on point. Head back to the homepage or explore some of our curated collections below."
        }
        code={"404"}
        image={error404.src}
      ></utilities.ErrorPage>
    </div>
  );
}
