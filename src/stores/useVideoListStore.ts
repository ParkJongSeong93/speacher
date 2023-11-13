import { create } from "zustand";
import { Video } from "@/types/video";

type VideoListState = {
  videoList: Video[];
  setVideoList: (videoList: Video[]) => void;
};

const useVideoListStore = create<VideoListState>((set, get) => ({
  videoList: [
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
  ],
  setVideoList: (videoList) => {
    set({ videoList: videoList });
  },
}));

export default useVideoListStore;
