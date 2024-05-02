"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const datalogin = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data, error } = await supabase.auth.signInWithPassword(datalogin);

  if (error) {
    redirect("/error");
  }

  const { data: userData, error: userError } = await supabase
    .from("UserStats")
    .upsert({ last_online: data.user?.last_sign_in_at })
    .eq("email", data.user.email);

  revalidatePath("/", "layout");
  redirect("/");
}
