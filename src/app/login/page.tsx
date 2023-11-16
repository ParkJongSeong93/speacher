"use client";

import Link from "next/link";
import fetchPostLogIn from "@/lib/helpers/fetchPostLogIn";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Page() {
  const router = useRouter();
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
      await fetchPostLogIn(userInfo);
      router.push("/upload");
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
      className="w-1/3 mx-auto h-screen gap-y-4 flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold my-8">Log In</h1>
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
        Log In
      </Button>
      {/*추후 합치기, (loginPage, signUpPage) 이 두 개를 같은 파일에 넣을 수 있음*/}
      <div className="flex w-full justify-center mt-8">
        <p className="text-center">
          Forgot your password?
          <br />
          Don&apos;t have account yet? | <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </form>
  );
}

export default Page;
