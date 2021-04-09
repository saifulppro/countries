// this file is contain all javascript file name
const apiurl = 'https://restcountries.eu/rest/v2/name/'
let getCountryName = country => {
    const url = `${apiurl}${country}`;
    fetch(url)
    .then(res => res.json())
    .then(data => Cinfo(data)) 
}
const searchBtn = document.getElementById('submit');
searchBtn.addEventListener('click', () => {
    const inputCountry = document.getElementById('Country').value;
    getCountryName(inputCountry)
})

const Cinfo = data => {
    const info = data[0];
    const imgg = info.flag;
    document.getElementById('c_name').innerText = info.name || "Unknown Location!";
    document.getElementById('c_nativename').innerText = info.nativeName;
    document.getElementById('c_city').innerText = info.capital;
    document.getElementById('c_currency').innerText = `${info.currencies[0].name}, ${info.currencies[0].symbol}`;
    document.getElementById('c_code').innerText = `${info.numericCode}`;
    document.getElementById('c_language').innerText = `${info.languages[0].name}`;
    document.getElementById('c_region').innerText = `${info.region}`;
    document.getElementById('c_subregion').innerText = `${info.subregion}`;
    document.getElementById('c_pop').innerText = `${info.population}`;
    document.getElementById('c_area').innerText = `${info.area}`;
    document.getElementById('c_timezone').innerText = `${info.timezones[0]}`;
    document.getElementById('c_border').innerText = `${info.borders}`;
    document.getElementById('c_regionalBlock').innerText = `${info.regionalBlocs[0].acronym}, ${info.regionalBlocs[0].name}`;
   document.getElementById('img').setAttribute('src', `${imgg}`);
    document.getElementById('city').value = "";
}

getCountryName('Usa')
