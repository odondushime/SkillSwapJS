// filepath: skillswap/js/app.js
import { createSkillCard } from "./cardManager.js";
import { findMatches } from "./matchEngine.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("SkillSwapJS App Initialized");
  // Example: Create a skill card
  const skillCard = createSkillCard("JavaScript", "Looking to learn React");
  document.getElementById("skill-cards").appendChild(skillCard);
});
