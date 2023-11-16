import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

function Page() {
  return (
    <main className="h-screen flex w-1/4 mx-auto flex-col justify-center items-center gap-y-4">
      <div className="flex w-full justify-left items-center font-bold text-4xl mb-7">
        <Button size="icon" className="rounded-full w-min h-min text-6xl">
          <Link href="/upload/file">
            <PlusIcon className="h-10 w-10 m-2" />
          </Link>
        </Button>
        <span className="text-3xl ml-3">Upload your video</span>
      </div>
      <Button
        asChild
        variant="outline"
        className="text-xl font-semibold text-gray-500 py-8 w-full border-0 border-b-4 justify-start"
      >
        <Link href="/upload/file">Or select a folder</Link>
      </Button>
    </main>
  );
}

export default Page;
