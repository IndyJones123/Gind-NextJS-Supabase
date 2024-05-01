import Wrapper from "@/components/global/Wrapper";
import Link from "next/link";
import React from "react";
import { login } from "@/actions/login";

const Page = () => {
  return (
    <Wrapper title="Sign In Your Account">
      <div>
        <form className="flex flex-col bg-emerald-700 w-96 p-8 rounded-lg gap-y-4">
          <h1 className="text-4xl text-center mb-8">Login</h1>

          <label className="input input-bordered flex items-center gap-2">
            {/* Email input */}
          </label>

          <label className="input input-bordered flex items-center gap-2">
            {/* Password input */}
          </label>

          <p>
            Belum Punya Account?{" "}
            <Link
              href="/sign-up"
              className="text-blue-500 hover:underline hover:text-blue-700">
              <span className="font-semibold">Sign Up</span>
            </Link>
          </p>

          <button formAction={login} className="btn btn-outline btn-success">
            Login
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Page;
