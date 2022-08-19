
let textarea = document.querySelector("form textarea")
let keys = document.querySelectorAll("input[type=button]:not(.space)")
let spaceBtn = document.querySelector(".space")

keys.forEach((key) => {
    key.addEventListener("click", (() => {
        textarea.value += key.value;
    }))
})

spaceBtn.onclick = (() => textarea.value += " ")

textarea.ondblclick = (() => textarea.value = "")