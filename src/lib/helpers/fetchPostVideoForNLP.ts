import { BASE_URL } from "@/lib/constant/url";

async function fetchPostVideoForNLP(id: string) {
  const responseForAnalyze = await fetch(
    BASE_URL + `api/videos/${id}/analyze-nlp`,
    {
      method: "POST",
    },
  );

  if (!responseForAnalyze.ok) {
    throw Error("비디오 분석(NLP)에 실패했습니다");
  }
}

export default fetchPostVideoForNLP;
