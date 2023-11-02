
// $(document).ready(function() {
//     function animateProgressBar(progressBar, targetWidth) {
//       var width = 0;
//       var interval = 7; 

//       var animation = setInterval(function() {
//         if (width >= targetWidth) {
//           clearInterval(animation);
//         } else {
//           width++;
//           progressBar.width(width + "%");
//           progressBar.text(width + "%");
//         }
//       }, interval);
//     }

//     animateProgressBar($("#progress-bar1"), 80);
//     animateProgressBar($("#progress-bar2"), 60);
//     animateProgressBar($("#progress-bar3"), 70);
//     animateProgressBar($("#progress-bar4"), 50);
//     animateProgressBar($("#progress-bar5"), 80);
//     animateProgressBar($("#progress-bar6"), 85);
//     animateProgressBar($("#progress-bar7"), 76);

// //sections smooth navigation
//     function scrollToMenuItem(target) {
//         $('html, body').animate({
//           scrollTop: $(target).offset().top
//         }, 300);
//       }
//       $('#menu-item1').click(function(e) {
//         e.preventDefault();
//         scrollToMenuItem('#About'); 
//       });
    
//       $('#menu-item2').click(function(e) {
//         e.preventDefault();
//         scrollToMenuItem('#Skills'); 
//       });
//       $('#menu-item3').click(function(e) {
//         e.preventDefault();
//         scrollToMenuItem('#Contact'); 
//       });
    
//   });

  $(document).ready(function() {
    function animateProgressBar(progressBar, targetWidth) {
      var width = 0;
      var interval = 7; 
  
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
  
    // Function to check if #Skills section is in view
    function isSkillsSectionInView() {
      var skillsSection = $("#Skills");
      var windowHeight = $(window).height();
      var rect = skillsSection[0].getBoundingClientRect();
      return (
        rect.top >= 0 && rect.top <= windowHeight
      );
    }
  
    // Function to activate progress bars when the Skills section is in view
    function activateProgressBars() {
      if (isSkillsSectionInView()) {
        animateProgressBar($("#progress-bar1"), 80);
        animateProgressBar($("#progress-bar2"), 60);
        animateProgressBar($("#progress-bar3"), 70);
        animateProgressBar($("#progress-bar4"), 50);
        animateProgressBar($("#progress-bar5"), 80);
        animateProgressBar($("#progress-bar6"), 85);
        animateProgressBar($("#progress-bar7"), 76);
      }
    }
  
    // Activate progress bars on page load
    activateProgressBars();
  
    // Use scroll event listener to check when #Skills section is in view during scrolling
    $(window).scroll(function() {
      activateProgressBars();
    });

    //sections smooth navigation
    function scrollToMenuItem(target) {
        $('html, body').animate({
          scrollTop: $(target).offset().top
        }, 300);
      }
      $('#menu-item1').click(function(e) {
        e.preventDefault();
        scrollToMenuItem('#About'); 
      });
    
      $('#menu-item2').click(function(e) {
        e.preventDefault();
        scrollToMenuItem('#Skills'); 
      });
      $('#menu-item3').click(function(e) {
        e.preventDefault();
        scrollToMenuItem('#Contact'); 
      });
  });
  




