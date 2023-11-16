import { create } from "zustand";

type FeedbackFromCV = {
  crossing_arms_count: number;
  hands_in_pockets_count: number;
  walking_actions: number;
  hand_to_face_actions: number;
  hands_behind_back_actions: number;
};

type FeedbackFromNLP = {
  script: string | null;
  time: number;
  speed: number;
  fillerWord: string | null;
};

type Feedback = {
  feedbackFromCV: FeedbackFromCV;
  feedbackFromNLP: FeedbackFromNLP;
  setFeedbackFromCV: (feedbackFromCV: FeedbackFromCV) => void;
  setFeedbackFromNLP: (feedbackFromNLP: FeedbackFromNLP) => void;
};

// {
//     "isSuccess": true,
//     "code": "COMMON200",
//     "message": "성공입니다.",
//     "result": {
//     "script": " 학습자 내적과정과 수업사태를 제시해 주세요. 교사가 학습 안내를 제공하면 그게 학습 안내 제공하는 과정 아니야? 그러면은 학습자는 그걸 통해서 의미론적 부호화를 하는거죠. 맞습니다.",
//         "time": 17.716825396825396,
//         "speed": 5.7572391055045875,
//         "fillerWord": "{\"가지고\":0,\"거\":0,\"거든\":0,\"거든요\":0,\"게\":0,\"그\":0,\"그거\":0,\"그게\":1,\"그냥\":0,\"그래도\":0,\"그래서\":0,\"그러고 나서\":0,\"그러고 보니\":0,\"그러고는\":0,\"그러니까\":0,\"그러다보니\":0,\"그러면\":0,\"그런 건\":0,\"그런 것\":0,\"그런데\":0,\"그럼\":0,\"그럼에도 불구하고\":0,\"그렇게\":0,\"그렇지만\":0,\"그리고\":0,\"근데\":0,\"기로\":0,\"기에\":0,\"나\":0,\"니까\":0,\"다\":0,\"더니\":0,\"더라\":0,\"더라고요\":0,\"되게\":0,\"또\":0,\"막뭐\":0,\"뭐랄까\":0,\"뭐지\":0,\"뭔가\":0,\"별로\":0,\"서요\":0,\"아\":0,\"아마\":0,\"아마도\":0,\"아무래도\":0,\"아무튼\":0,\"아서\":0,\"약간\":0,\"좀\":0,\"어\":0,\"어느\":0,\"어디\":0,\"어디까지\":0,\"어디로\":0,\"어디서\":0,\"어디에\":0,\"어때\":0,\"어떤\":0,\"어떻게\":0,\"어떻게 보면\":0,\"어떻게든\":0,\"어쩄든\":0,\"어쩌다가\":0,\"어쩌면\":0,\"어쩜\":0,\"어짜나\":0,\"에요\":0,\"예요\":0,\"왜냐하면\":0,\"요\":0,\"음\":0,\"이\":0,\"이거\":0,\"이게\":0,\"이런\":0,\"이런 식으로\":0,\"이렇게\":0,\"이상하게\":0,\"이제\":0,\"자\":0,\"저\":0,\"저거\":0,\"저게\":0,\"저렇게\":0,\"지요\":0,\"진짜\":0}"
// }
// }

const UseCurrentFeedbackStore = create<Feedback>((set, get) => ({
  feedbackFromCV: {
    crossing_arms_count: 1,
    hands_in_pockets_count: 2,
    walking_actions: 3,
    hand_to_face_actions: 4,
    hands_behind_back_actions: 5,
  },
  feedbackFromNLP: {
    script: null,
    time: 0,
    speed: 0,
    fillerWord: null,
  },
  setFeedbackFromCV: (feedbackFromCV) =>
    set({ feedbackFromCV: feedbackFromCV }),
  setFeedbackFromNLP: (feedbackFromNLP) =>
    set({ feedbackFromNLP: feedbackFromNLP }),
}));

export default UseCurrentFeedbackStore;
