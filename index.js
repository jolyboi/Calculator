// FUNCTIONALITY
let calculated = false;
document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#display');
    display.value = '0'; 
});


function append_to_display(input) {
    if (display.value === '0' || display.value === 'Error' || calculated) {
        display.value = input;
        calculated = false;
    }
    else {
        const operators = new Set(['+', '-', '/', '*']);
        if (!(operators.has(display.value[display.value.length - 1]) && operators.has(input))) {
            if (display.value[display.value.length - 1] != '.' || input != '.') {
                display.value += input;
            }
        }
        
        
        else {
            display.value = display.value.substring(0, display.value.length-1) + input;
        }
    }
    
}

function clear_display() {
    display.value = '0';
}

function calculate() {
    try {
        display.value = eval(display.value);
        calculated = true;
    }
    catch {
        display.value = 'Error';
    }
    
}