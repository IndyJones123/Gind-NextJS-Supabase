import { fetchUserData } from "@/actions/auth";
import React from "react";
import Wrapper from "@/components/global/Wrapper";
import WrapperGame from "@/components/global/WrapperGame";
import { fetchUser } from "@/actions/UsersStats";
import Image from "next/image";

const page = async (): Promise<React.ReactElement> => {
  const dataUser = await fetchUser();

  console.log(dataUser.data);

  return (
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow h-screen card bg-base-300 rounded-box justify-center">
        <div className="overflow-x-auto flex flex-col gap-5 items-center">
          <h1>Leaderboard / Ranking Pemain Komunitas GIND</h1>
          <div className="skeleton w-full h-32 stats shadow container mx-auto items-center flex justify-center">
            <Image
              src="https://i.ibb.co/PwSNchF/dota-2-0.jpg"
              className="h-32"
              alt=""
            />
          </div>
          <table className="table table-xs table-pin-rows table-pin-cols">
            {/* head */}
            <thead>
              <tr>
                <th>Rank</th>
                <th>Email</th>
                <th>Last Online</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {dataUser.data &&
                dataUser.data
                  .sort((a, b) => b.points - a.points)
                  .map((games, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{games.email}</td>
                      <td>{games.last_online}</td>
                      <td>{games.points}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
