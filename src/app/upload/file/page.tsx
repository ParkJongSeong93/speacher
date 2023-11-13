"use client";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import fetchPostVideo from "@/lib/helpers/fetchPostVideo";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);

    try {
      await fetchPostVideo(formData);
      alert("비디오 업로드에 성공했습니다");
      router.push("/");
    } catch (error) {
      if (!(error instanceof Error)) {
        alert("알 수 없는 에러");
        return;
      }
      alert(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Header />
        <div className="w-full h-full flex flex-col justify-center items-center">
          <div className="w-1/3 mb-7">
            <p className="font-bold text-2xl">Preview</p>
            <p>Type the title and Submit the video if this is right</p>
          </div>
          <form onSubmit={onSubmit} className="w-1/3">
            <div className="flex w-full mb-3.5">
              <input
                name="title"
                type="text"
                placeholder="Type Title"
                className="bg-uploadBg-gray w-full py-2 pl-1.5 mr-4 focus:outline-black"
              />
              <button
                type="submit"
                className="bg-mainNav-purple py-2 px-6 text-white"
              >
                Submit
              </button>
            </div>
            <label
              htmlFor="extension"
              className="bg-uploadBg-gray w-full py-24 flex justify-center items-center cursor-pointer"
            >
              Select a file
            </label>
            <input
              id="extension"
              name="extension"
              type="file"
              accept="video/*"
              multiple={false}
              className="hidden"
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
