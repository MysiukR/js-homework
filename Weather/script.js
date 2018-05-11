var cityId = { Lviv: 702550, London: 2643743, California: 5332921 };
let cityNumber = 3;
function addNewCity() {
    var id = document.getElementById("city").value;
    el = document.getElementById('city');
    city = el.options[el.selectedIndex].text;
    document.querySelector(".newcity").style.display = 'block';
    cityId[city] = id;
    document.querySelectorAll(".cityName")[3].textContent = city;
    citiesID = citiesID.concat("," + cityId[city]);
    cityNumber = 4;
    updateWeather();
    citiesID = citiesID.replace(/,[^,]+$/, "");//Deleting the text after the last comma
}
function showWeather(weather) {
    for (var i = 0; i < cityNumber; i++) {
        var data = document.querySelectorAll(".temperature")[i].textContent;
        document.querySelectorAll(".temperature")[i].textContent = data.replace("null", weather.list[i].main.temp);
        data = document.querySelectorAll(".humidity")[i].innerText;
        document.querySelectorAll(".humidity")[i].textContent = data.replace("null", weather.list[i].main.humidity);
        data = document.querySelectorAll(".pressure")[i].textContent;
        document.querySelectorAll(".pressure")[i].textContent = data.replace("null", weather.list[i].main.pressure);
        data = document.querySelectorAll(".clouds")[i].innerText;
        document.querySelectorAll(".clouds")[i].textContent = data.replace("null", weather.list[i].weather[0].description);
        var imageUrl = "http://openweathermap.org/img/w/" + weather.list[i].weather[0].icon + ".png";
        document.querySelectorAll(".iconWeather")[i].setAttribute("src", imageUrl);
    }
}
var citiesID = cityId.Lviv + "," + cityId.London + "," + cityId.California;
function getWeather() {
    if (!localStorage.getItem('dataWeather') || (new Date().getTime() - JSON.parse(localStorage.getItem('weather')).updateTime) > 3600000) {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/group",
            jsonp: "callback",
            dataType: "jsonp",
            data: {
                id: citiesID,
                units: "metric",
                APPID: "2d681a265a908a7be31a0924e1f54a75"
            },
            success: function (response) {
                response["updateTime"] = new Date().getTime();
                localStorage.setItem("dataWeather", JSON.stringify(response));
                showWeather(response);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                alert(xhr.status);
                alert(thrownError);
            }
        });
    } else
        showWeather(JSON.parse(localStorage.getItem('dataWeather')));
}
function updateWeather() {
    getWeather();
}
updateWeather();
