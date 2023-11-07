import Mainnav from "@/components/common/Mainnav";
import Footer from "@/components/common/Footer";

function Page() {
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <Mainnav />
        <div className="flex w-full flex-1">
          <div className="bg-uploadBg-gray flex flex-col justify-center w-1/4">
            <div className="py-4 pl-3 mb-6 bg-uploadPageBtn-gray">Upload</div>
            <div className="py-4 pl-3 mb-10 bg-uploadPageBtn-gray">
              + New Video
            </div>
            <div className="py-4 pl-3 mb-6 bg-uploadPageBtn-lightgray text-gray-400">
              - list
            </div>
            <div className="py-4 pl-3 mb-6 bg-uploadPageBtn-lightgray text-gray-400">
              - list
            </div>
            <div className="py-4 pl-3 mb-14 bg-uploadPageBtn-lightgray text-gray-400">
              - list
            </div>
            <div className="py-4 pl-3 mb-6 bg-uploadPageBtn-lightgray">
              Option
            </div>
            <div className="py-4 pl-3 bg-uploadPageBtn-lightgray">Log Out</div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center h-full">
            <p className="w-2/3 font-bold text-4xl pr-40 mb-7">
              <div className="bg-uploadPageBtn-gray w-12 h-12 mr-4 rounded-full inline-flex justify-center items-center font-light text-5xl">
                +
              </div>
              Upload your video
            </p>
            <input
              className="bg-uploadBg-gray w-2/3 py-2 pl-1.5"
              placeholder="type title of the video"
            />
          </div>
        </div>
        <div className="w-full"></div>
      </div>
      <Footer />
    </>
  );
}

export default Page;
