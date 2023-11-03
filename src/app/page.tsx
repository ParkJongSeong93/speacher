import LogInPage from "@/components/logInPage/LogInPage";
import UploadPage from "@/components/uploadPage/UploadPage";
import Mainnav from "@/components/mainnav/Mainnav";
import MainPage from "@/components/landingPage/MainPage";

export default function Home() {
  return (
    <main className="w-full">
      <MainPage />
    </main>
  );
}

//폴더 구조에 기준을 두고 나중에 많은 디렉토리가 생겼을 때를 대비 필
//folder struct depth를 1차원으로 고정하지 않아도 됨
