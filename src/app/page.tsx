"use client";

import Image from "next/image";
import MainMicrophone from "$/image/landing/mic.png";
import vocal from "$/image/landing/vocal.png";
import motionLeft from "$/image/landing/motionLeft.png";
import motionRight from "$/image/landing/motionRight.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThreeStep from "$/image/landing/three-step.png";
import MainPlay from "$/image/landing/play.png";
import useAuthStore from "@/stores/useAuthStore";

export default function Home() {
  const isLogIn = useAuthStore((state) => state.isLogIn);
  const linkForUploadFileBtn = isLogIn ? "/upload" : "/login";

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
            <Link href={linkForUploadFileBtn}>Upload File</Link>
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
            <p>From text transcription to voice to motion feedback</p>
            <p>All-in-one AI presentation feedback service</p>
          </div>
          <article className="flex justify-evenly w-full mb-20">
            <div className="flex border-2 border-mainNav-purple/50 px-4 py-8 mx-1.5">
              <Image
                style={{
                  width: "30%",
                  height: "auto",
                }}
                src={vocal}
                alt="vocal image"
              />
              <p className="px-3">
                Speaker's voice is converted into text to provide scripts and
                analyze the speaker's speed to analyze how many words he said
                per second. Based on the recognized voice, frequency of FIeller
                words that are provided for managing meaningless in the context
                of the conversation
              </p>
            </div>
            <div className="flex border-2 border-mainNav-purple/50 px-4 py-8 mx-1.5">
              <Image
                style={{
                  width: "14%",
                  height: "auto",
                  marginRight: "2%",
                }}
                src={motionLeft}
                alt="vocal image"
              />
              <Image
                  style={{
                    width: "14%",
                    height: "auto",
                  }}
                  src={motionRight}
                  alt="vocal image"
              />
              <p className="px-3">
                We analyzes the speaker's main gestures and behavior patterns to
                detect and check the frequency of certain behaviors, such as the
                speaker's gaze direction, arm-crossing, pointing with his hands,
                putting his hands in his pockets, and holding his back.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="h-screen flex items-center justify-center">
        <div className="h-4/5 flex flex-col items-center container justify-between">
          <h1 className="text-mainNav-purple font-bold text-2xl ">
            #3. HOW TO USE
          </h1>
          <p className="text-3xl font-bold text-center leading-normal">
            All of the above is an easy three-step process!
          </p>
          <article className="flex justify-evenly w-full">
            <Image
              src={ThreeStep}
              style={{
                width: "70%",
                marginBottom: "10%",
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
              <Link href={linkForUploadFileBtn}>Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

//폴더 구조에 기준을 두고 나중에 많은 디렉토리가 생겼을 때를 대비 필
//folder struct depth를 1차원으로 고정하지 않아도 됨
