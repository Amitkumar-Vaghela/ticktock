document.addEventListener('DOMContentLoaded', function() {
    let count = 10;
    const timerDisplay = document.getElementById('timer');

    function countdown() {
        timerDisplay.textContent = count;
        count--;

        if (count < 0) {
            count = 10; // Reset the countdown
        }
    }

    setInterval(countdown, 1000);
});
