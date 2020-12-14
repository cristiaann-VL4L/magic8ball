// Create random number 
function generate_random(max_number) {

    return Math.round(Math.random()*max_number);
}

// What will  I be interactign with?
let button = document.querySelector("button");
let answer = document.querySelector("#answer");


// Event listener 
button.addEventListener("click", function(){

    //  Options
    // 0 -> Idk, probably
    // 1 -> Yes, don't trip
    // 2 -> Doubt it bro
    // 3 -> Are you still tripping?
    // 4 -> Leave me alone
    // 5 -> Yes! happy?

    // Generate a number
    let randomNumber = generate_random(5);
    
    let answerText = "";

    if (randomNumber == 0){
        answerText = "Idk, probably";
    }
    else if (randomNumber == 1){
        answerText = "Yes, don't trip";
    }
    else if (randomNumber == 2){
        answerText = "Doubt it bro"
    }
    else if (randomNumber == 3){
        answerText = "Are you still tripping?";
    }
    else if (randomNumber == 4){
        answerText = "Leave me alone";
    }
    else {
        answerText = "Yes! happy?";
    }

    answer.innerHTML = answerText;
});