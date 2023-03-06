function runClock() {
    // Get the current time
    let now = new Date();
  
    // Calculate the angles of the clock hands
    let hours = now.getHours() % 12;
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let hourAngle = (hours * 30) + (minutes / 2); // 30 degrees per hour + 0.5 degrees per minute
    let minuteAngle = (minutes * 6) + (seconds / 10); // 6 degrees per minute + 0.1 degrees per second
    let secondAngle = seconds * 6; // 6 degrees per second
  
    // Rotate the clock hands
    document.querySelector('.hour-hand').style.transform = `rotate(${hourAngle}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteAngle}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${secondAngle}deg)`;
  }
  
  // Run the clock every second
  setInterval(runClock, 1000);
  