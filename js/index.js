
document.addEventListener('DOMContentLoaded', function () {

    function setupOptionAudio(optionSelector, audioFile, buttonSelector) {
        const option = document.querySelector(optionSelector);
        const button = document.querySelector(buttonSelector);

        if(!option || !button) return;

        const audio = new Audio(audioFile)

        option.addEventListener("click", () => {

            if (audio.paused) {
                audio.play();
                button.style.display = "block";
            } else {
                audio.currentTime = 0;
                audio.pause();
                button.style.display = "none";
            }
        });
    }

    // apply functionality to options
    setupOptionAudio(".optionOne", "assets/audio/Track03.mp3", ".buttonOne");
    setupOptionAudio(".optionTwo", "assets/audio/Track04.mp3", ".buttonTwo");
    setupOptionAudio(".optionThree", "assets/audio/Track05.mp3", ".buttonThree");



      /* ==================
      BUtotn navigation logic for user to open a new page
      ====================*/
    document.getElementById("goToReview").addEventListener("click", function () {
        window.location.href = "pages/review.html";
      });

    document.getElementById("goToQuiz").addEventListener("click", function () {
    window.location.href = "pages/review.html";
    });

    document.getElementById("goToPractice").addEventListener("click", function () {
    window.location.href = "pages/review.html";
    });
});