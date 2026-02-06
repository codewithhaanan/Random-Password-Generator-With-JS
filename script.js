let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let upperrcase = document.getElementById("upperrcase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let copyIcon = document.getElementById("copyIcon");

let genBtn = document.getElementById("genBtn");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", ()=>{
    sliderValue.textContent = inputSlider.value;
})
genBtn.addEventListener("click", ()=>{
    passBox.value = generatePassword();
})



let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let allNumbers = "0123456789"
let allSymbols = "~!@#$%^&*"


//function
function generatePassword(){
    let genPassword = ""
    let allChars = "";
    allChars += lowercase.checked ? lowerChars : "";
    allChars+= upperrcase.checked ? upperChars : "";
    allChars+= numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";
    if (allChars == "" || allChars ==0) {
        return  genPassword;
    }
    let i = 1;
    while (i<=inputSlider.value) {
        genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length)) 
    i++;
    }
    return genPassword;
    
}
copyIcon.addEventListener("click", ()=>{
    if (passBox.value != "" || passBox.value.length >=1) {
            navigator.clipboard.writeText(passBox.value);
            copyIcon.innerText = "check"
            copyIcon.title = "Password Copied"
            setTimeout(()=>{
                copyIcon.innerHTML = "copy_all"
                copyIcon.title = "";
            },3000)
    }

    
})