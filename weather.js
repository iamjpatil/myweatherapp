// let url = "https://api.weatherapi.com/v1/current.json?key=d149a08dbbb744a699790847252601&q=Chopda";

let btn = document.querySelector("button");
btn.addEventListener("click", async (event) => {
    event.preventDefault();

    let cname = document.querySelector('input').value.trim();

    if (!cname) {
        alert("Please enter a city name!");
        return;
    }

    let url = `https://api.weatherapi.com/v1/current.json?key=d149a08dbbb744a699790847252601&q=${cname}`;

    let fact = await temp(url);

    let div = document.querySelector('#box1');
    div.classList.add('box');

    document.querySelector('#cityl').innerText = "City :";
    document.querySelector('#city').innerText = fact.location.name;
    document.querySelector('#statel').innerText = "Region :";
    document.querySelector("#state").innerText = fact.location.region;
    document.querySelector('#countryl').innerText = "Country :";
    document.querySelector("#count").innerText = fact.location.country;;
    document.querySelector("img").setAttribute("src", fact.current.condition.icon);

    document.querySelector('#wind').innerHTML = '<i class="fa-solid fa-wind"></i>&nbsp;Wind Speed(Kph) :';
    document.querySelector('#windv').innerHTML = fact.current.wind_mph +'<span>&nbsp;Kph</span>';
    document.querySelector('#humid').innerHTML = '<span class="material-symbols-outlined">humidity_percentage</span>Humidity :';
    document.querySelector('#humidv').innerHTML = fact.current.humidity+'<span>&nbsp;%</span>';
    document.querySelector('#pre').innerHTML = '<i class="fa-solid fa-cloud-rain"></i>&nbsp;Precipitation(In mm) :';
    document.querySelector('#prev').innerText = fact.current.precip_mm;
    document.querySelector('#date').innerHTML = '<i class="fa-solid fa-calendar-days"></i>&nbsp;Date And Time :';
    document.querySelector('#datev').innerText = fact.location.localtime;
    document.querySelector('#temp').innerHTML = fact.current.temp_c + '<sup>0</sup><span>C</span>';
    document.querySelector('#condn').innerText = fact.current.condition.text;
    document.querySelector('#last').innerHTML = '<i class="fa-solid fa-pencil"></i>&nbsp;Last Updated :';
    document.querySelector('#lastv').innerText = fact.current.last_updated;



    document.querySelector('input').value = '';
    
});
async function temp(url) {
    try {
        let res = await axios.get(url);
        console.log(res.data);
        return res.data;
    }
    catch (e) {
        console.log("error:-", e);
    }
}