document.addEventListener("DOMContentLoaded", function () {
    let stopwatchDisplay = document.getElementById("stopwatch");
    let startBtn = document.getElementById("start-btn");
    let stopBtn = document.getElementById("stop-btn");
    let resetBtn = document.getElementById("reset-btn");
  
    let timer = null;
    let seconds = 0, minutes = 0, hours = 0;
  
    function updateStopwatch() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      stopwatchDisplay.textContent =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  
    startBtn.addEventListener("click", function () {
      if (!timer) {
        timer = setInterval(updateStopwatch, 1000);
      }
    });
  
    stopBtn.addEventListener("click", function () {
      clearInterval(timer);
      timer = null;
    });
  
    resetBtn.addEventListener("click", function () {
      clearInterval(timer);
      timer = null;
      seconds = 0;
      minutes = 0;
      hours = 0;
      stopwatchDisplay.textContent = "00:00:00";
    });
  
    let dobInput = document.getElementById("dob-input");
    let ageResult = document.getElementById("age-result");
  
    dobInput.addEventListener("mouseover", function () {
      let dobValue = dobInput.value;
      if (dobValue) {
        let birthDate = new Date(dobValue);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
  
        let monthDiff = today.getMonth() - birthDate.getMonth();
        let dayDiff = today.getDate() - birthDate.getDate();
  
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
          age--;
        }
  
        ageResult.textContent = `Your age is: ${age} years`;
      } else {
        ageResult.textContent = "Please select your Date of Birth.";
      }
    });
  
    let textArea = document.getElementById("text-area");
    let charCount = document.getElementById("char-count");
  
    textArea.addEventListener("input", function () {
      charCount.textContent = textArea.value.length;
    });
  });
  