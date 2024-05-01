import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SECRET_KEY as string
);

export interface UserStats {
  email: string;
  role: string | null;
  points: number;
  created_at?: string;
}

export interface Game {
  namagame: string;
  gambar: string;
  description: string;
  genre?: string[];
  LinkPortal: string;
  LinkDownload: string;
}
