import useAuthStore from "@/stores/useAuthStore";
import {BASE_URL} from "@/lib/constant/url";

async function fetchLogOut() {

const response = await fetch(BASE_URL + `api/members/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json", credentials: "include" },
  });
  if (!response.ok) {
    throw Error("로그아웃에 실패하였습니다.");
  }

  useAuthStore.setState({ isLogIn: false });
}
export default fetchLogOut;
