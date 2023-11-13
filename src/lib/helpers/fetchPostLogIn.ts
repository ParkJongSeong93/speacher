import { UserInfo } from "../../types/userInfo";
import useAuthStore from "@/stores/useAuthStore";
import {BASE_URL} from "@/lib/constant/url";
async function fetchPostLogIn(userInfo: UserInfo) {

  const response = await fetch(BASE_URL + `api/members/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json", credentials: "include" },
    body: JSON.stringify(userInfo),
  });

  if (!response.ok) {
    throw Error("로그인에 실패했습니다");
  }

  useAuthStore.setState({ isLogIn: true });
}
export default fetchPostLogIn;
