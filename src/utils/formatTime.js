export default function formatTime(minutes) {
  if (minutes === 'N/A') {
    return 'N/A';
  }

  const totalMinutes = Number.parseInt(minutes, 10);

  if (totalMinutes < 60) return `${totalMinutes} min`;

  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;

  return mins ? `${hours} h ${mins} m` : `${hours} h`;
}
