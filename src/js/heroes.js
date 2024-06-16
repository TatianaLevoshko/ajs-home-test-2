export default function heroes(heros) {
	return heros.sort((a, b) => b.health - a.health);
  }