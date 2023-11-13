import useVideoListStore from "@/stores/useVideoListStore";

async function fetchGetVideoList(){
    const url = `http://localhost:8080/`;

    const response = await fetch(url + `api/videos`, {
        method: "GET",
    });

    if (!response.ok) {
        throw Error('비디오 리스트를 가져오지 못했습니다');
    }

    const data = await response.json();
    useVideoListStore.setState({videoList: data})
    return;
}
export default fetchGetVideoList;