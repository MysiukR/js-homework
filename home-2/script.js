
window.onload = function () {
    PrintCurrentTime();
    getCurrentDate();
    getTriangleArea();
    animateString('fifthTask');
    findFirstSunday();
    calcLeftChristmas('ninthTask');
    cToF(60);
    fToC(45);
    getCurrentURL();
    getUserDefinedName();
    getExtensionFilename();
    differenceNumber(23);
    sumTripleNumbers(30, 30);
    getAbsoluteDifference(12);
    checkEquals50(50, 50);
    checkEquals50(50, 20);
    checkEquals50(20, 20);
    checkHundred(10);
    checkHundred(90);
    checkHundred(99);
    checkPositive(2, 2);
    checkPositive(-2, 2);
    checkPositive(-2, -2);
    addFrontString("thon");
    addFrontString("Python");
    deleteCharacter("Roman", 0);
    replaceFirstLast("abcd");
    addFirstLast("abcd");
    checkNumber3_7(12);
    checkNumber3_7(10);
    addFrontBack3("abcd");
    checkStartJava("JavaScript");
    checkStartJava("Roman");
    checkNumberRange(12, 102);
    checkNumberRange(26, 26);
    checkThreeNumsRange(10, 10, 100);
    checkThreeNumsRange(50, 50, 50);
    checkWordScript("JavaScript");
    maxOfThree(0, -20, -30);
    numberNear100(90, 89);
    numbersTwoRanges(44, 56);
    maxTownumsRange(45, 60);
    checkRepeatedLetters("Console", "o");
    findLastDigit(-20, 30, 40);
    lowerCaseFirstThree("LOWERCASE");
    examStatus("99", "true");
    sortaSum(12, 13);
    sortaSum(20, 30);
    checkEight(7, 8);
    checkEight(17, 18);
    checkThreeNumbers20_30_40(8, 8, 8);
    checkThreeNumbers20_30_40(8, 7, 18);
    checkThreeNumbers20_30_40(8, 8, 18);
    numberOrder(10, 15, 31);
    numberOrder(24, 22, 31);
    numberOrder(50, 21, 15);
    checkLastDigit(22, 32, 42);
    checkLastDigit(103, 203, 303);
    checkLastDigit(20, 22, 45);
    checkLessBy20(23, 45, 10);
    checkLessBy20(23, 23, 10);
    checkSumOrDifference15(25, 10);
    checkSumOrDifference15(5, 9);
    checkMultiple7Or11(17);
    checkMultiple7Or11(22);
    checkRange40To10000(80, 320);
    checkRange40To10000(89, 4000);
    stringReverse("Roman");
    LetterChanges("PYTHON");
    capitalLetter("Write a JavaScript program to capitalize the first letter of each word of a given string.");
    convertTime(72);
    sortLetterInWord("roman");
    checkAB("abba");
    checkAB("Pane borrowed");
    vowelCount("Roman");
    checkEqualPS("abctpss");
    checkEqualPS("abps");
    formattedString(80, 6);
    copyString("abc", 5);
    copyString("abc", -5);
    repeatLastLetters("Roman");
    getFirstEvenHalf("JavaScript");
    deleteFirstEnd("Roman");
    concatenateTwoString("Roman", "Mysiuk");
    moveRightThree("JavaScript");
    getMiddleThreeLetter("Tasks");
    concatAndCut("JavaScript", "HTML");
    findEndScript("JavaScript");
    findEndScript("Java");
}

function PrintCurrentTime() {
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
    document.getElementById("firstTask").innerHTML = "Today is : " + daylist[day] + ".<br>";
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12) ? " PM " : " AM ";
    hour = (hour >= 12) ? hour - 12 : hour;
    if (hour === 0 && prepand === ' PM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Noon';
        }
        else {
            hour = 12;
            prepand = ' PM';
        }
    }
    if (hour === 0 && prepand === ' AM ') {
        if (minute === 0 && second === 0) {
            hour = 12;
            prepand = ' Midnight';
        }
        else {
            hour = 12;
            prepand = ' AM';
        }
    }
    document.getElementById("firstTask").innerHTML += "Current Time : " + hour + prepand + " : " + minute + " : " + second;
}

function printCurrentPage() {
    window.print();
}

function getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10)
        dd = '0' + dd;
    if (mm < 10)
        mm = '0' + mm;
    today = mm + '-' + dd + '-' + yyyy;
    document.getElementById("thirdTask").innerHTML = today + "<br>";
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("thirdTask").innerHTML += today + "<br>";
    today = dd + '-' + mm + '-' + yyyy;
    document.getElementById("thirdTask").innerHTML += today + "<br>";
    today = dd + '/' + mm + '/' + yyyy;
    document.getElementById("thirdTask").innerHTML += today + "<br>";
}

function getTriangleArea() {
    var side1 = 5;
    var side2 = 6;
    var side3 = 7;
    var perimeter = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
    document.getElementById("fourthTask").innerHTML = area;
}

function animateString(id) {
    var element = document.getElementById(id);
    var textNode = element.childNodes[0];
    var text = textNode.data;
    setInterval(function () {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}
function checkGregorianYear(id) {
    year = document.getElementById("inputYear").value;
    x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    document.getElementById(id).innerHTML = x;
}

function findFirstSunday() {
    for (var year = 2014; year <= 2050; year++) {
        var d = new Date(year, 0, 1);
        if (d.getDay() === 0)
            document.getElementById("seventhTask").innerHTML += "1st January is being a Sunday  " + year + "<br>";
    }
}

function displayRangeNumber(id) {
    var num = Math.ceil(Math.random() * 10);
    var gnum = document.getElementById("inputRangeNumber").value;
    if (gnum == num)
        document.getElementById(id).innerHTML = 'Matched';
    else
        document.getElementById(id).innerHTML = 'Not matched, the number was ' + num;
}

function calcLeftChristmas(id) {
    today = new Date();
    var cmas = new Date(today.getFullYear(), 11, 25);
    if (today.getMonth() == 11 && today.getDate() > 25) {
        cmas.setFullYear(cmas.getFullYear() + 1);
    }
    var one_day = 1000 * 60 * 60 * 24;
    document.getElementById(id).innerHTML = Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) +
        " days left until Christmas!";
}

function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

function cToF(celsius) {
    const cTemp = celsius;
    const cToFahr = cTemp * 9 / 5 + 32;
    const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
    document.getElementById("eleventhTask").innerHTML = message + "<br>";
}

function fToC(fahrenheit) {
    const fTemp = fahrenheit;
    const fToCel = (fTemp - 32) * 5 / 9;
    const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
    document.getElementById("eleventhTask").innerHTML += message;
}

function getCurrentURL() {
    document.getElementById("twelfthTask").innerHTML = document.URL;
}

function getUserDefinedName() {
    var var_name = "ab";
    var n = 1;
    this[var_name] = n;
    document.getElementById("thirteenth").innerHTML = this[var_name];
}

function getExtensionFilename() {
    filename = "system.dat"
    document.getElementById("fourteenth").innerHTML = filename.split('.').pop() + "<br>";
    filename = "index.html"
    document.getElementById("fourteenth").innerHTML += filename.split('.').pop();
}

function differenceNumber(number) {
    var result;
    if (number <= 13)
        result = 13 - number;
    else
        result = (number - 13) * 2;
    document.getElementById("fifteenth").innerHTML = result;
}

function sumTripleNumbers(x, y) {
    var result;
    if (x == y)
        result = 3 * (x + y);
    else
        result = x + y;
    document.getElementById("sixteenth").innerHTML = result;
}
function getAbsoluteDifference(number) {
    var result;
    if (number <= 19)
        result = 19 - number;
    else
        result = (number - 19) * 3;
    document.getElementById("seventeenth").innerHTML = result;
}
function checkEquals50(x, y) {
    var result;
    ((x == 50 || y == 50) || (x + y == 50)) ? result = true : result = false;
    document.getElementById("eighteenth").innerHTML += result + "<br>";
}
function checkHundred(x) {
    var result;
    ((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20)) ? result = true : result = false;
    document.getElementById("nineteenth").innerHTML += result + "<br>";
}
function checkPositive(x, y) {
    var result;
    ((x < 0 && y > 0) || x > 0 && y < 0) ? result = true : result = false;
    document.getElementById("twentiethTask").innerHTML += result + "<br>";
}
function addFrontString(str1) {
    (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') ? str1 : str1 = "Py" + str1;
    document.getElementById("twentiethFirstTask").innerHTML += str1 + "<br>";
}
function deleteCharacter(str, char_pos) {
    part1 = str.substring(0, char_pos);
    part2 = str.substring(char_pos + 1, str.length);
    document.getElementById("twentiethSecondTask").innerHTML += (part1 + part2);
}
function replaceFirstLast(str1) {
    if (str1.length <= 1) {
        document.getElementById("twentiethThirdTask").innerHTML = str1;
    }
    mid_char = str1.substring(1, str1.length - 1);
    document.getElementById("twentiethThirdTask").innerHTML = (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
function addFirstLast(str) {
    first = str.substring(0, 1);
    document.getElementById("twentiethFourthTask").innerHTML = first + str + first;
}
function checkNumber3_7(x) {
    var result;
    (x % 3 == 0 || x % 7 == 0) ? result = true : result = false;
    document.getElementById("twentiethFifthTask").innerHTML += result + "<br>";
}
function addFrontBack3(str) {
    var result;
    if (str.length >= 3) {
        back = str.substring(str.length - 3);
        result = back + str + back;
    }
    else
        result = false;
    document.getElementById("twentiethSixthTask").innerHTML += result + "<br>";
}
function checkStartJava(str) {
    if (str.length < 4)
        return false;
    front = str.substring(0, 4);
    var result;
    (front == 'Java') ? result = true : result = false;
    document.getElementById("twentiethSeventhTask").innerHTML += result + "<br>";
}
function checkNumberRange(x, y) {
    var result;
    ((x >= 50 && x <= 99) || (y >= 10 && y <= 99)) ? result = true : result = false;
    document.getElementById("twentiethEighthTask").innerHTML += result + "<br>";
}

function checkThreeNumsRange(x, y, z) {
    var result = (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
    document.getElementById("twentiethNinthTask").innerHTML += result + "<br>";
}
function checkWordScript(str) {
    if (str.length < 6)
        return str;
    let result_str = str;
    if (str.substring(10, 4) == 'Script')
        result_str = str.substring(0, 4) + str.substring(10, str.length);
    document.getElementById("thirtiethTask").innerHTML = result_str;
}
function maxOfThree(x, y, z) {
    max_val = 0;
    (x > y) ? max_val = x : max_val = y;
    (z > max_val) ? max_val = z : max_val = 0;
    document.getElementById("thirtiethFirstTask").innerHTML = max_val;
}
function numberNear100(x, y) {
    var result;
    if (x != y) {
        x1 = Math.abs(x - 100);
        y1 = Math.abs(y - 100);
        if (x1 < y1) result = x;
        if (y1 < x1) result = y;
    }
    else
        result = false;
    document.getElementById("thirtiethSecondTask").innerHTML = result;
}
function numbersTwoRanges(x, y) {
    var result = ((x >= 40 && x <= 60 && y >= 40 && y <= 60) || (x >= 70 && x <= 100 && y >= 70 && y <= 100)) ? true : false;
    document.getElementById("thirtiethThirdTask").innerHTML = result;
}
function maxTownumsRange(x, y) {
    var result;
    if (x >= 40 && y <= 60) {
        let max_val = 0;
        (x > y) ? max_val = x : max_val = y;
        result = max_val;
    }
    else
        result = false;
    document.getElementById("thirtiethFourthTask").innerHTML = result;
}
function checkRepeatedLetters(str, char) {
    ctr = 0;
    var result;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == char)
            ctr++;
    }
    result = (ctr >= 2 && ctr <= 4);
    document.getElementById("thirtiethFifthTask").innerHTML = result;
}
function findLastDigit(x, y, z) {
    var result;
    if ((x > 0) && y > 0 && z > 0)
        result = (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10);
    else
        result = false;
    document.getElementById("thirtiethSixthTask").innerHTML = result;
}
function lowerCaseFirstThree(str) {
    var result;
    if (str.length < 3)
        result = str.toUpperCase();
    front_part = (str.substring(0, 3)).toLowerCase();
    back_part = str.substring(3, str.length);
    result = front_part + back_part;
    document.getElementById("thirtiethSeventhTask").innerHTML = result;
}
function examStatus(totmarks, is_exam) {
    var result = (is_exam) ? totmarks >= 90 : totmarks = 0;
    result = (totmarks >= 89 && totmarks <= 100);
    document.getElementById("thirtiethEighthTask").innerHTML = result;
}
function sortaSum(x, y) {
    var result;
    const sum_nums = x + y;
    result = (sum_nums >= 50 && sum_nums <= 80) ? 65 : 80;
    document.getElementById("thirtiethNinthTask").innerHTML += result + "<br>";
}
function checkEight(x, y) {
    var result = (x == 8 || y == 8 || (x + y == 8 || Math.abs(x - y) == 8)) ? true : false;
    document.getElementById("fortyTask").innerHTML += result + "<br>";
}
function checkThreeNumbers20_30_40(x, y, z) {
    var result;
    if (x == y && y == z)
        result = 30; else
        if (x == y || y == z || z == x)
            result = 40; else
            result = 20;
    document.getElementById("fortyFirstTask").innerHTML += result + "<br>";
}
function numberOrder(x, y, z) {
    var result;
    if (y > x && z > y)
        result = "Strict mode";
    else if (z > y)
        result = "Soft mode";
    else
        result = "Undefinded";
    document.getElementById("fortySecondTask").innerHTML += result + "<br>";
}
function checkLastDigit(p, q, r) {
    var result = (p % 10 === q % 10) ||
        (p % 10 === r % 10) ||
        (q % 10 === r % 10) ? true : false;
    document.getElementById("fortyThirdTask").innerHTML += result + "<br>";
}
function checkLessBy20(x, y, z) {
    var result = (x >= 20 && (x < y || x < z)) ||
        (y >= 20 && (y < x || y < z)) ||
        (z >= 20 && (z < y || z < x)) ? true : false;
    document.getElementById("fortyFourthTask").innerHTML += result + "<br>";
}
function checkSumOrDifference15(x, y) {
    var result = (x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15);
    document.getElementById("fortyFifthTask").innerHTML += result + "<br>";
}
function checkMultiple7Or11(x) {
    var result = ((x % 7 === 0 || x % 11 === 0) && (x % 7 !== x % 11));
    document.getElementById("fortySixthTask").innerHTML += result + "<br>";
}
function checkRange40To10000(x, y) {
    let x_div = parseInt(x / 40);
    let x_mod = x % 40;
    let y_div = parseInt(y / 40);
    let y_mod = y % 40;
    var result = (x_div === y_div || x_mod === y_mod ||
        x_div === y_mod || x_mod === y_div);
    document.getElementById("fortySeventhTask").innerHTML += result + "<br>";
}
function stringReverse(str) {
    var result = str.split("").reverse().join("");
    document.getElementById("fortyEighthTask").innerHTML += result + "<br>";
}
//function string_reverse(str) 
function LetterChanges(text) {
    var s = text.split('');
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {// Caesar cipher
            case ' ':
                break;
            case 'z':
                s[i] = 'a';
                break;
            case 'Z':
                s[i] = 'A';
                break;
            default:
                s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
        }
        switch (s[i]) {
            case 'a': case 'e': case 'i': case 'o': case 'u':
                s[i] = s[i].toUpperCase();
        }
    }
    document.getElementById("fortyNinthTask").innerHTML += s.join('');
}
function capitalLetter(str) {
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++)
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    document.getElementById("fiftyTask").innerHTML += str.join(" ");
}
function convertTime(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    document.getElementById("fiftyFirstTask").innerHTML += hours + ":" + minutes;
}
function sortLetterInWord(str) {
    document.getElementById("fiftySecondTask").innerHTML += str.split("").sort().join("");
}
function checkAB(str) {
    document.getElementById("fiftyThirdTask").innerHTML += ((/a...b/).test(str) || (/b...a/).test(str)) + "<br>";
}
function vowelCount(str) {
    document.getElementById("fiftyFourthTask").innerHTML += str.replace(/[^aeiou]/g, "").length + "<br>";
}
function checkEqualPS(str) {
    var str_p = str.replace(/[^p]/g, "");
    var str_s = str.replace(/[^s]/g, "");
    var p_num = str_p.length;
    var s_num = str_s.length;
    document.getElementById("fiftyFifthTask").innerHTML += (p_num === s_num) + "<br>";
}
function formattedString(number1, number2) {
    var numbers = Math.round(number1 / number2).toString();
    var result_array = numbers.split("");
    if (numbers >= 1000) {
        for (var i = numbers.length - 3; i > 0; i -= 3) {
            result_array.splice(i, 0, ",");
        }
    }
    document.getElementById("fiftySixthTask").innerHTML += result_array + "<br>";
}
function copyString(str, n) {
    var result;
    if (n < 0)
        result = false;
    else
        result = str.repeat(n);
    document.getElementById("fiftySeventhTask").innerHTML += result + "<br>";
}
function repeatLastLetters(str) {
    var result;
    if (str.length >= 3) {
        result_str = str.substring(str.length - 3);
        result = result_str + result_str + result_str + result_str;
    }
    else
        result = false;
    document.getElementById("fiftyEighthTask").innerHTML += result + "<br>";
}
function getFirstEvenHalf(str) {
    var result = (str.length % 2 == 0) ? str.slice(0, str.length / 2) : str;
    document.getElementById("fiftyNinthTask").innerHTML += result + "<br>";
}
function deleteFirstEnd(str) {
    document.getElementById("sixtyTask").innerHTML += str.substring(1, str.length - 1) + "<br>";
}
function concatenateTwoString(str1, str2) {
    str1 = str1.substring(1, str1.length);
    str2 = str2.substring(1, str2.length);
    document.getElementById("sixtyFirstTask").innerHTML += (str1 + str2) + "<br>";
}
function moveRightThree(str) {
    var result = (str.length > 1) ? str.slice(-3) + str.slice(0, -3) : str;
    document.getElementById("sixtySecondTask").innerHTML += result + "<br>";
}
function getMiddleThreeLetter(str) {
    var result;
    if (str.length % 2 != 0) {
        mid = (str.length + 1) / 2;
        result = str.slice(mid - 2, mid + 1);
    } else
        result = str;
    document.getElementById("sixtyThirdTask").innerHTML += result + "<br>";
}
function concatAndCut(str1, str2) {
    var m = Math.min(str1.length, str2.length);
    document.getElementById("sixtyFourthTask").innerHTML += str1.substring(str1.length - m) + str2.substring(str2.length - m);
}
function findEndScript(str) {
    var result = (str.substring(str.length - 6, str.length) == 'Script');
    document.getElementById("sixtyFifthTask").innerHTML += result + "<br>";
}