import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate = selectedDates[0];
      const currentDate = new Date();
  
      if (selectedDate <= currentDate) {
        Notiflix.Notify.failure('Please choose a date in the future');
        document.querySelector('[data-start]').disabled = true;
        document.getElementById('datetime-picker').value = '';
      } else {
        document.querySelector('[data-start]').disabled = false;
        
      }
    },
  };
  


  flatpickr("#datetime-picker", options);
  
  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
  
  function updateTimer() {
    const endDate = new Date(document.getElementById('datetime-picker').value).getTime();
    const currentDate = new Date().getTime();
    const timeRemaining = endDate - currentDate;
  
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      Notiflix.Notify.success('Countdown timer reached 00:00:00:00');
      document.querySelector('[data-start]').disabled = true;
      document.getElementById('datetime-picker').value = '';

    document.querySelector('[data-days]').textContent = '00';
    document.querySelector('[data-hours]').textContent = '00';
    document.querySelector('[data-minutes]').textContent = '00';
    document.querySelector('[data-seconds]').textContent = '00';

    return;
    }
  
    const { days, hours, minutes, seconds } = convertMs(timeRemaining);
    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
  }
  
  let timerInterval;
  
  document.querySelector('[data-start]').addEventListener('click', function () {
    timerInterval = setInterval(updateTimer, 1000);
    Notiflix.Notify.info('Countdown Start');
  });
  
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }




