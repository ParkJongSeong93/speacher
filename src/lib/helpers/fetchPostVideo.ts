import {useRouter} from "next/navigation";

async function fetchPostVideo(formData:FormData){
    const router = useRouter();

    const url = `http://localhost:8080/`;

    const response = await fetch(url + `api/videos`, {
        method: "POST",
        body: formData,
    });

    if (!response.ok) {
        throw Error('비디오 업로드에 실패했습니다');
    }

    alert('비디오 업로드에 성공했습니다');
    return;
}
export default fetchPostVideo;