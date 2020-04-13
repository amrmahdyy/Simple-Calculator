const input = document.querySelector(".input");
const btn1 = document.querySelectorAll("#number");
const remove = document.querySelector(".remove");
const equal = document.querySelector(".equal");
const clear = document.querySelector("#clear");
let number = [];
let equalResult = [];
for (let button of btn1) {
    button.addEventListener("click", (e) => {
        input.value += button.value;
        number.push(button.value);
    })
}
clear.addEventListener("click", (e) => {
    input.value = "";
    number = [];
    equalResult = [];
})
remove.addEventListener('click', (e) => {
    input.value = input.value.slice(0, -1);
})
remove.addEventListener('click', (e) => { // this event used to store the result after the operation in an array, then convert to string to
    //slice from it if you click remove button
    number.splice(number.length - 1);
    arrToString = equalResult.toString(equalResult);
    arrToString = arrToString.slice(0, -1);
    equalResult = arrToString;
})
equal.addEventListener("click", (e) => {
    number.unshift(equalResult); // this adds the equalResult to the first index of number array 
    stringNumbers = number.toString(); // convert number array to a string then replace the commas with empty string then evaluate it
    stringNumbersNoCommas = stringNumbers.replace(/,/g, "");
    if (stringNumbersNoCommas != "") {
        equalResult = [];
        number = [];
        input.value = "";
        input.value += (eval(stringNumbersNoCommas));
        equalResult.push(input.value); // I intialize an array called equalResult where I store the result from the operator and push it to the array, this array will be used and converted to a string and be sliced using remove button 
    }


})