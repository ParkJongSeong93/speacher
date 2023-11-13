"use client";

import { useRouter } from "next/navigation";
import fetchPostSignUp from "@/lib/helpers/fetchPostSignUp";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

    try {
      await fetchPostSignUp(userInfo);
      alert("회원가입 성공");
      router.push("/login");
    } catch (error) {
      alert(error instanceof Error ? error.message : "알 수 없는 에러");
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-1/3 mx-auto h-screen gap-y-4 flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold my-8">Sign up</h1>
      <Input name="name" placeholder="Type Id" className="h-16 text-center" />
      <Input
        name="email"
        type="email"
        placeholder="Type Email"
        className="h-16 text-center"
      />
      <Input
        name="password"
        type="password"
        placeholder="Type Password"
        className="h-16 text-center"
      />
      <Button type="submit" className="w-full h-16">
        Sign up
      </Button>
    </form>
  );
}

export default Page;
