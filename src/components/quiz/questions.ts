export interface Question {
  id: number;
  Question: string;
  Answers: string[];
  Answer: number;
  details: string;
  url: string;
}

export const questions: Question[] = [
  {
    "id": 1,
    "Question": "How many moons does Mars have?",
    "Answers": ["none", "1", "2"],
    "Answer": 2,
    "details": "Mars has 2 moons. They are named Phobos, meaning fear and Deimos, which is greek for panik.",
    "url": "https://svs.gsfc.nasa.gov/vis/a010000/a011300/a011326/marsmoons_1024x576.jpg"
  },
  {
    "id": 2,
    "Question": "What is Mars’s nickname?",
    "Answers": ["The red Planet", "The dusty planet", "The stinky planet"],
    "Answer": 0,
    "details": "Rusted iron particles in rocks give mars it's distinct red hue",
    "url": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia19393-main_sol3973_spirit_of_st_louis_l257atc.jpg"
  },
  {
    "id": 3,
    "Question": "About how long would it take to travel to Mars? ",
    "Answers": ["Three days", "One week", "Eight months"],
    "Answer": 2,
    "details": "Earth and Mars follow different orbits around the Sun, so space explorers must wait until the two planets are close together to blast off.Even then, the trip would take a minimum of about eight months.",
    "url": "https://www.nasa.gov/sites/default/files/thumbnails/image/48181678987_dd26a6ed67_k.jpg"
  },
  {
    "id": 4,
    "Question": "True or false? Scientists have found evidence of liquid water on Mars. ",
    "Answers": ["true", "false"],
    "Answer": 0,
    "details": "Scientist think Mars once had rivers, lakes and maybe even oceans. Today small amounts of water trickle down crater walls",
    "url": "https://www.nasa.gov/sites/default/files/thumbnails/image/esp_044491_1585.jpg"
  },
  {
    "id": 5,
    "Question": "This planet is named after the Roman god Mars. What is he the god of? ",
    "Answers": ["Hunting", "War", "Love"],
    "Answer": 1,
    "details": "Ancient people thought the planet looked as red as blood and named it after the roman god of war",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/0_Statue_de_Mars_%28Pyrrhus%29_-_Musei_Capitolini_-_MC0058_%282%29.JPG/220px-0_Statue_de_Mars_%28Pyrrhus%29_-_Musei_Capitolini_-_MC0058_%282%29.JPG"
  },
  {
    "id": 6,
    "Question": "Spirit landed at the ___________ crater on Mars. ",
    "Answers": ["Olympus", "Gusev", "Gale"],
    "Answer": 1,
    "details": "Gusev is a crater on the planet Mars about 166 kilometers in diameter.Its was the landing site of the first of NASA's two Mars Exploration Rovers, named Spirit",
    "url": "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA04274.width-1600.jpg"
  },
  {
    "id": 7,
    "Question": "Mars’s atmosphere has too much of which gas, making it impossible for humans to breathe without a space suit? ",
    "Answers": ["Carbon dioxide", "Hydrogen", "Oxygen"],
    "Answer": 0,
    "details": "Carbon dioxide is a gas that we exale-and too much can be toxic.To live on Mars we'd need a constant supply of breathable oxygen.",
    "url": "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia20758-1041.jpg"
  },
  {
    "id": 8,
    "Question": "True or false? Mars has the largest volcano in the solar system. ",
    "Answers": ["True", "False"],
    "Answer": 0,
    "details": "Olympus Mons is so large it would cover the state of Arizona! ",
    "url": "https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA00300.jpg"
  },
  {
    "id": 9,
    "Question": "What color is the Martian sky during the day? ",
    "Answers": ["Turquoise", "Buttersotch", "Purple"],
    "Answer": 1,
    "details": "The sky is yellowish brown in day time but turns blue at sunset and sunrise.",
    "url": "https://www.nasa.gov/sites/default/files/images/270982main_PIA01522_full.jpg"
  },
  {
    "id": 10,
    "Question": "This rover launched a month after its twin rover, Spirit, was launched to Mars. ",
    "Answers": ["Curiousity", "Oppurtunity", "Discovery"],
    "Answer": 1,
    "details": " Opportunity, also nicknamed Oppy, launched by NASA landed in Meridiani Planum on January 25, 2004, three weeks after NASA's twin Spirit.",
    "url": "https://www.nasa.gov/sites/default/files/mer_2003_opportunity.gif"
  }
]
