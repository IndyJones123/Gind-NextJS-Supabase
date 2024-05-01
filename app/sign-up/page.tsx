import Wrapper from "@/components/global/Wrapper";
import Link from "next/link";
import React from "react";
import { signup } from "@/actions/auth";

const Page = () => {
  return (
    <Wrapper title="Sign Up Your Account">
      <div>
        <form className="flex flex-col bg-emerald-700 w-96 p-8 rounded-lg gap-y-4">
          <h1 className="text-4xl text-center mb-8">Register</h1>

          <label className="input input-bordered flex items-center gap-2">
            {/* Email input */}
          </label>

          <label className="input input-bordered flex items-center gap-2">
            {/* Password input */}
          </label>

          <p>
            Sudah Punya Account?{" "}
            <Link
              href="/sign-in"
              className="text-blue-500 hover:underline hover:text-blue-700">
              <span className="font-semibold">Sign In</span>
            </Link>
          </p>

          <button formAction={signup} className="btn ">
            Register
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Page;
