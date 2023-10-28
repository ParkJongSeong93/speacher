import Introvideo from "./Introvideo";
import Joinbutton from "./Joinbutton";

const Mainbody = () => {
  return (
    <div>
      <div className="flex w-full">
        <div className="w-5/12 flex-col">
          <p>#1. AI. FEEDBACK SERVICE</p>
          <h1>
            Get a quick feedback
            <br />
            about your presentation
          </h1>
          <Joinbutton />
        </div>
        <Introvideo />
      </div>
      <div className="w-full flex flex-col items-center">
        <p>USE CASES</p>
        <h1>당신만의 발표 AI 서비스</h1>
        <div>피드백 페이지</div>
        <div className="flex">
          <div className="w-5/12">
            <h2>Sed ut perspiciatis</h2>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est.
            </p>
            <button className="bg-blue-500 text-white px-7 py-2 rounded-md">
              Learn more
            </button>
          </div>
          <div className="w-7/12 flex justify-start">
            <div className="flex justify-center items-center">video</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainbody;
