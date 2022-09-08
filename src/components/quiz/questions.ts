export interface Question {
  id: number;
  question: string;
  answers: string[];
  answer: number;
  details: string;
  url: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "How many moons does Mars have?",
    answers: ["none", "1", "2"],
    answer: 2,
    details:
      "Mars has 2 moons. They are named Phobos, meaning fear and Deimos, which is greek for panik.",
    url: "https://svs.gsfc.nasa.gov/vis/a010000/a011300/a011326/marsmoons_1024x576.jpg",
  },
  {
    id: 2,
    question: "What is Mars’s nickname?",
    answers: ["The red Planet", "The dusty planet", "The stinky planet"],
    answer: 0,
    details: "Rusted iron particles in rocks give mars it's distinct red hue",
    url: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia19393-main_sol3973_spirit_of_st_louis_l257atc.jpg",
  },
  {
    id: 3,
    question: "About how long would it take to travel to Mars? ",
    answers: ["Three days", "One week", "Eight months"],
    answer: 2,
    details:
      "Earth and Mars follow different orbits around the Sun, so space explorers must wait until the two planets are close together to blast off.Even then, the trip would take a minimum of about eight months.",
    url: "https://www.nasa.gov/sites/default/files/thumbnails/image/48181678987_dd26a6ed67_k.jpg",
  },
  {
    id: 4,
    question:
      "True or false? Scientists have found evidence of liquid water on Mars. ",
    answers: ["true", "false"],
    answer: 0,
    details:
      "Scientist think Mars once had rivers, lakes and maybe even oceans. Today small amounts of water trickle down crater walls",
    url: "https://www.nasa.gov/sites/default/files/thumbnails/image/esp_044491_1585.jpg",
  },
  {
    id: 5,
    question:
      "This planet is named after the Roman god Mars. What is he the god of? ",
    answers: ["Hunting", "War", "Love"],
    answer: 1,
    details:
      "Ancient people thought the planet looked as red as blood and named it after the roman god of war",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/0_Statue_de_Mars_%28Pyrrhus%29_-_Musei_Capitolini_-_MC0058_%282%29.JPG/220px-0_Statue_de_Mars_%28Pyrrhus%29_-_Musei_Capitolini_-_MC0058_%282%29.JPG",
  },
  {
    id: 6,
    question: "Spirit landed at the ___________ crater on Mars. ",
    answers: ["Olympus", "Gusev", "Gale"],
    answer: 1,
    details:
      "Gusev is a crater on the planet Mars about 166 kilometers in diameter.Its was the landing site of the first of NASA's two Mars Exploration Rovers, named Spirit",
    url: "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA04274.width-1600.jpg",
  },
  {
    id: 7,
    question:
      "Mars’s atmosphere has too much of which gas, making it impossible for humans to breathe without a space suit? ",
    answers: ["Carbon dioxide", "Hydrogen", "Oxygen"],
    answer: 0,
    details:
      "Carbon dioxide is a gas that we exale-and too much can be toxic.To live on Mars we'd need a constant supply of breathable oxygen.",
    url: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia20758-1041.jpg",
  },
  {
    id: 8,
    question:
      "True or false? Mars has the largest volcano in the solar system. ",
    answers: ["True", "False"],
    answer: 0,
    details: "Olympus Mons is so large it would cover the state of Arizona! ",
    url: "https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA00300.jpg",
  },
  {
    id: 9,
    question: "What color is the Martian sky during the day? ",
    answers: ["Turquoise", "Buttersotch", "Purple"],
    answer: 1,
    details:
      "The sky is yellowish brown in day time but turns blue at sunset and sunrise.",
    url: "https://www.nasa.gov/sites/default/files/images/270982main_PIA01522_full.jpg",
  },
  {
    id: 10,
    question:
      "This rover launched a month after its twin rover, Spirit, was launched to Mars. ",
    answers: ["Curiousity", "Oppurtunity", "Discovery"],
    answer: 1,
    details:
      " Opportunity, also nicknamed Oppy, launched by NASA landed in Meridiani Planum on January 25, 2004, three weeks after NASA's twin Spirit.",
    url: "https://www.nasa.gov/sites/default/files/mer_2003_opportunity.gif",
  },
];
