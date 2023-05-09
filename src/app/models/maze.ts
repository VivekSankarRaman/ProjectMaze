import { Direction } from "./core_types"
import Question from "./question"

export interface TileConfig {
    boundaries: {
        [Direction.LEFT]: boolean,
        [Direction.RIGHT]: boolean,
        [Direction.UP]: boolean,
        [Direction.DOWN]: boolean,
    },
    puzzle: Puzzle | null,
}

export interface Puzzle{
    question: Question,
    isComplete: boolean,
}

export type Position = [number, number];