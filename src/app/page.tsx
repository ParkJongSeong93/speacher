import Footer from "./components/footer/Footer";
import Mainbody from "./components/mainbody/Mainbody";
import Mainnav from "./components/mainnav/Mainnav";

export default function Home() {
  return (
    <main className="w-full">
      <Mainnav />
      <Mainbody />
      <Footer />
    </main>
  );
}
