"use client";

import Link from "next/link";
import useAuthStore from "@/stores/useAuthStore";
import React from "react";
import { useRouter } from "next/navigation";
import fetchPostLogOut from "@/lib/helpers/fetchPostLogOut";

function Mainnav() {
  const router = useRouter();
  const isLogIn = useAuthStore((state) => state.isLogIn);

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await fetchPostLogOut();
      alert("로그아웃 성공");
      router.push("/");
    } catch (error) {
      alert(error instanceof Error ? error.message : "알 수 없는 에러");
    }
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
