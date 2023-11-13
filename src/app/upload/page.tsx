import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";

function Page() {
  return (
    <main className="h-screen flex w-1/4 mx-auto flex-col justify-center items-center gap-y-4">
      <div className="flex w-full justify-around items-center font-bold text-4xl mb-7">
        <Button size="icon" className="rounded-full w-16 h-16 text-6xl">
          <Link href="/upload/file">
            <PlusIcon className="h-8 w-8" />
          </Link>
        </Button>
        <span>Upload your video</span>
      </div>
      <Button
        asChild
        variant="outline"
        className="text-xl font-semibold text-gray-500 py-8 w-full border-0 border-b-4 justify-start"
      >
        <Link href="/upload/file">Or select a folder</Link>
      </Button>
      <Input
        placeholder="Type Title"
        className="text-xl font-semibold text-gray-500 py-8 w-full border-0 border-b-4 justify-start focus:outline-none focus-visible:ring-offset-0 focus-visible:ring-0"
      />
    </main>
  );
}

export default Page;
