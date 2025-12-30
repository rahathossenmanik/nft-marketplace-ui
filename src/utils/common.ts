export const getDeadlineCountdown = (
  auctionDeadline: string
) => {
  const diff = new Date(auctionDeadline).getTime() - Date.now();

  if (diff <= 0) {
    return 'Ended';
  }

  return `${Math.floor(diff / (1000 * 60 * 60 * 24))}d ${Math.floor((diff / (1000 * 60 * 60)) % 24)}h ${Math.floor((diff / (1000 * 60)) % 60)}m ${Math.floor((diff / 1000) % 60)}s`;
};
