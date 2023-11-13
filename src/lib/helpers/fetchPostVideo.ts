import {BASE_URL} from "@/lib/constant/url";

async function fetchPostVideo(formData:FormData){

    const response = await fetch(BASE_URL + `api/videos`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw Error('비디오 업로드에 실패했습니다');
    }
}
export default fetchPostVideo;
