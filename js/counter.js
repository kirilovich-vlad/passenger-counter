let num = 0;
function plus() {
    num +=1;
    document.getElementById("counter").innerText = num;
    document.getElementById("counter2").innerText = num;
};
function minus() {
    if (num == 0) {
        alert("Bro, really? Negative amount of passengers? I want to leave this planet!");
    }
    else{
        num -=1;
        document.getElementById("counter").innerText = num;
        document.getElementById("counter2").innerText = num;
    };
};
function wipe() {
    num = 0;
    document.getElementById("counter").innerText = num;
    document.getElementById("counter2").innerText = num;
};