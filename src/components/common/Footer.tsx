import Link from "next/link";

function Footer() {
  return (
    <footer className="flex flex-col bg-footer-purple pt-36 px-5 text-white">
      <div className="flex">
        <div className="flex-1 flex justify-center items-center">Logo</div>
        <div className="flex-1 flex justify-evenly">
          <div className="flex flex-col">
            <p>Product</p>
            <Link href="/">Upload</Link>
            <Link href="/">Feedback</Link>
          </div>
          <div className="flex flex-col">
            <p>Company</p>
            <Link href="/">About us</Link>
          </div>
          <div className="flex flex-col">
            <p>Language</p>
            <Link href="/">English</Link>
          </div>
        </div>
      </div>
        <p className="w-full text-center py-24">Speachers. Inc 2023</p>
    </footer>
  );
}

export default Footer;
