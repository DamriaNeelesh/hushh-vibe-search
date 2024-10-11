import config from "../../resources/config/config";
export default async function googleSignIn() {
  // https://vibesearch-vercel.vercel.app
  // http://localhost:3000
  const supabase = config.supabaseClient;
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: config.redirect_url,
      queryParams: {
        access_type: 'offline',
        prompt: 'select_account',
      }
    }
  }).then(() => {
  })
}