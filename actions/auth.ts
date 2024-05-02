"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { UserStats } from "@/utils/supabase";
import { Console } from "console";

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const dataStats: UserStats = {
    points: 0,
    email: data.email,
    role: "Users",
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error);
    redirect("/error");
  } else {
    await supabase.from("UserStats").insert(dataStats);
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signOut() {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect("/error");
  }

  revalidatePath("/sign-in", "layout");
  redirect("/sign-in");
}

export const fetchUserData = async () => {
  const supabase = createClient();
  return await supabase.auth.getUser();
};
