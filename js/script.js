var numberOnes = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
  };
  
  var numberUniqueTens = {  
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen"
  };

  var numberTens = {
    "20": "twenty",
    "30": "thirty",
    "40": "forty",
    "50": "fifty",
    "60": "sixty",
    "70": "seventy",
    "80": "eighty",
    "90": "ninety"
  };

var numberToWord = function(number) {
  var cutNumber = number.toString().split("");
  var result = "";

  
//length one numbers
 if(cutNumber.length === 1){
  return numberOnes[number];
//length two numbers
} else if (cutNumber.length === 2) {
    return last2Digits(cutNumber[0],cutNumber[1]);
 } else {
   return ("This number not supported.")
 }
};

var last2Digits = function(x,y) {
  if (x === "1") {
   return numberUniqueTens[x + y];
 } else if (y === "0"){
     var tens = numberTens[x + "0"];
     return tens;  
 } else if (y !== "0"){
   var ones = numberOnes[y];
   var tens = numberTens[x + "0"];
   return tens + "-" + ones;  
 } else {
   return "Something is terribly wrong!";
 }
};
 
