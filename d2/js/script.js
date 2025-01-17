// Put your code here
let dayBTN = document.getElementById("dayButton");
let nightBTN = document.getElementById("nightButton");
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let background = document.getElementsByTagName('body')[0];
const day = '#87ceeb'
const night = '#000034'

let currentTime = "day";

nightBTN.addEventListener("click", function (e) {
    if (currentTime == "night") {
        rotateSunUp()
        setTimeout(() => {
            rotateSunDown()
        }, 3000);
    } else {
        rotateSunDown()
    }
});

dayBTN.addEventListener("click", function (e) {
    if (currentTime == "day") {
        rotateSunDown()
        setTimeout(() => {
            rotateSunUp()
        }, 3000);
    } else {
        rotateSunUp()
    }
});

function rotateSunDown() {
  sun.style.animation = "rotateDown";
  sun.style.animationDuration = "3s";

  moon.style.animation = "rotateUp";
  moon.style.animationDuration = "3s";

  setTimeout(() => {
    /** Remove the elements and apply new positioning */
    sun.style.removeProperty("animation");
    sun.style.removeProperty("animation-duration");
    moon.style.removeProperty("animation");
    moon.style.removeProperty("animation-duration");
    sun.style.opacity = 0;
    moon.style.opacity = 1;

    /** Check the current time of day */
    if (currentTime == "day") {
      currentTime = "night";
      background.style.backgroundColor = night;
    } else {
      // Rotate the elements back
      sun.style.animation = "rotateUp";
      sun.style.animationDuration = "3s";

      moon.style.animation = "rotateDown";
      moon.style.animationDuration = "3s";

      /** Remove the elements and apply new positioning */
      sun.style.removeProperty("animation");
      sun.style.removeProperty("animation-duration");
      moon.style.removeProperty("animation");
      moon.style.removeProperty("animation-duration");
      sun.style.opacity = 1;
      moon.style.opacity = 0;
      background.style.backgroundColor = day;
    }
  }, "3000");
}

function rotateSunUp() {
  /** Rotate the elements */
  moon.style.animation = "rotateDown";
  moon.style.animationDuration = "3s";

  sun.style.animation = "rotateUp";
  sun.style.animationDuration = "3s";

  setTimeout(() => {
    /** Remove the elements and apply new positioning */
    moon.style.removeProperty("animation");
    moon.style.removeProperty("animation-duration");
    sun.style.removeProperty("animation");
    sun.style.removeProperty("animation-duration");
    moon.style.opacity = 0;
    sun.style.opacity = 1;

    /** Check the current time of day */
    if (currentTime == "night") {
      currentTime = "day";
      background.style.backgroundColor = day;
    } else {
      // Rotate the elements back
      moon.style.animation = "rotateDown";
      moon.style.animationDuration = "3s";

      sun.style.animation = "rotateUp";
      sun.style.animationDuration = "3s";

      /** Remove the elements and apply new positioning */
      moon.style.removeProperty("animation");
      moon.style.removeProperty("animation-duration");
      sun.style.removeProperty("animation");
      sun.style.removeProperty("animation-duration");
      moon.style.opacity = 1;
      sun.style.opacity = 0;
      background.style.backgroundColor = night;
    }
  }, "3000");
}
