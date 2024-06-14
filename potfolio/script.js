const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});

function circleFlatness() {
  // define default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}








function firstPageAnim() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.2,
    })
    .from("#herofooter", {
      y: -10,
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}

function circleMouseFollower() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
  })
}

circleFlatness();
circleMouseFollower();
firstPageAnim();


function liveClock() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  // Pad single digit minutes and seconds with a leading zero
  m = (m < 10 ? "0" : "") + m;
  s = (s < 10 ? "0" : "") + s;
  // Convert 24-hour time to 12-hour time format
  var amPm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h ? h : 12; // the hour '0' should be '12'
  var timeString = h + ":" + m + ":" + s + " " + amPm;
  var timeElement = document.querySelector("#time");
  timeElement.textContent = timeString;
}

setInterval(liveClock, 1000);



document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});




const image = document.querySelector('#about img');
  const link = document.querySelector('#about a');

  // Hover effect for the image
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
    image.style.transition = 'transform 0.3s ease';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
    image.style.transition = 'transform 0.3s ease';
  });

  // Hover effect for the link
  link.addEventListener('mouseover', () => {
    link.style.color = 'black';
  link.style.backgroundColor = 'white'; 
  link.style.transition = 'color 0.3s ease, background-color 0.3s ease'; 
  });

  link.addEventListener('mouseout', () => {
    link.style.color = ''; 
  link.style.backgroundColor = ''; 
  link.style.transition = 'color 0.3s ease, background-color 0.3s ease';
  });