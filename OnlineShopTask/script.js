var count = 1;
var products = [];

function addNameProduct(productNumber, count) {
    var productName = document.getElementById("idNameProduct" + productNumber).innerHTML;
    var para = document.createElement("div");
    var t = document.createTextNode(productName);
    para.appendChild(t);
    para.setAttribute("id", "NameDiv" + count);
    para.setAttribute("class", "nameNewBlock");
    document.getElementById("idPriceProduct").appendChild(para);
}
function addPriceProduct(productNumber, count) {
    var price = document.getElementById("idPrice" + productNumber).innerHTML;
    var para1 = document.createElement("div");
    price = price.slice(0, price.lastIndexOf("$"));
    var newBlock = document.createTextNode(price);
    para1.appendChild(newBlock);
    para1.setAttribute("id", "PriceDiv" + count);
    para1.setAttribute("class", "priceNewBlock");
    document.getElementById("idPriceProduct").appendChild(para1);
}
function addRemoveButton(count) {
    var para1 = document.createElement("div");
    var newBlock = document.createTextNode("Видалити");
    para1.appendChild(newBlock);
    para1.setAttribute("id", "ButtonDiv" + count);
    para1.setAttribute("class", "buttonNewBlock");
    para1.setAttribute("onClick", "removeProduct(" + count + ")");
    document.getElementById("idPriceProduct").appendChild(para1);
}
function addNumericTextBox(count) {
    var para1 = document.createElement("input");
    para1.setAttribute("type", "number");
    para1.setAttribute("value", "1");
    para1.setAttribute("id", "TextDiv" + count);
    para1.setAttribute("class", "numericNewBlock");
    para1.setAttribute("onClick", "numbersProduct(" + count + ")");
    document.getElementById("idPriceProduct").appendChild(para1);
}
function addProduct(productNumber) {
    products.push(productNumber);
    document.getElementById("emptyProduct").style.display = "none";
    addNameProduct(productNumber, count);
    addNumericTextBox(count);
    addPriceProduct(productNumber, count);
    addRemoveButton(count);
    numbersProduct(count);
    count++;
    //TODO: ADD LOCALSTORAGE - localStorage.setItem("FULLNAME", "readFromTextBox");
}
function removeProduct(ButtonDiv) {
    document.getElementById("NameDiv" + ButtonDiv).style.display = "none";
    document.getElementById("PriceDiv" + ButtonDiv).style.display = "none";
    document.getElementById("TextDiv" + ButtonDiv).style.display = "none";
    document.getElementById("ButtonDiv" + ButtonDiv).style.display = "none";
    products.pop();
    count--;
    numbersProduct(count);
}

function searchDigital(el) {
    var num = el.replace(/[^0-9]/g, '');
    return num;
}


function numbersProduct(count) {
    var totalNumber = 0;
    var totalSum = 0;
    var price;
    var number;
    for (var i = 1; i < products.length + 1; i++) {
        number = document.getElementById("TextDiv" + i).value;
        price = document.getElementById("PriceDiv" + i).innerHTML;
        totalNumber = totalNumber + Number(number);
        totalSum = totalSum + Number(price * number);
    }
    document.getElementById("numbersProduct").innerHTML = "Кількість: " + totalNumber;
    document.getElementById("sumProduct").innerHTML = "Сума: " + totalSum;
}

function cleanArray() {
    while (products.length > 0) {
        products.pop();
    }
}

function cleanAll() {
    for (var i = 1; i < products.length + 1; i++) {
        document.getElementById("NameDiv" + i).style.display = "none";
        document.getElementById("PriceDiv" + i).style.display = "none";
        document.getElementById("TextDiv" + i).style.display = "none";
        document.getElementById("ButtonDiv" + i).style.display = "none";
    }
    document.getElementById("emptyProduct").style.display = "block";
    cleanArray();
    count = 1;
    numbersProduct(count);
}

function showRegistration() {
    document.getElementById("idBackgroundRegistration").style.display = "block";
    document.getElementById("idRegistrationForm").style.display = "block";
}
function closeRegistrationForm() {
    document.getElementById("idBackgroundRegistration").style.display = "none";
    document.getElementById("idRegistrationForm").style.display = "none";
}