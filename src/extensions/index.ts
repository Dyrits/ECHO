export {};

declare global {
  interface Date {
    ago(): string;
  }
}

Date.prototype.ago = function () {
  const seconds = Math.floor((new Date().getTime() - this.getTime()) / 1000);
  const intervals = [
    { label: "d", seconds: 86400 },
    { label: "h", seconds: 3600 },
    { label: "m", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count}${interval.label}`;
    }
  }

  return `${seconds}s`;
}