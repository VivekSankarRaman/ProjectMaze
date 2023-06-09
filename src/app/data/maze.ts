import { TileConfig } from '../models/maze';

export const MAZE_GRID: TileConfig[][] = [
  [
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: true, down: true },
      puzzle: {
        isComplete: false,
        question: {
          id: '1',
          text: 'It has been raining and all of your friends are splashing around in the puddles. What should you do?',
          audio: 'MAZE_ACT_6',
          competency: 'Active',
          options: [
            {
              text: "Tell them to stop because they'll be cold and wet the rest of the day.",
              audio: 'MAZE_ACT_6_ANS1',
              answer: 'BEST',
            },
            {
              text: "Not join in because you don't want to get soaked.",
              audio: 'MAZE_ACT_6_ANS2',
              answer: 'NEXTBEST',
            },
            {
              text: 'Encourage them to continue.',
              audio: 'MAZE_ACT_6_ANS4',
              answer: 'WRONG',
            },
            {
              text: 'Join in.',
              audio: 'MAZE_ACT_6_ANS3',
              answer: 'WRONG',
            },
          ],
        },
      },
    },
    {
      boundaries: { left: true, right: false, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: {
        isComplete: false,
        question: {
          id: '2',
          text: 'Why should we stay seated in class?',
          audio: 'MAZE_ACT_7',
          competency: 'Active',
          options: [
            {
              text: 'It helps keep a classroom peaceful so we can all concentrate.',
              audio: 'MAZE_ACT_7_ANS1',
              answer: 'BEST',
            },
            {
              text: "So we don't cause accidents by wandering around.",
              audio: 'MAZE_ACT_7_ANS2',
              answer: 'NEXTBEST',
            },
            {
              text: "So it's harder for us to escape!",
              audio: 'MAZE_ACT_7_ANS4',
              answer: 'WRONG',
            },
            {
              text: 'standing up is hard work.',
              audio: 'MAZE_ACT_7_ANS3',
              answer: 'WRONG',
            },
          ],
        },
      },
    },
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
  ],
  [
    {
      boundaries: { left: true, right: false, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: false, down: false },
      puzzle: null,
    },
  ],
  [
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: {
        isComplete: false,
        question: {
          id: '5',
          text: 'How can meditation be helpful?',
          audio: 'MAZE_ACT_10',
          competency: 'Active',
          options: [
            {
              text: 'so we can ignore people asking for help.',
              audio: 'MAZE_ACT_10_ANS3',
              answer: 'WRONG',
            },
            {
              text: "It means we don't have to do work when we're meditating.",
              audio: 'MAZE_ACT_10_ANS4',
              answer: 'WRONG',
            },
            {
              text: 'It helps us relax.',
              audio: 'MAZE_ACT_10_ANS2',
              answer: 'NEXTBEST',
            },
            {
              text: 'It makes us more aware of our thoughts and body.',
              audio: 'MAZE_ACT_10_ANS1',
              answer: 'BEST',
            },
          ],
        },
      },
    },
    {
      boundaries: { left: true, right: false, up: true, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
  ],
  [
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: true, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: {
        isComplete: false,
        question: {
          id: '4',
          text: 'Why can breathing exercises be helpful?',
          audio: 'MAZE_ACT_9',
          competency: 'Active',
          options: [
            {
              text: 'It can take our mind off whatever is bothering us.',
              audio: 'MAZE_ACT_9_ANS2',
              answer: 'NEXTBEST',
            },
            {
              text: 'It lowers adrenaline and helps with anxiety.',
              audio: 'MAZE_ACT_9_ANS1',
              answer: 'BEST',
            },
            {
              text: 'It helps us hold our breath longer.',
              audio: 'MAZE_ACT_9_ANS4',
              answer: 'WRONG',
            },
            {
              text: 'It uses up some of the air.',
              audio: 'MAZE_ACT_9_ANS3',
              answer: 'WRONG',
            },
          ],
        },
      },
    },
  ],
  [
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: false, down: false },
      puzzle: {
        isComplete: false,
        question: {
          id: '9',
          text: 'You are playing a game with your friends and one of them wins by cheating. What do you do?',
          audio: 'MAZE_ACT_4',
          competency: 'Active',
          options: [
            {
              text: 'Call them something hurtful.',
              audio: 'MAZE_ACT_4_ANS3',
              answer: 'WRONG',
            },
            {
              text: "Tell them they can't play anymore and continue without them.",
              audio: 'MAZE_ACT_4_ANS2',
              answer: 'NEXTBEST',
            },
            {
              text: "Explain that isn't fair on everyone else and ask them to play properly.",
              audio: 'MAZE_ACT_4_ANS1',
              answer: 'BEST',
            },
            {
              text: 'Tell a grown-up.',
              audio: 'MAZE_ACT_4_ANS4',
              answer: 'WRONG',
            },
          ],
        },
      },
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: false, down: false },
      puzzle: null,
    },
  ],
  [
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: {
        isComplete: false,
        question: {
          id: '3',
          text: 'Your friends invite you to play a game where you swing each other around by your coats. What do you do?',
          audio: 'MAZE_ACT_8',
          competency: 'Active',
          options: [
            {
              text: 'Tell a teacher what they are doing.',
              audio: 'MAZE_ACT_8_ANS2',
              answer: 'NEXTBEST',
            },
            {
              text: 'Think about how easy it would be to get hurt or ruin your coat before saying no.',
              audio: 'MAZE_ACT_8_ANS1',
              answer: 'BEST',
            },
            {
              text: 'Join in.',
              audio: 'MAZE_ACT_8_ANS3',
              answer: 'WRONG',
            },
            {
              text: 'Get more people to play.',
              audio: 'MAZE_ACT_8_ANS4',
              answer: 'WRONG',
            },
          ],
        },
      },
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: false, down: false },
      puzzle: {
        isComplete: false,
        question: {
          id: '6',
          text: 'At the start of a PE lesson, you are asked to spend five minutes doing whatever exercise you feel like. What do you do?',
          audio: 'MAZE_ACT_1',
          competency: 'Active',
          options: [
            {
              text: 'Do some of your yoga exercises.',
              audio: 'MAZE_ACT_1_ANS2',
              answer: 'NEXTBEST',
            },
            {
              text: 'Spend the time doing nothing and talk to your friend instead.',
              audio: 'MAZE_ACT_1_ANS3',
              answer: 'WRONG',
            },
            {
              text: 'Do as little as possible.',
              audio: 'MAZE_ACT_1_ANS4',
              answer: 'WRONG',
            },
            {
              text: 'Do some gentle warm ups and stretches.',
              audio: 'MAZE_ACT_1_ANS1',
              answer: 'BEST',
            },
          ],
        },
      },
    },
    {
      boundaries: { left: false, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
  ],
  [
    {
      boundaries: { left: true, right: false, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: false },
      puzzle: null,
    },
  ],
  [
    {
      boundaries: { left: true, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: true, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: false, down: false },
      puzzle: {
        isComplete: false,
        question: {
          id: '10',
          text: "Your class are split into teams for a competition and your team doesn't win. What do you do?",
          audio: 'MAZE_ACT_5',
          competency: 'Active',
          options: [
            {
              text: 'Praise the winning team for their hard work.',
              audio: 'MAZE_ACT_5_ANS1',
              answer: 'BEST',
            },
            {
              text: 'Support the rest of your team.',
              audio: 'MAZE_ACT_5_ANS2',
              answer: 'NEXTBEST',
            },
            {
              text: 'Stomp off angrily.',
              audio: 'MAZE_ACT_5_ANS3',
              answer: 'WRONG',
            },
            {
              text: 'Moan that you never win anything.',
              audio: 'MAZE_ACT_5_ANS4',
              answer: 'WRONG',
            },
          ],
        },
      },
    },
    {
      boundaries: { left: false, right: false, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: false, down: false },
      puzzle: null,
    },
  ],
  [
    {
      boundaries: { left: true, right: false, up: true, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: true, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: false, down: false },
      puzzle: {
        isComplete: false,
        question: {
          id: '7',
          text: 'Your teacher is asking for volunteers to help tidy the classroom at breaktime. What should you do? ',
          audio: 'MAZE_ACT_2',
          competency: 'Active',
          options: [
            {
              text: "Keep quiet and hope they don't pick you.",
              audio: 'MAZE_ACT_2_ANS3',
              answer: 'WRONG',
            },
            {
              text: 'Volunteer to be helpful.',
              audio: 'MAZE_ACT_2_ANS1',
              answer: 'BEST',
            },
            {
              text: 'Volunteer but ask what you get out of it.',
              audio: 'MAZE_ACT_2_ANS2',
              answer: 'NEXTBEST',
            },
            {
              text: "Complain that you shouldn't have to clean up mess you didn't make.",
              audio: 'MAZE_ACT_2_ANS4',
              answer: 'WRONG',
            },
          ],
        },
      },
    },
    {
      boundaries: { left: false, right: false, up: false, down: false },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: true, up: false, down: true },
      puzzle: null,
    },
  ],
  [
    {
      boundaries: { left: true, right: false, up: true, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: true, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: true, right: false, up: false, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: true, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: true, down: true },
      puzzle: {
        isComplete: false,
        question: {
          id: '8',
          text: "You fall over in the playground. It doesn't hurt too much and you aren't bleeding, wet and haven't even torn your clothes. What do you do?",
          audio: 'MAZE_ACT_3',
          competency: 'Active',
          options: [
            {
              text: 'Complain to a grown-up.',
              audio: 'MAZE_ACT_3_ANS4',
              answer: 'WRONG',
            },
            {
              text: 'Walk it off.',
              audio: 'MAZE_ACT_3_ANS2',
              answer: 'NEXTBEST',
            },
            { text: 'Cry.', audio: 'MAZE_ACT_3_ANS3', answer: 'WRONG' },
            {
              text: 'Carry on with whatever you were doing before.',
              audio: 'MAZE_ACT_3_ANS1',
              answer: 'BEST',
            },
          ],
        },
      },
    },
    {
      boundaries: { left: false, right: false, up: true, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: false, up: true, down: true },
      puzzle: null,
    },
    {
      boundaries: { left: false, right: true, up: true, down: true },
      puzzle: null,
    },
  ],
];
