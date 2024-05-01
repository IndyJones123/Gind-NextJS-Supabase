import Image from "next/image";
import React, { ReactElement } from "react";

type ParamsProps = {
  title?: string;
  description?: string;
  image?: string;
  children?: ReactElement;
  genre?: string[];
};

const WrapperGame = ({
  title,
  children,
  image,
  description,
  genre = [],
}: ParamsProps): ReactElement => {
  return (
    <section className="container mx-auto px-4 flex justify-center">
      <div className="w-full sm:w-96">
        <div className="card bg-base-300 shadow-xl h-full">
          <figure className="h-48 sm:h-auto">
            <Image
              src={image}
              alt="Shoes"
              className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              {genre &&
                genre.map((genreItem, index) => (
                  <div key={index} className="badge badge-outline">
                    {genreItem}
                  </div>
                ))}
            </div>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrapperGame;
