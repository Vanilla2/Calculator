const main = document.querySelectorAll('.calc')[0];
const result = document.querySelector('.result');
num = [0, 0];
let indx = 0;
let sign = "";
console.log(toString("aaaa"));

main.addEventListener('click', function(event) {
    const pressed = event.target.innerText;
    console.log(`${num[0]} -- ${num[1]} -- ${pressed} -- ${sign}`);
    if (pressed === "C"){
            result.innerText = "0";
            num[0] = 0;
            num[1] = 0;
            indx = 0;
    }
    else if (pressed === "←"){
        if (result.innerText.length != 1){
            result.innerText = result.innerText.substring(1);
            num[indx] = parseInt(result.innerText);
        }
        else{
            num[indx] = 0;
            result.innerText = "0";
        }
    }
    else if (pressed.length == 1 && result.innerText.length < 14 && pressed.codePointAt(0) > 47 && pressed.codePointAt(0) < 60){
        num[indx] = num[indx] * 10 + parseInt(pressed);
        if (result.innerText === "0"){
            result.innerText = pressed;
        }
        else{
            result.innerText +=pressed;
        }
    }
    else if (pressed == "/" || pressed == "x" || pressed == "-" || pressed == "+" || pressed == "="){
        if (indx == 0){
            indx = 1;
            sign = pressed;
            result.innerText = "";
        }
        else{
            indx = 0;
            if (sign == "/")
                num[0] = num[0] / num[1];
            if (sign == "x")
                num[0] = num[0] * num[1];
            if (sign == "-")
                num[0] = num[0] - num[1];
            if (sign == "+")
                num[0] = num[0] + num[1];
            num[1] = 0;
            result.innerText = num[0].toString(10);
        }
    }
  });