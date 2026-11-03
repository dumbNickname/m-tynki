export function opinieLabel(n: number) {
  const lastTwo = n % 100;
  const last = n % 10;
  if (n === 1) return "opinia";
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return "opinie";
  return "opinii";
}
