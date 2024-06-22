import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SECRET_KEY as string
);

export interface UserStats {
  email: string;
  password: string;
  role: string | null;
  achivement: Array<Record<string, any>>;
  points: number;
  created_at?: string;
}

export interface UserAchivement {
  email: string;
  achivement: string;
  kesalahan: number;
  keberhasilan: number;
}

export interface Game {
  namagame: string;
  gambar: string;
  description: string;
  genre?: string[];
  LinkPortal: string;
  LinkDownload: string;
}
