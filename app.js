
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

let partnerCount = 0;
let partner = document.querySelector(".partnerContainer");
let nextBtn = document.getElementById("nxtBtn");
let prevBtn = document.getElementById("preBtn");



nextBtn.addEventListener("click", function () {
    console.log("next")
    movePartner(1);
});

prevBtn.addEventListener("click", function () {
    console.log("prev")
    movePartner(-1);
});

function movePartner(direction) {
    partnerCount += direction;

    // Check for the minimum and maximum values to enable looping
    if (partnerCount > 9) {
        partnerCount = 0; // Loop back to the first card
    } else if (partnerCount < 0) {
        partnerCount = 9; // Loop to the last card when going back from the first
    }

    let val = partnerCount * 250;
    partner.style.transform = `translateX(-${val}px)`;

    // Disable or enable buttons based on the current count
    // next.disabled = count === 5;
    // prev.disabled = count === 0;
}
function handleSubmit(){
    
//    e.preventDefault();
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let number = document.getElementById("number").value
    let msg = document.getElementById("msg").value

    console.log(name,email,number,msg)
    alert("We got your details. We will connect with you soon");
     document.getElementById("name").value = ""
     document.getElementById("email").value =""
     document.getElementById("number").value =""
     document.getElementById("msg").value =""
    
    

}



