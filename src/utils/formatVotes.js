export default function formatVotes(votes) {
  if (!votes || votes === 'N/A') return 'N/A';
  const num = Number(votes.replace(/,/g, ''));

  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(2)}M`;
  }

  if (num >= 1000) {
    return `${Math.floor(num / 1000)}K`;
  }

  return num;
}
