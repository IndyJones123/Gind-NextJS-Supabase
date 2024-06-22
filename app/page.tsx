import { fetchUserData } from "@/actions/auth";
import Wrapper from "@/components/global/Wrapper";
import WrapperImage from "@/components/global/WrapperImage";
import { createClient } from "@/utils/supabase/server";

import Link from "next/link";

const page = async (): Promise<React.ReactElement> => {
  const supabase = createClient();
  const game = await supabase.from("Game").select();
  const achivement = await supabase.from("Achivement").select();
  const users = await supabase.from("UserStats").select();
  const data = await fetchUserData();

  console.log(data.data.user);

  return (
    <Wrapper title="Welcome To Sistem Informasi Game">
      {data.data.user ? (
        <div>
          {" "}
          <h1 className="justify-center flex items-center mb-5">
            Hey {data.data.user.email} Mari Jelajahi Progress Permainan Anda
          </h1>
          <div className="flex flex-row">
            {game.data &&
              game.data.map((games) => (
                <WrapperImage
                  title={games.namagame}
                  description={games.description}
                  image={games.gambar}
                  children={
                    <Link
                      href={
                        games.LinkPortal
                          ? games.LinkPortal
                          : "/game/specificgame"
                      }
                      className="btn btn-primary">
                      Check Game
                    </Link>
                  }></WrapperImage>
              ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="skeleton w-full h-64 stats shadow container mx-auto mb-8 ">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div className="stat-title">Games</div>
              <div className="stat-value">{game.data?.length}</div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              <div className="stat-title">Users</div>
              <div className="stat-value">{users.data?.length}</div>
              <div className="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                </svg>
              </div>
              <div className="stat-title">Total Achivement</div>
              <div className="stat-value">{achivement.data?.length}</div>
              <div className="stat-desc">↘︎ 90 (14%)</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <WrapperImage
              title="List Game"
              description="Daftar Game Yang Telah Dibuat Oleh GIND"
              image="https://i.ibb.co/sPWc48q/Game.png"
              children={
                <Link href="/game" className="btn btn-primary">
                  Check Game
                </Link>
              }></WrapperImage>
            <WrapperImage
              title="List Achivement"
              description="Lihat Achivement Progress Permainan Pemain"
              image="https://i.ibb.co/4dQK3qF/images.jpg"
              children={
                <Link href="/achivement" className="btn btn-primary">
                  Check Achivement Users
                </Link>
              }></WrapperImage>
            <WrapperImage
              title="Leaderboard"
              description="Raih Peringkat Tertinggi Tunjukkan Kemampuan Terhebat Mu"
              image="https://i.ibb.co/hRD395S/How-to-Create-An-Anonymous-Leaderboard-in-Tableau-CRM-1.jpg"
              children={
                <Link href="/leaderboard" className="btn btn-primary">
                  Check Leaderboard
                </Link>
              }></WrapperImage>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default page;
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
