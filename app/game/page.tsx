import Wrapper from "@/components/global/Wrapper";
import WrapperGame from "@/components/global/WrapperGame";
import React from "react";
import Link from "next/link";
import { fetchGame } from "@/actions/game";

const page = async (): Promise<React.ReactElement> => {
  const data = await fetchGame();


  return (
    <Wrapper title="List Game">
      <div className="skeleton w-full h-2 stats shadow container mx-auto mb-8 "></div>
      <div className="flex xl:flex-row gap-5">
        {data.data &&
          data.data.map((games) => (
            <WrapperGame
              title={games.namagame}
              description={games.description}
              image={games.gambar}
              genre={games.genre}
              children={
                <Link
                  href={games.LinkDownload ? games.LinkDownload : "/error"}
                  className="btn btn-info">
                  Download Game
                </Link>
              }></WrapperGame>
          ))}
      </div>
    </Wrapper>
  );
};

export default page;
