"use client";

import { useEffect, useState } from "react";

type Props = {
  params: {
    id: number;
  };
};

function Page({ params }: Props) {
  const [feedback, setFeedback] = useState<null>(null);

  useEffect(() => {
    const getFeedback = async () => {
      const url = `http://localhost:8080/`;
      const response = await fetch(url + `api/feedbacks/${params.id}`);
      const data = await response.json();
      setFeedback(data);

      if (!response.ok) {
        alert("피드백을 불러오는데 실패했습니다.");
        return;
      }
    };
    getFeedback();
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-screen">
      {params.id}번 동영상 피드백 상세 페이지
    </div>
  );
}

export default Page;
