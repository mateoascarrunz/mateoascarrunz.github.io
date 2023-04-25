function toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup1");
  popup.classList.toggle("active");
  var stopScroll = document.getElementById("body");
  stopScroll.classList.toggle("scrollout");
  var stopNavbar = document.getElementById("navbar");
  stopNavbar.classList.toggle("notshow");
  // Set the src attribute of the video element
  var video = document.querySelector(".vid1");
  if (popup.classList.contains("active")) {
    video.src = "Video/Fairsource.mp4";
  } else {
    video.removeAttribute("src");
  }
}
function toggle2() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup2");
  popup.classList.toggle("active");
  var stopScroll = document.getElementById("body");
  stopScroll.classList.toggle("scrollout");
  var stopNavbar = document.getElementById("navbar");
  stopNavbar.classList.toggle("notshow");
  var video = document.querySelector(".vid2");
  if (popup.classList.contains("active")) {
    video.src = "Video/ETA.mp4";
  } else {
    video.removeAttribute("src");
  }
}

function toggle3() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup3");
  popup.classList.toggle("active");
  var stopScroll = document.getElementById("body");
  stopScroll.classList.toggle("scrollout");
  var stopNavbar = document.getElementById("navbar");
  stopNavbar.classList.toggle("notshow");
  var video = document.querySelector(".vid3");
  if (popup.classList.contains("active")) {
    video.src = "Video/Thesis.mp4";
  } else {
    video.removeAttribute("src");
  }
}
function toggle4() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup4");
  popup.classList.toggle("active");
  var stopScroll = document.getElementById("body");
  stopScroll.classList.toggle("scrollout");
  var stopNavbar = document.getElementById("navbar");
  stopNavbar.classList.toggle("notshow");
  var video = document.querySelector(".vid4");
  if (popup.classList.contains("active")) {
    video.src = "Video/Gruene lebensmittel.mp4";
  } else {
    video.removeAttribute("src");
  }
}
function toggle5() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var popup = document.getElementById("popup5");
  popup.classList.toggle("active");
  var stopScroll = document.getElementById("body");
  stopScroll.classList.toggle("scrollout");
  var stopNavbar = document.getElementById("navbar");
  stopNavbar.classList.toggle("notshow");
  // load images when popup is opened
  var images = document.querySelectorAll("#popup5 img[data-src]");
  images.forEach(function (img) {
    img.setAttribute("src", img.getAttribute("data-src"));
    img.removeAttribute("data-src");
  });
  var video = document.querySelector(".vid5");
  if (popup.classList.contains("active")) {
    video.src = "Video/wayo_intro.mp4#t=0.001";
  } else {
    video.removeAttribute("src");
  }
  var video = document.querySelector(".vid6");
  if (popup.classList.contains("active")) {
    video.src = "Video/wayo_intro_ad_2.mp4#t=0.001";
  } else {
    video.removeAttribute("src");
  }
}
