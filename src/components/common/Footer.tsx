import Link from "next/link";
import MainLogo from "@/components/common/MainLogo";

function Footer() {
  return (
    <footer className="h-[500px] items-center justify-center flex bg-footer-purple text-white">
      <div className="container flex h-3/5 flex-wrap">
        <div className="flex-1 h-16">
          <MainLogo />
        </div>
        <div className="flex-1 flex justify-evenly">
          <div className="flex flex-col">
            <p className="font-bold text-xl mb-2">Product</p>
            <Link href="/">Upload</Link>
            <Link href="/">Feedback</Link>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-xl mb-2">Company</p>
            <Link href="/">About us</Link>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-xl mb-2">Language</p>
            <Link href="/">English</Link>
          </div>
        </div>
        <p className="w-full text-lg mt-auto text-center">Speachers. Inc 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
