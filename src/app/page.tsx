import Mainnav from "@/components/common/Mainnav";
import UploadFileButton from "@/components/landing/UploadFileButton";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="w-full">
      <div className="flex flex-col w-full h-screen">
        <Mainnav />
        <div className="flex w-full h-full">
          <div className="flex flex-col flex-1 justify-center items-end ml-auto">
            <p className="w-4/6 mb-14 text-xl">#1. AI FEEDBACK SERVICE</p>
            <p className="w-4/6 font-bold text-3xl mb-14">
              Get a quick feedback
              <br />
              about your
              <br /> presentation
            </p>
            <UploadFileButton />
          </div>
          <div className="flex flex-col flex-1 justify-center items-center">
            IMG
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-screen bg-uploadBg-gray justify-center items-center">
        <p className="my-10">USE CASES</p>
        <p className="text-3xl font-bold">당신만의 발표 AI 피드백 서비스</p>
        <div className="flex flex-1 w-full justify-center items-center">
          <div className="bg-mainNav-gray w-4/12 h-4/6"></div>
        </div>
      </div>
      <div className="flex w-full h-screen">
        <div className="flex flex-col flex-1 justify-center items-center">
          IMG
        </div>
        <div className="flex flex-col flex-1 justify-center items-start ml-auto">
          <p className="w-4/6 mb-14 text-xl">HOW TO GET A FEED BACK</p>
          <p className="w-4/6 font-bold text-3xl mb-14">
            Get a quick feedback
            <br />
            about your
            <br /> presentation
          </p>
          <div className="w-4/6">
            <button className="bg-mainNav-purple text-white font-bold px-6 py-3">Give it a try</button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

//폴더 구조에 기준을 두고 나중에 많은 디렉토리가 생겼을 때를 대비 필
//folder struct depth를 1차원으로 고정하지 않아도 됨
