function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

 
  const startButton = document.querySelector('[data-start]');
  const stopButton = document.querySelector('[data-stop]');


let interval;

startButton.addEventListener('click', function() {
    this.disabled = true;
    stopButton.disabled = false;

    interval = setInterval(function() {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 500);
});

stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    this.disabled = true;
    clearInterval(interval);
});

//   let intervalId;

//     document.getElementById('startButton').addEventListener('click', function() {
//       this.disabled = true; // Disable the "Start" button
//       document.getElementById('stopButton').disabled = false; // Enable the "Stop" button

//       intervalId = setInterval(function() {
//         document.body.style.backgroundColor = getRandomHexColor();
//       }, 1000);
//     });

//     document.getElementById('stopButton').addEventListener('click', function() {
//       document.getElementById('startButton').disabled = false; // Enable the "Start" button
//       this.disabled = true; // Disable the "Stop" button

//       clearInterval(intervalId);
//     });