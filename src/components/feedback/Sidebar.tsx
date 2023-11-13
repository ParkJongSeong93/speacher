"use client";

import Link from "next/link";
import { useEffect } from "react";
import fetchGetVideoList from "@/lib/helpers/fetchGetVideoList";
import useVideoListStore from "@/stores/useVideoListStore";
import { DotIcon, PlugIcon, PlusIcon } from "lucide-react";

function Sidebar() {
  // const videoList = useVideoListStore((state) => state.videoList);

  const videoList = [
    {
      id: 1,
      title: "title1",
      createdAt: "2021-10-10",
    },
    {
      id: 2,
      title: "title2",
      createdAt: "2021-10-8",
    },
    {
      id: 3,
      title: "title3",
      createdAt: "2021-10-8",
    },
    {
      id: 4,
      title: "title4",
      createdAt: "2021-10-8",
    },
  ];

  const dates = videoList.map((video) => video.createdAt);

  useEffect(() => {
    const getVideos = async () => {
      try {
        await fetchGetVideoList();
        alert("비디오 불러오기 성공");
      } catch (error) {
        alert(error instanceof Error ? error.message : "알 수 없는 에러");
      }
    };
    getVideos();
  }, []);

  return (
    <aside className="bg-[#D1D4F1]/50 flex w-80">
      <div className="flex flex-col h-3/4 my-auto w-full">
        <Link
          href="/upload"
          className="h-32 px-8 gap-x-4 text-white flex items-center text-2xl bg-[#9FA8F3]"
        >
          <PlusIcon /> Add New Video
        </Link>
        {/* TODO : 스크롤바 css 수정 부탁드려용*/}
        <ul className="flex flex-col gap-y-12 py-12 overflow-y-scroll">
          {dates.map((date) => (
            <li>
              <h3 className="text-xl font-semibold px-8 py-2">{date}</h3>
              <ul className="flex flex-col gap-y-4">
                {videoList
                  .filter((video) => video.createdAt === date)
                  .map((video) => (
                    <li className="bg-gray-300 text-gray-400 font-semibold text-xl h-14 flex items-center px-4">
                      <DotIcon className="peer" />
                      <Link
                        href={`/feedback/${video.id}`}
                        className="peer-hover:text-mainNav-purple hover:text-mainNav-purple"
                      >
                        {video.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
          {/*{videoList.map((video) => (*/}
          {/*  <Link*/}
          {/*    href={`/feedback/${video.id}`}*/}
          {/*    className="py-4 pl-3 mb-6 bg-uploadPageBtn-lightgray text-gray-400"*/}
          {/*  >*/}
          {/*    {video.title}*/}
          {/*  </Link>*/}
          {/*))}*/}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
