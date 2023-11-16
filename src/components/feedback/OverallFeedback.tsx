"use client";

import useFeedbackStore from "@/stores/feedbackStore";

function OverallFeedback() {
  const title = useFeedbackStore((state) => state.title);
  const videoUrl = useFeedbackStore((state) => state.videoUrl);
  const gpt = useFeedbackStore((state) => state.gpt);

  return (
    <section className="flex mt-16 gap-x-20 h-full">
      <article className="flex flex-col gap-y-4 w-2/5 mr-1">
        <h2 className="font-bold text-3xl">{title}</h2>
        <video src={videoUrl} title={title} controls={true} className="h-1/2" />
      </article>
      <article className="flex w-3/5 flex-col">
        <p className="font-bold text-2xl mb-2">Overall Feedback</p>
        <p className="h-1/2 border-y-4 border-gray-300 whitespace-pre-wrap my-2 p-2.5 bg-gray-100 font-extralight text-xl tracking-wide leading-relaxed overflow-y-scroll">
          {gpt}
        </p>
      </article>
    </section>
  );
}
export default OverallFeedback;
