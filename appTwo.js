var button = document.querySelector(".btn");
var p = document.querySelector(".izpis")
var input = document.querySelector("input");

button.addEventListener("click", () => {
    var inputValue = input.value;
    console.log(inputValue);
    p.textContent = longestPalindrome(inputValue)


    function longestPalindrome(string) {

        var length = string.length;
        var result = "";

        var centeredPalindrome = function (left, right) {
            while (left >= 0 && right < length && string[left] === string[right]) {
                //Razširi smeri
                left--;
                
                right++;
                
            }
            var stringResult = string.slice(left + 1, right);
            console.log(stringResult)
            return stringResult
        };

        for (var i = 0; i < length - 1; i++) {
            var oddPal = centeredPalindrome(i, i + 1);

            var evenPal = centeredPalindrome(i, i);

            if (oddPal.length > 1)
                console.log("oddPal: " + oddPal);
            if (evenPal.length > 1)
                console.log("evenPal: " + evenPal);

            if (oddPal.length > result.length)
                result = oddPal;
            if (evenPal.length > result.length)
                result = evenPal;
        }
        return "Palindrome je: " + result;
    };
})