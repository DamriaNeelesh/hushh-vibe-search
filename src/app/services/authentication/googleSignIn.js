import config from "../../resources/config/config";
export default async function googleSignIn() {
  const supabase = config.supabaseClient;
  console.log(config.redirect_url);
  await supabase.auth
    .signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: config.redirect_url,
        queryParams: {
          access_type: "offline",
          prompt: "select_account",
        },
      },
    })
    .then(() => {});
}
