import resources from "../../resources/resources";
export default async function signOut() {
  await resources.config.supabaseClient.auth.signOut();
}
