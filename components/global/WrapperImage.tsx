import Image from "next/image";
import React, { ReactElement } from "react";

type ParamsProps = {
  title: string;
  description: string;
  image: string;
  children?: ReactElement;
};

const WrapperImage = ({
  title,
  children,
  image,
  description,
}: ParamsProps): ReactElement => {
  return (
    <section className="container mx-auto px-4">
      <div className="card lg:card-side bg-base-300 shadow-xl">
        <figure>
          <Image src={image} alt="Doa" className="w-80 h-80 rounded-xl" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <br />
          <div className="card-actions justify-end">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default WrapperImage;
