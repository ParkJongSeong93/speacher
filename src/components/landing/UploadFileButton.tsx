import Link from "next/link";

function UploadFileButton() {
  return (
    <Link
      className="bg-mainNav-purple text-white font-bold px-6 py-3"
      href="/upload"
    >
      Upload File
    </Link>
  );
}

export default UploadFileButton;
