window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("head1").style.fontSize = "17px";
    document.getElementById("head1").style.backgroundColor = "white";
  } else {
    document.getElementById("head1").style.fontSize = "16px";
  }
}
let addCarts = 1;
document.getElementById("message").style.display = "none";
function increaseData() {
  //   addCarts += 0;

  document.getElementById("num").innerHTML = addCarts++;
  document.getElementById("message").style.display = "block";
  setTimeout(function () {
    document.getElementById("message").style.display = "none";
  }, 350);
}
function displayWarning() {
  if (addCarts == 1) {
    alert("Please add something to cart");
  } else {
  }
}
document.getElementById("listdown").style.display = "none";
function displayPop() {
  document.getElementById("listdown").style.display = "block";
}
let modal = document.getElementById("listdown");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
document.getElementById("mainheader").style.display = "none";
