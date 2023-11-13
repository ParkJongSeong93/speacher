"use client";

import Link from "next/link";
import fetchPostLogIn from "@/lib/helpers/fetchPostLogIn";

function Page() {
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);
    const userInfo = {
      name: null,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    try {
      fetchPostLogIn(userInfo);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("알 수 없는 에러");
      }
    }
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

export default Page;
