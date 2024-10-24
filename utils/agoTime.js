export function afficherTempsEcoule(dateString) {
  const [jour, mois, annee] = dateString.split('/').map(Number);
  const date = new Date(annee, mois - 1, jour);
  const maintenant = new Date();

  const difference = maintenant - date;
  const jours = Math.floor(difference / (1000 * 60 * 60 * 24));
  const semaines = Math.floor(jours / 7);
  const moisEcoules = Math.floor(jours / 30);
  const anneesEcoulees = Math.floor(jours / 365);

  if (jours < 7) {
    return `Il y a ${jours} jour${jours > 1 ? 's' : ''}`;
  } else if (jours < 30) {
    return `Il y a ${semaines} semaine${semaines > 1 ? 's' : ''}`;
  } else if (moisEcoules < 12) {
    return `Il y a ${moisEcoules} mois`;
  } else {
    return `Il y a ${anneesEcoulees} an${anneesEcoulees > 1 ? 's' : ''}`;
  }
}
