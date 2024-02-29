let clicks = 0;
let timer;

function handleClick() {
    clicks++;
    document.getElementById('score').innerText = 'Clicks: ' + clicks;
}

function startTest() {
    clicks = 0;
    document.getElementById('score').innerText = 'Clicks: ' + clicks;
    document.getElementById('box').style.backgroundColor = '#3498db';
    document.getElementById('box').removeEventListener('click', handleClick); // Remove the event listener
    timer = setTimeout(endTest, 10000); // 10 seconds

    // Countdown from 10 to 0
    let timeLeft = 10;
    let countdownInterval = setInterval(function() {
        document.getElementById('time-left').innerText = 'Time Left: ' + timeLeft + 's';
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);
}

function endTest() {
    clearTimeout(timer);
    let cps = (clicks / 10).toFixed(2); // Calculate CPS
    alert('Test is over! Your CPS: ' + cps);
    document.getElementById('box').style.backgroundColor = '#3498db';
    document.getElementById('box').addEventListener('click', handleClick); // Add back the event listener
    clicks = 0;
    document.getElementById('score').innerText = 'Clicks: ' + clicks;
}
