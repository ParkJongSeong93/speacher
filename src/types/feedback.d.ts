export type Feedback = {
    videoId: number;
    title: string;
    videoUrl: string;
    createdAt: string;
    crossing_arms_count: number;
    hands_in_pockets_count: number;
    walking_actions: number;
    hand_to_face_actions: number;
    hands_behind_back_actions: number;
    script: string;
    time: number;
    speed: number;
    fillerWord: string;
    gpt: string;
}