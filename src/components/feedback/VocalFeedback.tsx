import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useFeedbackStore from "@/stores/feedbackStore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function VocalFeedback() {
  const script = useFeedbackStore((state) => state.script);
  const speed = useFeedbackStore((state) => state.speed);
  const fillerWord = useFeedbackStore((state) => state.fillerWord);

  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: "Filler Words",
      },
    },
  };

  const data = {
    labels: Object.entries(fillerWord)
      .filter(([word, count]) => count !== 0)
      .map(([word]) => word),
    // actionName,
    datasets: [
      {
        label: "Count",
        data: Object.entries(fillerWord)
          .filter(([word, count]) => count !== 0)
          .map(([word, count]) => count),
        // data: actionCount,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="w-full h-full flex flex-col overflow-y-scroll scroll-smooth">
      <section className="flex mt-16 gap-x-20">
        <Bar options={options} data={data} />
      </section>
      <section className="flex flex-col my-16 gap-x-20">
        <p className="text-2xl font-bold mb-2">말하기 속도</p>
        <div className="text-4 bg-gray-100 p-2">
          <p className="inline-block font-bold text-2xl text-mainNav-purple mr-2">
            {speed.toPrecision(3)}
          </p>
          words / sec
        </div>
        <p className="text-2xl font-bold mt-4 mb-2">발표대본</p>
        <p className="text-xl font-extralight bg-gray-100 p-2 tracking-wide leading-relaxed">
          {script}
        </p>
      </section>
    </div>
  );
}
export default VocalFeedback;
