import { UserInfo } from "../../types/userInfo";
import {BASE_URL} from "@/lib/constant/url";

async function fetchPostSignUp(userInfo: UserInfo) {

  const response = await fetch(BASE_URL + `api/members`, {
    method: "POST",
    headers: { "Content-Type": "application/json", credentials: "include" },
    body: JSON.stringify(userInfo),
  });

  if (!response.ok) {
    throw Error("회원가입에 실패했습니다");
  }
}

export default fetchPostSignUp;
