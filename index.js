const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let remainingSeconds = seconds;

    const intervalId = setInterval(() => {
      if (remainingSeconds === 0) {
        clearInterval(intervalId);
        return;
      }

      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const secs = remainingSeconds % 60;

      const formattedTime = formatTime(hours, minutes, secs);

      timerEl.textContent = formattedTime;

      remainingSeconds--;
    }, 1000);
  };
};

const formatTime = (hours, minutes, seconds) => {
  const paddedHours = String(hours).padStart(2, '0');
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
};



const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  const cleanInputValue = inputEl.value.replace(/\D/g, '');
  inputEl.value = cleanInputValue;
});


buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
