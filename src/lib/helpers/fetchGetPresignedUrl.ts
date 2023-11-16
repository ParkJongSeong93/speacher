import { BASE_URL } from "@/lib/constant/url";

import useCurrentVideoIdStore from "@/stores/useCurrentVideoIdStore";
import useIsAnalayzingStore from "@/stores/useIsAnalayzingStore";

async function fetchGetPresignedUrl(title: string) {
  const responseForPost = await fetch(
    BASE_URL + `api/videos?extension=mp4&title=${title}`,
    {
      method: "POST",
    },
  );

  if (!responseForPost.ok) {
    throw Error("비디오 업로드에 실패했습니다(post)");
  }

  const { result } = await responseForPost.json();
  const { generatePresignedUrl, videoId } = result;

  return {
    generatePresignedUrl,
    videoId,
  };
}

export default fetchGetPresignedUrl;
