"use client";

import Link from "next/link";
import useAuthStore from "@/stores/useAuthStore";
import React from "react";
import { useRouter } from "next/navigation";

function Mainnav() {
  const router = useRouter();
  const isLogIn = useAuthStore((state) => state.isLogIn);

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const url = `http://localhost:8080/`;
    const response = await fetch(url + `api/members/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json", credentials: "include" },
    });
    if (!response.ok) {
      alert("로그아웃에 실패했습니다.");
      return;
    }

    useAuthStore.setState({ isLogIn: false });
    router.push("/");
  };

  return (
    <nav className="bg-mainNav-purple w-full flex py-4 px-5 justify-around items-center text-white">
      <Link href="/">Logo</Link>
      <div className="flex space-x-5 items-center">
        <Link href="/" className="font-bold">
          Feedback
        </Link>
        <Link href="/" className="pr-12">
          About us
        </Link>
        {isLogIn ? (
          <>
            <p>Guest 1</p>
            <button
              onClick={onClick}
              className="text-mainNav-purple bg-white px-4 py-2"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Log in</Link>
            <Link
              href="/signup"
              className="text-mainNav-purple bg-white px-4 py-2"
            >
              Join us
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Mainnav;
