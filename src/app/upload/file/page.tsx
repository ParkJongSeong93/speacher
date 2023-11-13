"use client";

import Mainnav from "@/components/common/Mainnav";
import Footer from "@/components/common/Footer";

function Page() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);

    const url = `http://localhost:8080/`;

    const response = await fetch(url + `api/videos`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      alert("업로드에 실패했습니다.");
      return;
    }
    alert("업로드에 성공했습니다.");
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Mainnav />
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
              <button type="submit" className="bg-mainNav-purple py-2 px-6 text-white">
                Submit
              </button>
            </div>
            <input
              name="extension"
              type="file"
              accept="video/*"
              multiple={false}
              className="bg-uploadBg-gray w-full py-2 pl-1.5 mb-3.5"
            />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
