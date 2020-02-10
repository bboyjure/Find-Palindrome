var button = document.querySelector(".btn");
var p = document.querySelector(".izpis")
var input = document.querySelector("input");

button.addEventListener("click", () => {
    var inputValue = input.value;
    console.log(inputValue);
    p.textContent = isPalindrome(inputValue)


    function isPalindrome(string) {

        for (var i = 0; i < inputValue.length; i++) {
            var naprej = inputValue[i]
            console.log(naprej)
        }
        for (var i = inputValue.length; i >= 0; i--) {
            var nazaj = inputValue[i]
            console.log(nazaj)
        }
        if(naprej === nazaj){
            return "Beseda JE palindrome = " + string;
        }
        else{
            var txt = "Beseda ni palindrome";
            return txt;
        }

    }

})
