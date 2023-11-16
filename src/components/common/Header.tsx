"use client";

import Link from "next/link";
import useAuthStore from "@/stores/useAuthStore";
import React from "react";
import { useRouter } from "next/navigation";
import fetchPostLogOut from "@/lib/helpers/fetchPostLogOut";
import MainLogo from "@/components/common/MainLogo";
import { Button } from "@/components/ui/button";

function Header() {
  const router = useRouter();
  const isLogIn = useAuthStore((state) => state.isLogIn);
  const linkForFeedbackBtn = (isLogIn) ? "/feedback" : "/login";

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await fetchPostLogOut();
      alert("로그아웃 성공");
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("알 수 없는 에러");
      }
    }
  };

  return (
    <header className="bg-mainNav-purple w-full h-20 flex py-4 px-5">
      <div className="container h-full flex justify-between items-center text-white">
        <Link href="/" className="h-3/4">
          <MainLogo />
        </Link>
        <div className="flex space-x-5 items-center">
          <Button asChild variant="ghost">
            <Link href={linkForFeedbackBtn}>Feedback</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/">About us</Link>
          </Button>

          <Button variant="ghost">
            {isLogIn ? <span>Guest 1</span> : <Link href="/login">Log in</Link>}
          </Button>

          <Button asChild variant="outline" className="text-primary">
            {isLogIn ? (
              <span onClick={onClick} className="cursor-pointer">Log out</span>
            ) : (
              <Link href="/signup">Join us</Link>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
