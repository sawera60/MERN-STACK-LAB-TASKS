// User Input and Basic Info
let name1 = prompt("Enter your name");
let age = parseInt(prompt("Enter your age")); // parse to number
let city = prompt("Enter your city");
alert(`Hello ${name1}, you are ${age} years old and live in ${city}.`);

// Age Analysis
let group = "";
if (age < 13) {
    group = "Child";
} else if (age >= 13 && age <= 19) {
    group = "Teenager";
} else if (age >= 20 && age <= 59) {
    group = "Adult";
} else {
    group = "Senior";
}
alert(`You are categorized as a ${group}.`);

// Favorite Color Switch Case
let color = prompt("Enter your favorite color").toLowerCase(); // Make case-insensitive

switch (color) {
    case "red":
        alert("Bold choice!");
        break;
    case "blue":
        alert("Cool and calm.");
        break;
    case "green":
        alert("Nature lover!");
        break;
    default:
        alert("Unique taste!");
}

// Favorite Numbers Loop
let favNumber = parseInt(prompt("Enter your favorite number"));

for (let i = 1; i <= favNumber; i++) {
    if (i === 5) continue; // Skip 5
    if (i === 10) break;   // Stop at 10
    console.log(i);
}

// Function to calculate age in months
function calculateAgeInMonths(age) {
    return age * 12;
}

let ageInMonths = calculateAgeInMonths(age);
alert(`You are ${ageInMonths} months old.`);

// Function to suggest hobbies
function suggestHobby(age) {
    if (age < 13) {
        return "Try drawing, biking, or watching cartoons!";
    } else if (age >= 13 && age <= 19) {
        return "You might enjoy music, video games, or sports!";
    } else if (age >= 20 && age <= 59) {
        return "How about cooking, traveling, or reading?";
    } else {
        return "Consider gardening, walking, or knitting!";
    }
}

let hobby = suggestHobby(age);
alert(hobby);


