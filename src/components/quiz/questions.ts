export interface Question {
  questionText: string;
  answersText: string[];
  correctAnswerIndex: number;
  answerDetailsText: string;
  questionImageUrl: string;
}

export const questions: Question[] = [
  {    
    questionText: "How many moons does Mars have?",
    answersText: ["none", "1", "2"],
    correctAnswerIndex: 2,
    answerDetailsText: "Mars has 2 moons. They are named Phobos, meaning fear and Deimos, which is Greek for panic.",
    questionImageUrl: "https://svs.gsfc.nasa.gov/vis/a010000/a011300/a011326/marsmoons_1024x576.jpg",
  },
  {   
    questionText: "What is Mars’ nickname?",
    answersText: ["The Red Planet", "The Dusty Planet", "The Stinky Planet"],
    correctAnswerIndex: 0,
    answerDetailsText: "Rusted iron particles in rocks give Mars its distinct red hue",
    questionImageUrl: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia19393-main_sol3973_spirit_of_st_louis_l257atc.jpg",
  },
  {  
    questionText: "About how long would it take to travel to Mars?",
    answersText: ["Three days", "One week", "Eight months"],
    correctAnswerIndex: 2,
    answerDetailsText:"Earth and Mars follow different orbits around the Sun, so space explorers must wait until the two planets are close together to blast off. Even then, the trip would take a minimum of about eight months.",
    questionImageUrl: "https://www.nasa.gov/sites/default/files/thumbnails/image/48181678987_dd26a6ed67_k.jpg",
  },
  {    
    questionText: "True or false? Scientists have found evidence of liquid water on Mars.",
    answersText: ["True", "False"],
    correctAnswerIndex: 0,
    answerDetailsText: "Scientist think Mars once had rivers, lakes and maybe even oceans. Today small amounts of water trickle down crater walls!",
    questionImageUrl: "https://www.nasa.gov/sites/default/files/thumbnails/image/esp_044491_1585.jpg",
  },
  {   
    questionText: "This planet is named after the Roman god Mars. What is he the god of?",
    answersText: ["Hunting", "War", "Love"],
    correctAnswerIndex: 1,
    answerDetailsText: "Ancient people thought the planet looked as red as blood and named it after the Roman god of war.",
    questionImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/0_Statue_de_Mars_%28Pyrrhus%29_-_Musei_Capitolini_-_MC0058_%282%29.JPG/220px-0_Statue_de_Mars_%28Pyrrhus%29_-_Musei_Capitolini_-_MC0058_%282%29.JPG",
  },
  {
    questionText: "Spirit landed at the ___________ crater on Mars.",
    answersText: ["Olympus", "Gusev", "Gale"],
    correctAnswerIndex: 1,
    answerDetailsText: "Gusev is a crater on the planet Mars about 166 kilometers in diameter. It was the landing site of the first of NASA's two Mars Exploration Rovers, named Spirit.",
    questionImageUrl: "https://d2pn8kiwq2w21t.cloudfront.net/images/jpegPIA04274.width-1600.jpg",
  },
  {    
    questionText: "Mars’ atmosphere has too much of which gas, making it impossible for humans to breathe without a space suit?",
    answersText: ["Carbon dioxide", "Hydrogen", "Oxygen"],
    correctAnswerIndex: 0,
    answerDetailsText: "Carbon dioxide is a gas that we exhale-and too much can be toxic.To live on Mars we'd need a constant supply of breathable oxygen.",
    questionImageUrl: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia20758-1041.jpg",
  },
  {
    questionText: "True or false? Mars has the largest volcano in the solar system.",
    answersText: ["True", "False"],
    correctAnswerIndex: 0,
    answerDetailsText: "Olympus Mons is so large it would cover the state of Arizona!",
    questionImageUrl: "https://d2pn8kiwq2w21t.cloudfront.net/original_images/jpegPIA00300.jpg",
  },
  {
    questionText: "What color is the Martian sky during the day?",
    answersText: ["Turquoise", "Buttersotch", "Purple"],
    correctAnswerIndex: 1,
    answerDetailsText: "The sky is yellowish brown in day time but turns blue at sunset and sunrise.",
    questionImageUrl: "https://www.nasa.gov/sites/default/files/images/270982main_PIA01522_full.jpg",
  },
  {
    questionText: "This rover launched a month after its twin rover, Spirit, was launched to Mars.",
    answersText: ["Curiousity", "Oppurtunity", "Discovery"],
    correctAnswerIndex: 1,
    answerDetailsText: "Opportunity, also nicknamed Oppy, launched by NASA landed in Meridiani Planum on January 25, 2004, three weeks after NASA's twin Spirit.",
    questionImageUrl: "https://www.nasa.gov/sites/default/files/mer_2003_opportunity.gif",
  },
];
