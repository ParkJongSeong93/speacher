import { BASE_URL } from "@/lib/constant/url";

async function fetchPostVideoForCV(id: string) {
  const responseForAnalyze = await fetch(
    BASE_URL + `api/videos/${id}/analyze-cv`,
    {
      method: "POST",
    },
  );

  console.log(responseForAnalyze);

  if (!responseForAnalyze.ok) {
    throw Error("비디오 분석(CV)에 실패했습니다");
  }
}

export default fetchPostVideoForCV;
