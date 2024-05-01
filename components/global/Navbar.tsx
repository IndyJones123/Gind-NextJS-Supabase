import React from "react";
import Link from "next/link";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="container flex mx-auto justify-between p-4">
        <Link href="/" className="btn btn-ghost text-xl">
          Sistem Informasi Game
        </Link>
      </div>
      <NavbarButton />
    </div>
  );
};

export default Navbar;
