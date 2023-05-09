export default interface Question {
  id: string;
  text: string;
  audio: string;
  competency: string;
  options: Option[];
}

export interface Option{
    text: string;
    audio: string;
    answer: ANSWER | string;
}

export enum ANSWER{
    BEST = 'BEST',
    NEXT_BEST = 'NEXTBEST',
    WRONG = 'WRONG'
}

export const AnswerAudio = {
    [ANSWER.BEST]: 'maze_best_active_m',
    [ANSWER.NEXT_BEST]: 'maze_next_best_active_m',
    [ANSWER.WRONG]: 'maze_wrong_active_m'
}