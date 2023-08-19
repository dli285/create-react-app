function greet(name){
    return "Привет, " + name + ". Как у тебя дела сегодня?";
}

function isDigit(str) {
if (!isNaN(Number(str))) {
    if (str.endsWith(".0")) {
    return true;
    } else {
    return true;
    }
} else {
    return false;
}
}

function opposite(number) {
    if (typeof number === 'number') {
        return -number;
    } else {
        return 'Error';
    }
}

function repeatStr (n, s) {
    let result = "";
    for(let i = 0; i < n; i++){
      result += s;
    }
    return result;
}

function twiceAsOld(dadYearsOld, sonYearsOld) {
let yearsAgo = dadYearsOld - 2 * sonYearsOld;
if (yearsAgo < 0) {
    yearsAgo = -yearsAgo;
}
return yearsAgo;
}
function isPalindrome(line) {
    line = String(line);
  
    line = line.replace(/[.,\/#!$%\^&*;:{}=-_`~()\s]/g, "").toLowerCase();
  
    var reverseLine = line.split("").reverse().join("");
  
    if (line === reverseLine) {
      return true;
    } else {
      return false;
    }
}

function sumOfDifferences(arr) {
    if (arr.length <= 1) {
      return 0;
    }
  
  arr.sort((a, b) => b - a);
  
  let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      sum += arr[i] - arr[i + 1];
    }
  
  return sum;
}
function countSheep(num) {
    let str = "";
    for (let i = 1; i <= num; i++) {
        str += i + " овца… ";
    }
    return str;
}

console.log