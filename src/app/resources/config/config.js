import { createClient } from "@supabase/supabase-js";
import brands from "./brands";
import queries from "./queries";
import genders from "./genders";
import process from "process";
import featureFlags from "./featureFlags";
let redirect_urls = {
  production: "https://vibesearch.ai",
  development: "http://localhost:3000",
  staging: "https://vibesearch-staging.vercel.app",
};
let vibesearchAPIEndpoints = {
  production: "https://vibe-search-service-53407187172.us-east4.run.app",
  development:
    "https://vibe-search-service-staging-53407187172.us-east4.run.app",
  staging: "https://vibe-search-service-staging-53407187172.us-east4.run.app",
};
let monitoringEndpoints = {
  production: "https://vibe-search-service-53407187172.us-east4.run.app",
  development:
    "https://vibe-profile-service-staging-53407187172.us-east4.run.app",
  staging: "https://vibe-profile-service-staging-53407187172.us-east4.run.app",
};
const config = {
  SUPABASE_URL: "https://eaeokyefsdfamwqqzfko.supabase.co",
  SUPABASE_ANON_KEY:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZW9reWVmc2RmYW13cXF6ZmtvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkzNzExODYsImV4cCI6MjAyNDk0NzE4Nn0.iqWMB0debYgPRX5PjtJuIfy5ImxZfC9ol7A4EPFXmFU",
  supabaseClient: null,
  vibesearchAPIEndpoint:
    vibesearchAPIEndpoints[process.env.NEXT_PUBLIC_SITE_ENV?process.env.NEXT_PUBLIC_SITE_ENV:"production"],
  monitoringEndpoint: monitoringEndpoints[process.env.NEXT_PUBLIC_SITE_ENV?process.env.NEXT_PUBLIC_SITE_ENV:"production"],
  guestModeAccessToken:
    "P2H8RNXPvIiPoeM0iJEDjJ2Skk37h5pScMQF5oMRUXm3dKoUC2wxrWImx5ccA9VOrOoeaLcMQqn57vYDPucTkYnkkH6icUQy09vtd5eIrAIXhBtmUfAmPI3thD2OoUeF",
  redirect_url: redirect_urls[process.env.NEXT_PUBLIC_SITE_ENV?process.env.NEXT_PUBLIC_SITE_ENV:"production"],
  brands: brands,
  queries: queries,
  genders: genders,
  featureFlags: featureFlags
};

function createSupabaseClient() {
  const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY);
  return supabase;
}

config.supabaseClient = createSupabaseClient();

export default config;
