let display = document.querySelector("#display");
let button = document.querySelectorAll(".btn");
let firstnumber = "";
let secondnumber = "";
let oprator = "";
button.forEach(function(button){

    button.addEventListener("click", function(){
        if(button.textContent === "+" || button.textContent === "-" || button.textContent === "*" || button.textContent === "/" ){
            firstnumber = display.value;
            oprator = button.textContent;
            display.value = "";
        }
        else if(button.textContent === "="){
            secondnumber = display.value;
            if(oprator === "+"){
                display.value = Number(firstnumber)+Number(secondnumber);
            }
            if(oprator === "-"){
                display.value = Number(firstnumber)-Number(secondnumber);
            }
            if(oprator === "*"){
                display.value = Number(firstnumber)*Number(secondnumber);
            }
            if(oprator === "/"){
                display.value = Number(firstnumber)/Number(secondnumber);
            }
            
        }
        else if(button.textContent === "%"){
            display.value = Number(display.value) / 100;
        }
        else if(button.textContent === "AC"){
            display.value = "";
            firstnumber = "";
            secondnumber = "";
            oprator = "";
        }
        else if(button.textContent === "DEL"){
            display.value = display.value.slice(0,-1);
        }
        else if (button.textContent === "."){
            if(display.value.includes(".")){
                return;
            }
            display.value += ".";
        }
     else if(button.textContent >= "0" && button.textContent <= "9"){
    if(display.value === "0" || display.value === "00"){
        display.value = button.textContent;
    }
    else{
        display.value += button.textContent;
    }
}
    });
});

document.addEventListener("keydown", function(event){
    if(event.key>=0 && event.key<=9){
    if(display.value === "0" || display.value === "00"){
        display.value = event.key;
    }
    else{
        display.value += event.key;
    }
}

    if(event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" ){
        firstnumber = display.value;
        oprator = event.key;
        display.value = "";
    }
    else if(event.key === "=" || event.key === "Enter"){
        secondnumber = display.value;
        if(oprator === "+"){
            display.value = Number(firstnumber)+Number(secondnumber);
        }
        if(oprator === "-"){
            display.value = Number(firstnumber)-Number(secondnumber);
        }
        if(oprator === "*"){
            display.value = Number(firstnumber)*Number(secondnumber);
        }
        if(oprator === "/"){
            display.value = Number(firstnumber)/Number(secondnumber);
        }

    }
    else if(event.key === "%"){
        display.value = Number(display.value) / 100;
    }
    else if(event.key === "Escape"){
        display.value = "";
        firstnumber = "";
        secondnumber = "";
        oprator = "";
    }
    else if(event.key === "Backspace"){
        display.value = display.value.slice(0,-1);
    }
    else if (event.key === "."){
        if(display.value.includes(".")){
            return;
        }
        display.value += ".";
    }
});