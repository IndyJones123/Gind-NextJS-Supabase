import Wrapper from "@/components/global/Wrapper";
import WrapperGame from "@/components/global/WrapperGame";
import React from "react";
import Link from "next/link";
import { fetchGame } from "@/actions/game";

const Page = async (): Promise<React.ReactElement> => {
  const data = await fetchGame();

  console.log(data.data);

  return (
    <Wrapper title="List Game">
      <div>
        <div className="skeleton w-full h-2 stats shadow container mx-auto mb-8 "></div>
        <div className="flex xl:flex-row gap-5">
          {data.data &&
            data.data.map(
              (
                game // Change variable name from "games" to "game"
              ) => (
                <WrapperGame
                  key={game.id} // Add a unique key prop using the game's ID or another unique identifier
                  title={game.namagame}
                  description={game.description}
                  image={game.gambar}
                  genre={game.genre}>
                  <Link // Nest children between the opening and closing tags of WrapperGame
                    href={game.LinkDownload ? game.LinkDownload : "/error"}
                    className="btn btn-info">
                    Download Game
                  </Link>
                </WrapperGame>
              )
            )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Page;
