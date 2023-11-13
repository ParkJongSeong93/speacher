import Link from "next/link";
import { useEffect, useState } from "react";
import { Video } from "@/types/video";

function Sidebar() {
  const [videoList, setVideoList] = useState<Video[]>([
    {
      id: 1,
      title: "Test Video",
      videoUrl: "https://www.youtube.com",
    },
    {
      id: 2,
      title: "Test Video 2",
      videoUrl: "https://www.youtube.com",
    },
  ]);

  useEffect(() => {
    const getVideoList = async () => {
      const url = `http://localhost:8080/`;
      const response = await fetch(url + `api/videos`);
      const data = await response.json();
      setVideoList(data);
    };
    getVideoList();
  }, []);

  return (
    <div className="bg-uploadBg-gray flex flex-col justify-center w-1/6">
      <Link href="/upload" className="py-4 pl-3 mb-10 bg-uploadPageBtn-gray">
        Upload New Video
      </Link>
      {videoList.map((video) => (
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
