import Link from "next/link";

function Mainnav() {
  return (
    <nav className="bg-mainNav-gray w-full flex py-6 px-5 justify-between">
      <Link href="/">Logo</Link>
      <div className="flex space-x-5">
        <Link href="/">Pricing</Link>
        <Link href="/">Templates</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Sign up for free</Link>
      </div>
    </nav>
  );
}

export default Mainnav;
