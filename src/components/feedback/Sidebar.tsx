import Link from "next/link";
import { useEffect } from "react";
import fetchGetVideoList from "@/lib/helpers/fetchGetVideoList";
import useVideoListStore from "@/stores/useVideoListStore";

function Sidebar() {
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
    <div className="bg-uploadBg-gray flex flex-col justify-center w-1/6">
      <Link href="/upload" className="py-4 pl-3 mb-10 bg-uploadPageBtn-gray">
        Upload New Video
      </Link>
      {useVideoListStore.getState().videoList.map((video) => (
        <Link
          href={`/feedback/${video.id}`}
          className="py-4 pl-3 mb-6 bg-uploadPageBtn-lightgray text-gray-400"
        >
          {video.title}
        </Link>
      ))}
      <div className="py-4 pl-3 mt-4 bg-uploadPageBtn-lightgray">Option</div>
    </div>
  );
}

export default Sidebar;
