import Link from "next/link";
import useAuthStore from "@/stores/useAuthStore";

function UploadFileButton() {
  const isLogIn = useAuthStore((state) => state.isLogIn);
  const linkForUploadFileBtn = isLogIn? "/upload" : "/login";
  return (
    <Link
      className="bg-mainNav-purple text-white font-bold px-6 py-3"
      href={linkForUploadFileBtn}
    >
      Upload File
    </Link>
  );
}

export default UploadFileButton;
