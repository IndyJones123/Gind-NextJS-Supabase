"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { Game } from "@/utils/supabase";

export const fetchUser = async () => {
  const supabase = createClient();
  return await supabase.from("UserStats").select();
};
