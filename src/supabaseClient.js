import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nfzfoojbkktynxvrnlgv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5memZvb2pia2t0eW54dnJubGd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzNTg1MDIsImV4cCI6MjA3ODkzNDUwMn0.QI1JauTrk1Bs-NVuy37_NnKYXgiFds8XsLvCMWGPZVA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
