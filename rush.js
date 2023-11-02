
$(document).ready(function() {
    function animateProgressBar(progressBar, targetWidth) {
      var width = 0;
      var interval = 50; // The time interval between each step (in milliseconds)

      var animation = setInterval(function() {
        if (width >= targetWidth) {
          clearInterval(animation);
        } else {
          width++;
          progressBar.width(width + "%");
          progressBar.text(width + "%");
        }
      }, interval);
    }

    // Animate the first progress bar to 75%
    animateProgressBar($("#progress-bar1"), 75);

    // Animate the second progress bar to 50%
    animateProgressBar($("#progress-bar2"), 50);
  });






