"use server";
import { redirect } from "next/navigation";

export const createGameAction = async (formData: FormData): Promise<void> => {
  const content = formData.get("content");
  console.log({ content });

  redirect("/dashboard/my-diary");
};
