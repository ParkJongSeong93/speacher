"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import {Bar, Line} from "react-chartjs-2";
import useFeedbackStore from "@/stores/feedbackStore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

function MotionFeedback() {
  const crossing_arms_count = useFeedbackStore(
    (state) => state.crossing_arms_count,
  );
  const hands_in_pockets_count = useFeedbackStore(
    (state) => state.hands_in_pockets_count,
  );
  const walking_actions = useFeedbackStore((state) => state.walking_actions);
  const hand_to_face_actions = useFeedbackStore(
    (state) => state.hand_to_face_actions,
  );
  const hands_behind_back_actions = useFeedbackStore(
    (state) => state.hands_behind_back_actions,
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Bad Motions",
      },
    },
  };

  const data = {
    labels: [
      "",
      "팔 휘젓기",
      "주머니에 손 넣기",
      "걷기",
      "얼굴에 손 갖다대기",
      "뒷짐지기",
      "",
    ],
    datasets: [
      {
        fill: true,
        label: "Count",
        data: [
          0,
          crossing_arms_count,
          hands_in_pockets_count,
          walking_actions,
          hand_to_face_actions,
          hands_behind_back_actions,
          0,
        ],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
      <div className="w-full h-full flex flex-col overflow-y-scroll scroll-smooth">
        <section className="flex mt-16 gap-x-20">
          <Line options={options} data={data} />
        </section>
        <section className="flex flex-col my-16 gap-x-20">
          <p className="text-2xl font-bold mb-2">Total</p>
          <div className="text-4 bg-gray-100 p-2">
            <p className="inline-block font-bold text-2xl text-mainNav-purple mr-2">
              {data.datasets.map((set) => set.data.reduce((a, b) => a + b, 0))}
            </p>
            Bad motions
          </div>
        </section>
      </div>
  );
}
export default MotionFeedback;
