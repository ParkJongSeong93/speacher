"use client";

import Mainnav from "@/components/common/Mainnav";
import Footer from "@/components/common/Footer";

function Page() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);
    const videoInfo = {
      video: formData.get("video") as string,
      title: formData.get("title") as string,
    };

    const url = `http://localhost:8080/`;

    const response = await fetch(url + `api/videos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(videoInfo),
    });

    if (!response.ok) {
      alert("업로드에 실패했습니다.");
    }
    alert("업로드에 성공했습니다.");
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Mainnav />
        <div className="flex w-full flex-1">
          <div className="bg-uploadBg-gray flex flex-col justify-center w-1/4">
            <div className="py-4 pl-3 mb-6 bg-uploadPageBtn-gray">Upload</div>
            <div className="py-4 pl-3 mb-10 bg-uploadPageBtn-gray">
              + New Video
            </div>
            <div className="py-4 pl-3 mb-6 bg-uploadPageBtn-lightgray text-gray-400">
              - list
            </div>
            <div className="py-4 pl-3 mb-6 bg-uploadPageBtn-lightgray text-gray-400">
              - list
            </div>
            <div className="py-4 pl-3 mb-14 bg-uploadPageBtn-lightgray text-gray-400">
              - list
            </div>
            <div className="py-4 pl-3 mb-6 bg-uploadPageBtn-lightgray">
              Option
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center h-full">
            <div className="w-2/3 font-bold text-4xl pr-40 mb-7">
              <div className="bg-uploadPageBtn-gray w-12 h-12 mr-4 rounded-full inline-flex justify-center items-center font-light text-5xl">
                +
              </div>
              Upload your video
            </div>
            <form onSubmit={onSubmit} className="w-2/3">
              <input
                name="title"
                type="text"
                placeholder="Type Title"
                className="bg-uploadBg-gray w-full py-2 pl-1.5 mb-3.5 focus:outline-black"
              />
              <input
                name="video"
                type="file"
                accept="video/*"
                multiple={false}
                className="bg-uploadBg-gray w-full py-2 pl-1.5 mb-3.5"
              />
              <button
                type="submit"
                className="bg-black py-2 px-1.5 text-white"
              >
                Submit Video
              </button>
            </form>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
