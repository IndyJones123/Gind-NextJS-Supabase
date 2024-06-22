import { fetchAchivementUsers } from "@/actions/achivement";
import React from "react";
import Image from "next/image";

const page = async (): Promise<React.ReactElement> => {
  const data = await fetchAchivementUsers();

  console.log(data.data);

  return (
    <div className="overflow-x-auto">
      <div className="grid flex-grow h-screen card bg-base-300 rounded-box justify-center">
        <div className="overflow-x-auto flex flex-col gap-5 items-center">
          <h1>Achivement Users</h1>
          <div className="skeleton w-full h-32 stats shadow container mx-auto items-center flex justify-center">
            <img
              src="https://i.ibb.co/PwSNchF/dota-2-0.jpg"
              className="h-32"
              alt=""
            />
          </div>
          <table className="table table-xs table-pin-rows table-pin-cols">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Achivement</th>
                <th>Keberhasilan</th>
                <th>Kesalahan</th>
              </tr>
            </thead>
            <tbody>
              {data.data &&
                data.data
                  .sort((a, b) => b.points - a.points)
                  .map((achivement, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{achivement.email}</td>
                      <td>{achivement.achivement}</td>
                      <td>{achivement.keberhasilan}</td>
                      <td>{achivement.kesalahan}</td>
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
