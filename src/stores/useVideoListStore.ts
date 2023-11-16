import { create } from "zustand";
import { Video } from "@/types/video";
import fetchGetVideoList from "@/lib/helpers/fetchGetVideoList";
import { BASE_URL } from "@/lib/constant/url";

type VideoListState = {
  videoList: Video[];
  setVideoList: (videoList: Video[]) => void;
  initializeVideo: () => Promise<void>;
};

const useVideoListStore = create<VideoListState>((set, get) => ({
  videoList: [
    {
      id: 1,
      title: "Test Video",
      videoUrl: "https://www.youtube.com",
      createdAt: "2022-11-14",
    },
    {
      id: 2,
      title: "Test Video 2",
      videoUrl: "https://www.youtube.com",
      createdAt: "2022-11-14",
    },
  ],
  setVideoList: (videoList) => set({ videoList: videoList }),
  initializeVideo: async () => {
    const videoList = await fetchGetVideoList();
    set({ videoList });
  },
}));
export default useVideoListStore;
