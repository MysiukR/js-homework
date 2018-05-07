var urlList = [];
var titleList = [];
var count = 0;

// 1. Додати нову закладку в список
//adding to list
//saving to localeStorage
function addBookmark(url, name) {
  var link = document.getElementById(url).value;
  var title = document.getElementById(name).value;
  if (validateLink(link)) {
    titleList.push(title);
    urlList.push(link);
    count++;
    localStorage.setItem('count', count);
    localStorage.setItem('book' + count, link);
    renderListCount(link);
  } else {
    alert("Invalid link for book!");
  }
}
function createNewLink(link, count) {
  var newA = document.createElement("a");
  var attributeHref = document.createAttribute("href");
  attributeHref.value = link;
  newA.setAttributeNode(attributeHref);
  var attributeId = document.createAttribute("id");
  attributeId.value = "a" + count;
  newA.setAttributeNode(attributeId);
  var attributeTarget = document.createAttribute("target");
  attributeTarget.value = "_blank";
  newA.setAttributeNode(attributeTarget);
  document.body.appendChild(newA);
}
// 2. Змінити відображеня кількості
function renderListCount(link) {
  var count = localStorage.getItem('count');
  createNewLink(link, count);
  document.getElementById("a" + count).innerHTML = localStorage.getItem('book' + count) + "<br>";
}

// 3. Валідувати дані, щоб не можна було
// зберегти пусті поля і неправильну адресу
// return true/false
function validateLink(link) {
  return (/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(link));
}

window.onload = renderBookmarkList();

//Коли відкриваєте сторінку первірити чи є
// дані в localeStorage, якщо так відобразити їх,
// якщо ні вивести повідомлення, що у вас немає збережених 
// закладок
function renderBookmarkList() {
  count = localStorage.getItem('count');
  if (count == null) {
    document.getElementById("allLinks").innerHTML = "Empty list";
  }
  else {
    for (var i = 1; i <= count; i++) {
      createNewLink(localStorage.getItem('book' + i), i);
      document.getElementById("a" + i).innerHTML = localStorage.getItem('book' + i) + "<br>";
    }
  }
}