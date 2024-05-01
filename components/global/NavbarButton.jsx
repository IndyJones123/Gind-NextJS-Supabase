"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { createClient } from "@/utils/supabase/client";
import { signOut } from "@/actions/auth";

export default function NavbarButton() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      try {
        const { data, error } = await supabase.auth.getUser();
        if (error || !data?.user) {
          setUser(null);
        } else {
          setUser(data.user.email);
        }
      } catch (error) {
        console.error("Error fetching user:", error.message);
      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, [user]);

  const handleSignOut = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    await signOut(); // Call the signOut function
    setUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {user ? (
        <form onSubmit={handleSignOut}>
          <button type="submit" className="btn btn-outline btn-error">
            LogOut
          </button>
        </form>
      ) : (
        <Link className="btn btn-outline btn-warning" href="/sign-in">
          Sign In
        </Link>
      )}
    </>
  );
}
