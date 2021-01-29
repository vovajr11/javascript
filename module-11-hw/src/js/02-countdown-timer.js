import '../css/common.css';

const refs = {
  dateValue: document.querySelector('[data-value="days"]'),
  hoursValue: document.querySelector('[data-value="hours"]'),
  minsValue: document.querySelector('[data-value="mins"]'),
  secsValue: document.querySelector('[data-value="secs"]'),
  timeFace: document.getElementById('timer-1'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  intervalId = setInterval(() => {
    const dateNow = Date.now();
    const time = this.targetDate - dateNow;

    this.getTimeComponents(time);
    this.timeFinish(time);
  }, 1000);

  getTimeComponents(time) {
    /*
     * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
     * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
     */
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    /*
     * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
     * остатка % и делим его на количество миллисекунд в одном часе
     * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
     */
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );

    /*
     * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
     * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
     */
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    /*
     * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
     * миллисекунд в одной секунде (1000)
     */
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.dateValue.textContent = days;
    refs.hoursValue.textContent = hours;
    refs.minsValue.textContent = mins;
    refs.secsValue.textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  timeFinish(time) {
    if (time < 0) {
      clearInterval(intervalId);
      refs.timeFace.textContent = 'Finish -_-';
    }
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Feb 17, 2021'),
});
