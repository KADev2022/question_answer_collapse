let btns = document.querySelectorAll(".wrap-toggle");
let wraps = document.querySelectorAll(".wrap");

// Loop to toggle all the wraps by clicking the button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        wraps[i].classList.toggle('active');
    });
}