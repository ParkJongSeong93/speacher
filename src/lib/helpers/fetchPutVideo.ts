async function fetchPuVideo(formData: FormData, presignedUrl: string) {
  const responseForPut = await fetch(`${presignedUrl}`, {
    method: "PUT",
    headers: { "Content-Type": "text/plain" },
    body: formData.get("file"),
  });

  if (!responseForPut.ok) {
    throw Error("비디오 업로드에 실패했습니다(put)");
  }
}

export default fetchPuVideo;
