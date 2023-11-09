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
    <nav className="bg-mainNav-gray w-full flex py-6 px-5 justify-between">
      <Link href="/">Logo</Link>
      <div className="flex space-x-5">
        <Link href="/">Pricing</Link>
        <Link href="/">Templates</Link>
        {isLogIn ? (
          <button onClick={onClick}>Log out</button>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Sign up for free</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Mainnav;
