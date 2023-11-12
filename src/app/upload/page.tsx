import Mainnav from "@/components/common/Mainnav";
import Footer from "@/components/common/Footer";
import Link from "next/link";

function Page() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Mainnav />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex justify-center items-center font-bold text-4xl mb-7">
            <Link
              href="/upload/file"
              className="bg-mainNav-purple w-12 h-12 mr-4 rounded-full inline-flex justify-center items-center font-light text-5xl text-white"
            >
              +
            </Link>
            Upload your video
          </div>
          <Link
            href="/upload/file"
            className="w-1/3 border-b-2 border-b-gray-300"
          >
            Or select a file
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
