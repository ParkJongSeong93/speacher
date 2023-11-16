"use client";

import {useEffect} from "react";
import Sidebar from "@/components/feedback/Sidebar";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import MotionFeedback from "@/components/feedback/MotionFeedback";
import VocalFeedback from "@/components/feedback/VocalFeedback";
import OverallFeedback from "@/components/feedback/OverallFeedback";
import useFeedbackStore from "@/stores/feedbackStore";

type Props = {
  searchParams: {
    id: string;
    tab: string;
  };
};

function Page({ searchParams: { id, tab = "Overall" } }: Props) {
  const getFeedback = useFeedbackStore((state) => state.getFeedback);

  useEffect(() => {
    if (!id) return;
    getFeedback(id);
  }, [id]);

  const feedbackContent = (tab: string) => {
    switch (tab) {
      case "Overall":
        return <OverallFeedback />;
      case "Vocal":
        return <VocalFeedback />;
      case "Motion":
        return <MotionFeedback />;
    }
  };

  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      {id ? (
        <main className="flex flex-col w-5/6 px-12 pt-10">
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
                  <Link href={`?id=${id}&tab=${item}`}>{item}</Link>
                </li>
              ))}
              <Separator className="bg-[#9FA9F3] absolute bottom-0 w-1/2 h-0.5" />
            </ul>
          </nav>
          {feedbackContent(tab)}
        </main>
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <h3 className="text-xl font-semibold px-8 py-2">
            왼쪽의 영상제목들 중 보고싶은 피드백을 선택해주세요!
          </h3>
        </div>
      )}
    </div>
  );
}

export default Page;
