export interface FunFact {
  id: number;
  prompt: string;
  detail: string;
}

export const funFacts: FunFact[] = [
  {
    id: 1,
    prompt: "Mars is named after the Roman god of war.",
    detail: "The month March was also named after him. Mars's moons are named after the gods of fear and panic, Phobos and Deimos.",
  },
  {
    id: 2,
    prompt: "Did you know, a year on Mars is not the same as on Earth?",
    detail: "One martian year is about twice as long as a year on Earth, so you only get one birthday every two years!",
  },
  {
    id: 3,
    prompt: "Did you know that gravity is different on Mars?",
    detail: "On Mars, you only weigh three eighths of what you weigh on Earth, meaning you could jump more than twice as high!",
  },
  {
    id: 4,
    prompt: "Do you know why Mars is red?",
    detail: "The surface of the planet Mars appears reddish from a distance because of rusty dust suspended in the atmosphere.",
  },
];
