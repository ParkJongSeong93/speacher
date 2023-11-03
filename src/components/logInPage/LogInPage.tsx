"use client";

import { Simulate } from "react-dom/test-utils";
import Link from "next/link";

function LogInPage() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);
    const userInfo = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const url = `http://localhost:8080/`;

    const response = await fetch(url + `api/members/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json", credentials: "include" },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw Error("로그인에 실패했습니다.");
    }
    const data = await response.json();
    return data;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <p className="text-4xl font-bold mb-20">Log In</p>
      <input
        name="email"
        type="email"
        placeholder="Type Id"
        className="text-center text-2xl py-2 rounded-md border-2 focus:outline-black w-4/12 mb-2"
      />
      <input
        name="password"
        type="password"
        placeholder="Type Password"
        className="text-center text-2xl py-2 rounded-md border-2 focus:outline-black w-4/12 mb-2"
      />
      <button
        type="submit"
        className="text-center text-2xl py-2.5 rounded-md border-none focus:outline-black w-4/12 bg-logInPageBtn-gray"
      >
        Login
      </button>
      {/*추후 합치기, (loginPage, signUpPage) 이 두 개를 같은 파일에 넣을 수 있음*/}
      <div className="flex w-full justify-center mt-8">
        <p className="text-center">
          Forgot your password?
          <br />
          Don't have account yet? | <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </form>
  );
}

export default LogInPage;
