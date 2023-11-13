import { UserInfo } from "../../types/userInfo";
import useAuthStore from "@/stores/useAuthStore";
async function fetchPostLogIn(userInfo: UserInfo) {

  const url = `http://localhost:8080/`;
  const response = await fetch(url + `api/members/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json", credentials: "include" },
    body: JSON.stringify(userInfo),
  });

  if (!response.ok) {
    throw Error("로그인에 실패했습니다");
  }

  useAuthStore.setState({ isLogIn: true });

  return;
}
export default fetchPostLogIn;
