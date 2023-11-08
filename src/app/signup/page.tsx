"use client";

import {useRouter} from "next/navigation";

function Page() {
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);
    const userInfo = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const url = `http://localhost:8080/`;

    const response = await fetch(url + `api/members`, {
      method: "POST",
      headers: { "Content-Type": "application/json", credentials: "include" },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      alert("가입에 실패했습니다.");
      return;
    }
    router.push("/login");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full h-screen flex flex-col justify-center items-center"
    >
      <p className="text-4xl font-bold mb-20">Sign Up</p>
      <input
        name="name"
        type="text"
        placeholder="Type Name"
        className="text-center text-2xl py-2 rounded-md border-2 focus:outline-black w-4/12 mb-2"
      />
      <input
        name="email"
        type="email"
        placeholder="Type Email"
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
        Sign Up
      </button>
      {/*추후 합치기 가능*/}
    </form>
  );
}

export default Page;
