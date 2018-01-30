// Add your javascript here
// i/p -> 5 -> 5, 4, ...0
// Start, pause, resume, reset
// < 3 -> Red

(function(module) {
    var timerModule = {};
    var timerInput;
    var currentTimerValue;
    var interval = null;
    var isPaused = false;

    function _init() { }
    function _add() { }

    function showCurrentValue() {
        document.getElementById("timerDisplay").innerHTML = currentTimerValue;
    }
    
    function startTimer() {
        showCurrentValue();
        startInterval();
    }

    function startInterval() {
        interval = setInterval(function() {
            if (currentTimerValue > 0) {
                currentTimerValue--;    
            }
            
            showCurrentValue();
            
            if (currentTimerValue === 0) {
                clearInterval(interval);
            }
        }, 1000);
        
    }    
    // setup event handlers
    document.getElementById("startButton").addEventListener("click", function () {
        timerInput = document.getElementById("timerValue").value;
        timerInput = parseInt(timerInput, 10);
        
        if (isNaN(timerInput) || timerInput < 0) {
            timerInput = 0;
            return;
        }
        
        currentTimerValue = timerInput;
        startTimer();
    
    });
    
    document.getElementById("pauseResumeButton").addEventListener("click", function () {
       if (!isPaused) {
           // pause it
           clearInterval(interval);
           isPaused = true;
           document.getElementById("pauseResumeButton").innerHTML = "Resume";
       } else {
           isPaused = false;
           document.getElementById("pauseResumeButton").innerHTML = "Pause";
           startInterval();
       }
    });
    
    document.getElementById("resetButton").addEventListener("click", function () {
        currentTimerValue = timerInput;
        clearInterval(interval);
        startTimer();
    });
    
    timerModule = {
        init: _init,
        add: _add
    };

})(window);