/**
 * Starts a timer that calls a callback at regular intervals and an onComplete callback when time is up.
 *
 * @param {number} duration - The duration of the timer in seconds.
 * @param {() => void} onTick - The callback to call on each tick.
 * @param {() => void} onComplete - The callback to call when the timer completes.
 * @returns {() => void} A function to stop the timer.
 */
export const startTimer = (
  duration: number,
  onTick: (remaining: number) => void,
  onComplete: () => void
) => {
  let timeRemaining = duration;

  const interval = setInterval(() => {
    timeRemaining -= 1;
    onTick(timeRemaining);
    if (timeRemaining <= 0) {
      clearInterval(interval);
      onComplete();
    }
  }, 1000);

  return () => clearInterval(interval);
};
