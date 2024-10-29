import { createClient } from "@supabase/supabase-js";
import brands from "./brands";
import queries from "./queries";
import genders from './genders'
const config = {
  SUPABASE_URL: "https://eaeokyefsdfamwqqzfko.supabase.co",
  SUPABASE_ANON_KEY:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZW9reWVmc2RmYW13cXF6ZmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNzExODYsImV4cCI6MjAyNDk0NzE4Nn0.iqWMB0debYgPRX5PjtJuIfy5ImxZfC9ol7A4EPFXmFU",
  supabaseClient: null,
  vibesearchAPIEndpoint:
    "https://vibe-search-service-53407187172.us-east4.run.app",
  monitoringEndpoint:
    "https://vibe-search-version3-53407187172.us-central1.run.app",
  guestModeAccessToken:
    "P2H8RNXPvIiPoeM0iJEDjJ2Skk37h5pScMQF5oMRUXm3dKoUC2wxrWImx5ccA9VOrOoeaLcMQqn57vYDPucTkYnkkH6icUQy09vtd5eIrAIXhBtmUfAmPI3thD2OoUeF",
  redirect_url:
    process.env.NODE_ENV === "production"
      ? "https://vibesearch.ai"
      : "http://localhost:3000",
  brands: brands,
  queries: queries,
  genders: genders
};

function createSupabaseClient() {
  const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY);
  return supabase;
}

config.supabaseClient = createSupabaseClient();

export default config;
