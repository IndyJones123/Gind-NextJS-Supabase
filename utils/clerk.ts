import { currentUser } from "@clerk/nextjs/server";

export interface IUser {
  password: string | undefined;
  username?: string | null | undefined;
  email?: string | null | undefined;
  avatar: string | undefined;
}

export const getUserData = async (): Promise<IUser> => {
  const user = await currentUser();

  const email = user?.emailAddresses[0].emailAddress;
  const username = user?.username;
  const avatar = user?.imageUrl;
  const password = user?.;

  return { email, username, avatar, password };
};
