"use client";

import fetchGetPresignedUrl from "@/lib/helpers/fetchGetPresignedUrl";
import fetchPostVideoForCV from "@/lib/helpers/fetchPostVideoForCV";
import fetchPostVideoForNLP from "@/lib/helpers/fetchPostVideoForNLP";
import useIsAnalayzingStore from "@/stores/useIsAnalayzingStore";
import Loading from "@/components/feedback/Loading";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import fetchPutVideo from "@/lib/helpers/fetchPutVideo";
import {fileExists} from "next/dist/lib/file-exists";

function Page() {
  const { toast } = useToast();
  const isAnalyzing = useIsAnalayzingStore((state) => state.isAnalyzing);
  const setIsAnalyzing = useIsAnalayzingStore((state) => state.setIsAnalyzing);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAnalyzing(true);
    const currentTarget = e.currentTarget;
    const formData = new FormData(currentTarget);
    const title = formData.get("title") as string;
    const file = formData.get("file");

    if (!title) return alert("Title을 입력해주세요.");
    if (!file) return alert("File 선택해주세요.");

    try {
      const { generatePresignedUrl, videoId } =
        await fetchGetPresignedUrl(title);

      await fetchPutVideo(formData, generatePresignedUrl);
      await Promise.all([
        fetchPostVideoForCV(videoId),
        fetchPostVideoForNLP(videoId),
      ]);

      // await fetch(BASE_URL + `api/videos?extension=mp4&title=${title}`, {
      //   method: "POST",
      // });
      toast({
        title: "업로드에 성공하였습니다.",
        description: `${title} 발표에 대한 피드백을 확인해주세요.`,
        duration: 3000,
        action: (
          <ToastAction asChild altText="Try again">
            <Link href={`/feedback?id=${videoId}`}>피드백 확인</Link>
          </ToastAction>
        ),
      });
    } catch (error) {
      if (!(error instanceof Error)) {
        setIsAnalyzing(false);
        alert("알 수 없는 에러");
        return;
      }
      alert(error.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        {isAnalyzing ? (
          <Loading />
        ) : (
          <>
            <div className="w-1/3 mb-7">
              <p className="font-bold text-2xl">Preview</p>
              <p>Type the title and Submit the video if this is right</p>
            </div>

            <form onSubmit={onSubmit} className="w-1/3">
              <div className="flex w-full mb-3.5 gap-x-4">
                <Input
                  name="title"
                  type="text"
                  placeholder="Type Title"
                  className="bg-gray-100 focus-visible:ring-mainNav-purple flex-1 focus:outline-mainNav-purple"
                />
                <Button type="submit" disabled={isAnalyzing} className="w-24">
                  Submit
                </Button>
              </div>
              <label
                htmlFor="video"
                className="bg-gray-100 rounded-lg w-full border-mainNav-purple border flex flex-col justify-center aspect-square hover:bg-mainNav-purple/10 items-center cursor-pointer"
              >
                <PlusIcon />
                Select a file
              </label>
              <input
                id="video"
                name="file"
                type="file"
                accept="video/*"
                multiple={false}
                className="hidden"
              />
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default Page;
