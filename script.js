





////odd even number checker

function checkEvenOdd() {
    let num = document.getElementById("evenodd").value;
    let number = Number(num);

    if (isNaN(number)) {
        document.getElementById("evenoddresult").innerHTML = "Please enter a valid number";
    } else if (number % 2 === 0) {
        document.getElementById("evenoddresult").innerHTML = "The number is even";
    } else {
        document.getElementById("evenoddresult").innerHTML = "The number is odd";
    }
}






//age checker 




function checkAge() {
    let num = document.getElementById("agechecker").value;
    let number = Number(num);
    if (isNaN(number) || number < 0) {
        document.getElementById("ageresult").innerHTML = "Please enter a valid age";
    } else if (number >= 18) {
        document.getElementById("ageresult").innerHTML = "You are eligible to vote";
    } else {
        document.getElementById("ageresult").innerHTML = "You are not eligible to vote";
    }
}




function checkGreatest() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let number1 = Number(num1);
    let number2 = Number(num2);
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("greatestresult").innerHTML = "Please enter valid numbers";
    } else if (number1 > number2) {
        document.getElementById("greatestresult").innerHTML = "The greatest number is: " + number1;
    } else if (number2 > number1) {
        document.getElementById("greatestresult").innerHTML = "The greatest number is: " + number2;
    } else {
        document.getElementById("greatestresult").innerHTML = "Both numbers are equal";
    }
}


//greatest three number checker


function checkGreatestOfThree() {
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;
    let num3 = document.getElementById("number3").value;
    let number1 = Number(num1);
    let number2 = Number(num2);
    let number3 = Number(num3);
    if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
        document.getElementById("greatestthreeresult").innerHTML = "Please enter valid numbers";
    } else if (number1 >= number2 && number1 >= number3) {
        document.getElementById("greatestthreeresult").innerHTML = "The greatest number is: " + number1;
    } else if (number2 >= number1 && number2 >= number3) {
        document.getElementById("greatestthreeresult").innerHTML = "The greatest number is: " + number2;
    } else {
        document.getElementById("greatestthreeresult").innerHTML = "The greatest number is: " + number3;
    }
};


//grede calculator

function calculateGrade() {
    let marksInput = document.getElementById("marks").value;
    let marks = Number(marksInput);
    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById("graderesult").innerHTML = "Please enter valid marks between 0 and 100";
    } else if (marks >= 90) {
        document.getElementById("graderesult").innerHTML = "Grade: A";
    } else if (marks >= 80) {
        document.getElementById("graderesult").innerHTML = "Grade: B";
    } else if (marks >= 70) {
        document.getElementById("graderesult").innerHTML = "Grade: C";
    } else if (marks >= 60) {
        document.getElementById("graderesult").innerHTML = "Grade: D";
    } else if (marks >= 50) {
        document.getElementById("graderesult").innerHTML = "Grade: E";
    } else {
        document.getElementById("graderesult").innerHTML = "Grade: F";
    }
};



//seven vowel or consonant
function sevenvowel() {
    let seven = document.getElementById("vowelconsonant").value.toLowerCase();

    if (seven.length !== 1 || !isNaN(seven)) {
        document.getElementById("result").innerHTML = "sirf ek alphabet likhein";
    } else if (
        seven === 'a' || seven === 'e' ||
        seven === 'i' ||seven === 'o' ||
        seven === 'u'
    ) {
        document.getElementById("result").innerHTML = "ye vowel hai";
    } else {
        document.getElementById("result").innerHTML = "ye consonant hai";
    }
}


function pwd() {
    let pass = document.getElementById("password").value;

    if (pass.length >= 8) {
        document.getElementById("password-result").innerHTML = "password strong hai";
    } else {
        document.getElementById("password-result").innerHTML = "password weak hai";
    }
}




//divisible number checker
function divisiblecheck() {
    let disible = document.getElementById("divisiblenumber").value;
    let number = Number(disible);

    if (isNaN(number)) {
        document.getElementById("divisible-result").innerHTML = "Please enter a valid number";
    } else if (number % 5 === 0 && number % 3 === 0) {
        document.querySelector("divisible-result").innerHTML = "number 5 or 3 se divisible hai";
    } else if (number % 3 === 0) {
        document.getElementById("divisible-result").innerHTML = "3 se divisible hai";
    } else if (number % 5 === 0) {
        document.getElementById("divisible-result").innerHTML = "5 se divisible hai";
    } else {
        document.getElementById("divisible-result").innerHTML = "number na 5 se na 3 se divisivle hai";
    }
};
