// utils/readingTime.js
export function tempsDeLectureEnFrancais(nombreDeMots) {
  const motsParMinute = 200; // Vitesse de lecture moyenne
  const tempsEnMinutes = Math.ceil(nombreDeMots / motsParMinute);

  if (tempsEnMinutes === 1) {
    return `${tempsEnMinutes} minute de lecture`;
  } else {
    return `${tempsEnMinutes} minutes de lecture`;
  }
}
