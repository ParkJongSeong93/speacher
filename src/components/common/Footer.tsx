import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-footer-gray pt-36 px-5">
      <div className="flex justify-evenly">
        <div>Logo</div>
        <div className="flex flex-col">
          <p>Product</p>
          <Link href="/">Help</Link>
          <Link href="/">Change log*</Link>
          <Link href="/">Templates</Link>
          <Link href="/">Inspiration</Link>
          <Link href="/">Contact us</Link>
        </div>
        <div className="flex flex-col">
          <p>Company</p>
          <Link href="/">Team*</Link>
          <Link href="/">Team of Service</Link>
          <Link href="/">Privacy Policy</Link>
          <p>Language</p>
          <Link href="/">English</Link>
        </div>
        <div className="flex flex-col">
          <p>Follow us</p>
          <Link href="/">Twitter</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Linkedin</Link>
          <Link href="/">TikTok</Link>
        </div>
      </div>
      <p className="w-full text-center py-24">Speachers. Inc 2023</p>
    </footer>
  );
}

export default Footer;
