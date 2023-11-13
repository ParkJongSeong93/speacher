import useAuthStore from "@/stores/useAuthStore";

async function fetchLogOut() {
  const url = `http://localhost:8080/`;
  const response = await fetch(url + `api/members/logout`, {
    method: "POST",
    headers: { "Content-Type": "application/json", credentials: "include" },
  });
  if (!response.ok) {
    throw Error("로그아웃에 실패하였습니다.");
  }

  useAuthStore.setState({ isLogIn: false });
  return;
}
export default fetchLogOut;
