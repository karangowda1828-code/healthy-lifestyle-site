// list of health tips
var tips = [
    "Drink water first thing in the morning.",
    "Eat one fruit every day.",
    "Walk for 30 minutes daily.",
    "Sleep before 11 PM.",
    "Do not eat too much junk food.",
    "Take a break from your phone.",
    "Wash your hands before eating."
];

// show a random tip
function showTip() {
    var number = Math.floor(Math.random() * tips.length);
    document.getElementById("tip").innerHTML = tips[number];
}

// water counter
var glasses = 0;

function addWater() {
    glasses = glasses + 1;
    document.getElementById("count").innerHTML = glasses;

    if (glasses >= 8) {
        document.getElementById("watermsg").innerHTML = "Great! You completed 8 glasses!";
    } else {
        document.getElementById("watermsg").innerHTML = "Keep drinking!";
    }
}

function resetWater() {
    glasses = 0;
    document.getElementById("count").innerHTML = glasses;
    document.getElementById("watermsg").innerHTML = "";
}

// contact form
function sendForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill name and email");
        return false;
    }

    alert("Thank you " + name + "! We got your message.");
    return false;
}