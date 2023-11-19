let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let umn = document.querySelector(".umn")
let del = document.querySelector(".del")
let res = document.querySelector(".res")

plus.addEventListener("click", function() {
    let num1 = +document.querySelector(".num1").value
    let num2 = +document.querySelector(".num2").value
    res.innerHTML = num1 + num2
})

minus.addEventListener("click", function() {
    let num1 = +document.querySelector(".num1").value
    let num2 = +document.querySelector(".num2").value
    res.innerHTML = num1 - num2
})

umn.addEventListener("click", function() {
    let num1 = +document.querySelector(".num1").value
    let num2 = +document.querySelector(".num2").value
    res.innerHTML = num1 * num2
})

del.addEventListener("click", function() {
    let num1 = +document.querySelector(".num1").value
    let num2 = +document.querySelector(".num2").value
    res.innerHTML = num1 / num2

    if (num2 == 0) {
        res.innerHTML = "Ошибка"
    }
    else{
        res.innerHTML = num1 / num2
    }
})
