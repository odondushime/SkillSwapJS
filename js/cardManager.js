// filepath: skillswap/js/cardManager.js
export function createSkillCard(skill, description) {
  const card = document.createElement("div");
  card.className = "skill-card";
  card.innerHTML = `
        <h3>${skill}</h3>
        <p>${description}</p>
    `;
  return card;
}
