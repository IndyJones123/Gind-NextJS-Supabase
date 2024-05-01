"use server";

import { createClient } from "@/utils/supabase/server";

export const fetchAchivement = async () => {
  const supabase = createClient();
  return await supabase.from("Achivement").select();
};
