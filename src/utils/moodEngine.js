const MOOD_MAP = [
  {
    keywords: ["happy", "joy", "great", "excited", "fantastic", "wonderful", "euphoric", "elated", "good"],
    tag: "happy",
    label: "Euphoric",
    color: "#c9a84c",
  },
  {
    keywords: ["sad", "melanchol", "cry", "tears", "lonely", "heartbreak", "depress", "miss", "grieve"],
    tag: "melancholy",
    label: "Melancholic",
    color: "#4c7bc9",
  },
  {
    keywords: ["angry", "rage", "furious", "frustrat", "mad", "annoyed", "irritat"],
    tag: "aggressive",
    label: "Intense",
    color: "#c94c4c",
  },
  {
    keywords: ["calm", "peace", "relax", "chill", "serene", "quiet", "tranquil"],
    tag: "chill",
    label: "Serene",
    color: "#4cb87a",
  },
  {
    keywords: ["nostalgic", "remember", "memory", "past", "childhood", "used to", "those days"],
    tag: "nostalgia",
    label: "Nostalgic",
    color: "#c9784c",
  },
  {
    keywords: ["romantic", "love", "crush", "tender", "longing", "desire", "miss you"],
    tag: "romantic",
    label: "Romantic",
    color: "#c94c8b",
  },
  {
    keywords: ["dark", "gloomy", "empty", "hollow", "cold", "bleak", "shadow"],
    tag: "dark",
    label: "Dark",
    color: "#7a4cc9",
  },
  {
    keywords: ["hype", "energy", "party", "dance", "pump", "workout", "fire", "let's go"],
    tag: "dance",
    label: "Energetic",
    color: "#4cc9c9",
  },
  {
    keywords: ["focus", "study", "work", "concentrate", "think", "productiv"],
    tag: "ambient",
    label: "Focused",
    color: "#8b8b8b",
  },
  {
    keywords: ["hopeful", "inspir", "motivated", "dream", "believe", "rise", "better"],
    tag: "inspiring",
    label: "Hopeful",
    color: "#c9c94c",
  },
];




export const detectMoods = (text) => {

  const lower = text.toLowerCase();
  const detected = MOOD_MAP.filter(mood =>
    mood.keywords.some(keyword => lower.includes(keyword))
  );
  if (detected.length === 0) {
    return [MOOD_MAP.find(mood => mood.tag === "chill")];
  }

  return detected;
}