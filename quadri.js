function updateClock() {
    const hourHand = document.getElementsByClassName('hour')[0];
    const minuteHand = document.getElementsByClassName('minute')[0];
    const secondHand = document.getElementsByClassName('second')[0];
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
  
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  
  setInterval(updateClock, 1000);
  
  updateClock(); // Initial call to set the correct time immediately