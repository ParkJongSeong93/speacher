import useVideoListStore from "@/stores/useVideoListStore";
import { BASE_URL } from "@/lib/constant/url";

async function fetchGetVideoList() {
  const response = await fetch(BASE_URL + `api/videos`, {
    method: "GET",
  });

  if (!response.ok) {
    throw Error("비디오 리스트를 가져오지 못했습니다");
  }

  const data = await response.json();
  return data.result;
}
export default fetchGetVideoList;
