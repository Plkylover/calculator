let sum = ""
let digits = ""
const screen = document.getElementById("display")
const clearBtn = document.getElementById("clear")
const clear = () => {
    screen.innerHTML = " "
    sum = ""
    digits = ""
}
clearBtn.addEventListener("click", clear)
const addline = (arg, type) => {
    let access = false
    if (type == 'opra' && (screen.innerHTML == "" && arg == "-" || screen.innerHTML !== "")) {
        digits = ""
        access = true
    }
    if (type == "num") {
        if ((digits.includes(".") && arg !== ".") || !(digits.includes("."))) {
            digits += arg
            access = true
        }
    }
    if (access) {
        if ((sum[sum.length - 1] == "+" || sum[sum.length - 1] == "-" || sum[sum.length - 1] == "*" || sum[sum.length - 1] == "/") && (arg == "+" || arg == "-" || arg == "×" || arg == "÷")) {
            screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1)
            sum = sum.slice(0, sum.length - 1)
        }
        screen.innerHTML += arg
        if (arg == "×") {
            arg = "*"
        }
        if (arg == "÷") {
            arg = "/"
        }
        sum += arg
    }
}
const calculate = () => {
    try {
        const answer = eval(sum)
        if (answer !== undefined) {
            screen.innerHTML = answer
        }
    }
    catch { }
}
