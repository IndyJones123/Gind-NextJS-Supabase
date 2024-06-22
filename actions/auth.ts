"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { UserAchivement, UserStats } from "@/utils/supabase";
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
    password: data.password,
    achivement: [
      {
        idgame: 1,
        details: "Registered",
        kesalahan: 0,
        keberhasilan: 1,
      },
    ],
    role: "Users",
  };

  // Array of achievements to be inserted
  const achievements: string[] = [
    "Doa Sebelum Makan",
    "Doa Sesudah Makan",
    "Doa Masuk Masjid",
    "Doa Keluar Masjid",
    "Doa Keluar Rumah",
    "Doa Masuk Rumah",
    "Doa Meminta Perlindungan",
    "Doa Sebelum Tidur",
    "Doa Sesudah Tidur",
  ];

  // Create an array of UserAchivement objects
  const achivementUsers: UserAchivement[] = achievements.map((achievement) => ({
    email: data.email,
    achivement: achievement,
    kesalahan: 0,
    keberhasilan: 0,
  }));

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.log(error);
    redirect("/error");
  } else {
    await supabase.from("UserStats").insert(dataStats);
    await supabase.from("AchivementUsers").insert(achivementUsers);
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
