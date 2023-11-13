"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/feedback/Sidebar";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { BASE_URL } from "@/lib/constant/url";

type Props = {
  params: {
    id: number;
  };
};

function Page({ params }: Props) {
  const [feedback, setFeedback] = useState<null>(null);
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") ?? "Overall";

  useEffect(() => {
    const getFeedback = async () => {
      const response = await fetch(BASE_URL + `api/feedbacks/${params.id}`);
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
    <div className="w-full h-screen flex">
      <Sidebar />
      <main className="flex flex-col flex-1 px-12 py-24">
        <nav className="w-full relative">
          <ul className="flex  gap-x-4 w-2/3">
            {["Overall", "Vocal", "Motion"].map((item, index) => (
              <li
                key={index}
                className={cn(
                  "text-2xl z-10 font-bold text-[#9FA9F3] px-4 py-2 border-b-4 border-transparent transition-all duration-500",
                  {
                    "text-[#334155] border-mainNav-purple": tab === item,
                  },
                )}
              >
                <Link href={`?tab=${item}`}>{item}</Link>
              </li>
            ))}
            <Separator className="bg-[#9FA9F3] absolute bottom-0 w-1/2 h-0.5" />
          </ul>
        </nav>
        {/* TODO : 컴포넌트로 만들어서 switch 문을 써도 되고 등등 방법을 찾아보세요*/}
        {tab === "Overall" ? (
          <section className="flex mt-16 gap-x-20">
            <article className="flex flex-col gap-y-4 flex-1 w-2/5 mr-2.5">
              <h2 className="font-bold text-3xl">Test video {params.id}</h2>
              <iframe
                src="https://www.youtube.com/embed/3mPPMCa8Nxw"
                title="Top Finishes: Conor McGregor"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="aspect-video"
              />
            </article>
            <article className="flex flex-1 flex-col w-3/5">
              <p className="font-bold text-2xl mb-2">Transcript</p>
              <div className="w-full h-1 bg-gray-300"></div>
              <div className="w-full h-full my-2 p-1 bg-gray-100 font-light text-xl">
                test {params.id}
              </div>
              <div className="w-full h-1 bg-gray-300"></div>
            </article>
          </section>
        ) : (
          <section className="flex mt-16 gap-x-20">이제 모타게써요</section>
        )}
      </main>
    </div>
  );
}

export default Page;
