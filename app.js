
// let count = 0; // Assuming count starts from 0
// const slider = document.querySelector(".slider");
// const next = document.getElementById("nxt");
// const prev = document.getElementById("pre");

// next.addEventListener("click", function () {
//     moveSlider(1);
// });

// prev.addEventListener("click", function () {
//     moveSlider(-1);
// });

// function moveSlider(direction) {
//     count += direction;
//     let val = count * 420;

//     // Check for the minimum and maximum values to prevent moving beyond the limits
//     if (count >= 0 && count <= 5) {
//         slider.style.transform = `translateX(-${val}px)`;
//     }

//     // Update opacity based on the current count
//     next.disabled = count === 5;
//     prev.disabled = count === 0;
// }

let count = 0; // Assuming count starts from 0
const slider = document.querySelector(".slider");
const next = document.getElementById("nxt");
const prev = document.getElementById("pre");

next.addEventListener("click", function () {
    moveSlider(1);
});

prev.addEventListener("click", function () {
    moveSlider(-1);
});

function moveSlider(direction) {
    count += direction;

    // Check for the minimum and maximum values to enable looping
    if (count > 5) {
        count = 0; // Loop back to the first card
    } else if (count < 0) {
        count = 5; // Loop to the last card when going back from the first
    }

    let val = count * 420;
    slider.style.transform = `translateX(-${val}px)`;

    // Disable or enable buttons based on the current count
    // next.disabled = count === 5;
    // prev.disabled = count === 0;
}
