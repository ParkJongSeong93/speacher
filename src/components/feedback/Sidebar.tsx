"use client";

import Link from "next/link";
import useVideoListStore from "@/stores/useVideoListStore";
import { DotIcon, PlugIcon, PlusIcon } from "lucide-react";
import fetchGetVideoList from "@/lib/helpers/fetchGetVideoList";
import { useEffect, useState } from "react";
import { Video } from "@/types/video";

function Sidebar() {
  const [videoList, setVideoList] = useState<Video[]>([]);
  const [dates, setDates] = useState<string[]>([]);

  useEffect(() => {
    const getVideoList = async () => {
      try {
        const videoList: Video[] = await fetchGetVideoList();
        setVideoList(videoList);
        const dates: string[] = [
          ...new Set(videoList.map((video: Video) => video.createdAt)),
        ];
        setDates(dates);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
        } else {
          console.error("Unknown error occurred");
        }
      }
    };
    getVideoList();
  }, []);

  return (
    <aside className="bg-[#D1D4F1]/50 flex w-1/6">
      <div className="flex flex-col h-3/4 my-auto w-full">
        <Link
          href="/upload"
          className="py-8 px-8 gap-x-4 text-white flex items-center text-xl bg-[#9FA8F3]"
        >
          <PlusIcon /> Add New Video
        </Link>
        {/* TODO : 스크롤바 css 수정 부탁드려용*/}
        <ul className="flex flex-col gap-y-12 py-12 overflow-y-scroll">
          {dates.map((date, idx) => (
            <li key={idx}>
              <h3 className="text-xl font-semibold px-8 py-2">{date}</h3>
              <ul className="flex flex-col gap-y-4">
                {videoList
                  .filter((video) => video.createdAt === date)
                  .map((video, vIdx) => (
                    <li
                      key={vIdx}
                      className="bg-gray-300 text-gray-400 font-semibold text-xl h-14 flex items-center px-4"
                    >
                      <DotIcon className="peer" />
                      <Link
                        href={`/feedback?id=${video.id}`}
                        className="peer-hover:text-mainNav-purple hover:text-mainNav-purple"
                      >
                        {video.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
