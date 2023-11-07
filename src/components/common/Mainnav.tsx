"use client";

import Link from "next/link";
import useIsLogIn from "@/components/stores/useIsLogIn";

function Mainnav() {
  const isLogIn = useIsLogIn((state) => state.isLogIn);

  const onClick = () => {
    useIsLogIn.setState({ isLogIn: false });
  }

  return (
    <nav className="bg-mainNav-gray w-full flex py-6 px-5 justify-between">
      <Link href="/">Logo</Link>
      <div className="flex space-x-5">
        <Link href="/">Pricing</Link>
        <Link href="/">Templates</Link>
        {isLogIn ? (
          <Link onClick={onClick} href="/">Log out</Link>
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
