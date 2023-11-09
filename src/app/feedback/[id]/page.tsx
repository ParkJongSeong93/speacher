"use client";

import { useEffect, useState } from "react";
import Mainnav from "@/components/common/Mainnav";
import Sidebar from "@/components/feedback/Sidebar";
import Footer from "@/components/common/Footer";

type Props = {
  params: {
    id: number;
  };
};

function Page({ params }: Props) {
  const [feedback, setFeedback] = useState<null>(null);

  useEffect(() => {
    const getFeedback = async () => {
      const url = `http://localhost:8080/`;
      const response = await fetch(url + `api/feedbacks/${params.id}`);
      const data = await response.json();
      setFeedback(data);

      if (!response.ok) {
        alert("피드백을 불러오는데 실패했습니다.");
        return;
      }
    };
    getFeedback();
  }, []);

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Mainnav />
        <div className="flex w-full flex-1">
          <Sidebar />
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="flex w-5/6 h-1/3">
              <div className="flex flex-col w-2/5 mr-2.5">
                <p className="font-bold text-2xl mb-2">Test video {params.id}</p>
                <iframe
                  src="https://www.youtube.com/embed/3mPPMCa8Nxw"
                  title="Top Finishes: Conor McGregor"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                ></iframe>
              </div>
              <div className="flex flex-col w-3/5">
                <p className="font-bold text-2xl mb-2">Transcript</p>
                <div className="w-full h-1 bg-gray-300"></div>
                <div className="w-full h-full my-2 p-1 bg-gray-100 font-light text-xl">test {params.id}</div>
                <div className="w-full h-1 bg-gray-300"></div>
              </div>
            </div>
            <div className="flex-col w-5/6 mt-16">
              <div className="w-full py-3 mb-3 bg-gray-200 text-center">
                A
              </div>
              <div className="w-full py-3 mb-3 bg-gray-200 text-center">
                B
              </div>
              <div className="w-full py-3 mb-3 bg-gray-200 text-center">
                C
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
