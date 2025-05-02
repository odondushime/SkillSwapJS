// filepath: skillswap/js/matchEngine.js
export function findMatches(userSkills, availableSkills) {
  return availableSkills.filter((skill) => userSkills.includes(skill));
}
