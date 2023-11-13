import Image from "next/image";
import MainMicrophone from "$/image/landing/mic.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThreeStep from "$/image/landing/three-step.png";
import MainPlay from "$/image/landing/play.png";

export default function Home() {
  return (
    <main className="w-full">
      <section className="flex w-2/3 justify-between relative items-center mx-auto h-screen">
        <div className="flex flex-col gap-y-12">
          <h1 className="text-lg font-semibold text-mainNav-purple">
            #1. AI FEEDBACK SERVICE
          </h1>
          <div className="text-5xl font-bold leading-tight">
            <p>Get a quick</p>
            <p>feedback about</p>
            <p>your presentation</p>
          </div>
          <Button asChild size="lg" className="px-14 py-6 w-fit text-lg">
            <Link href="/upload">Upload File</Link>
          </Button>
        </div>
        <Image
          style={{
            width: "40%",
            height: "auto",
          }}
          src={MainMicrophone}
          alt="마이크 이미지"
        />
      </section>
      <section className="h-screen bg-uploadBg-gray flex items-center justify-center">
        <div className="h-4/5 flex flex-col items-center container justify-between">
          <h1 className="text-mainNav-purple font-bold text-2xl ">
            #2. KEY FEATURE
          </h1>
          <div className="text-3xl font-bold text-center leading-normal">
            <p>텍스트 전사부터 음성,모션 피드백까지</p>
            <p>한번에 가능한 올인원 AI 발표 피드백 서비스</p>
          </div>
          <article className="flex justify-evenly w-full">
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <figure className="flex flex-col items-center justify-center gap-y-6">
                  <div className="bg-gray-300 w-72 h-72" />
                  <div className="bg-gray-300 w-72 h-10" />
                  <div className="bg-gray-300 w-72 h-10" />
                </figure>
              ))}
          </article>
        </div>
      </section>
      <section className="h-screen flex items-center justify-center">
        <div className="h-4/5 flex flex-col items-center container justify-between">
          <h1 className="text-mainNav-purple font-bold text-2xl ">
            #3. HOW TO USE
          </h1>
          <p className="text-3xl font-bold text-center leading-normal">
            위의 모든 기능을 손쉬운 단 3단계의 과정으로!
          </p>
          <article className="flex justify-evenly w-full">
            <Image
              src={ThreeStep}
              style={{
                width: "70%",
              }}
              alt="서비스 설명"
            />
          </article>
        </div>
      </section>
      <section className="flex  relative bg-uploadBg-gray  h-screen">
        <div className="flex w-2/3 items-center mx-auto justify-between">
          <Image
            style={{
              width: "40%",
              height: "auto",
              right: "0%",
            }}
            src={MainPlay}
            alt="플레이 아이콘"
          />
          <div className="flex flex-col gap-y-12">
            <h1 className="text-lg font-semibold text-mainNav-purple">
              #4. YOU ARE READY!
            </h1>
            <div className="text-5xl font-bold leading-tight">
              <p>Why don’t you</p>
              <p>try now?</p>
            </div>
            <Button asChild size="lg" className="px-14 py-6 w-fit text-lg">
              <Link href="/upload">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

//폴더 구조에 기준을 두고 나중에 많은 디렉토리가 생겼을 때를 대비 필
//folder struct depth를 1차원으로 고정하지 않아도 됨
