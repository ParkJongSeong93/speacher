import { UserInfo } from "../../types/userInfo";

async function fetchPostSignUp(userInfo: UserInfo) {
  const url = `http://localhost:8080/`;

  const response = await fetch(url + `api/members`, {
    method: "POST",
    headers: { "Content-Type": "application/json", credentials: "include" },
    body: JSON.stringify(userInfo),
  });

  if (!response.ok) {
    throw Error("회원가입에 실패했습니다");
  }
  return;
}

export default fetchPostSignUp;
