import Link from "next/link";

function UploadFileButton() {
  return (
    <div className="w-4/6">
      <Link className="bg-mainNav-purple text-white font-bold px-6 py-3" href="/upload">
        Upload File
      </Link>
    </div>
  );
}

export default UploadFileButton;
