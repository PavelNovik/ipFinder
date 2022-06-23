import 'babel-polyfill';
import 'leaflet/dist/leaflet.css';

import { addOffset, addTileLayer, getAddress, validateIp } from './helpers';
import icon from '../images/icon-location.svg';

// console.log('Hello from index.js');
// console.log('OK all right');
const ipInput = document.querySelector('.search-bar__input');
// console.log(ipInput);
const btn = document.querySelector('.search-bar__btn');
// console.log(btn);
const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

const markerIcon = L.icon({
  iconUrl: icon,
  iconSize: [30, 40],
  //   iconAnchor: [22, 94],
});

const mapArea = document.querySelector('.map');
const map = L.map(mapArea, {
  center: [53.030984, 27.558491],
  zoom: 13,
});

addTileLayer(map);
L.marker([53.030984, 27.558491], { icon: markerIcon }).addTo(map);

function getData() {
  // проверка данных
  if (validateIp(ipInput.value)) {
    // fetch(
    //   `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_M7JywgtLDRrLVkSnu5qLyvUASm9bC&ipAddress=${ipInput.value}`
    // )
    //   .then((response) => response.json())
    //   .then(data => setInfo(data))
    getAddress(ipInput.value).then(setInfo);
  }
}

function handleKey(e) {
  if (e.key === 'Enter') {
    getData();
  }
}

function setInfo(mapData) {
  const { lat, lng, country, city, region, timezone } = mapData.location;

  // console.log(mapData);
  ipInfo.innerText = mapData.ip;
  // locationInfo.innerText =
  //   mapData.location.country + ' ' + mapData.location.region;
  locationInfo.innerText = country + ' ' + city + ' ' + region;
  // timezoneInfo.innerText = mapData.location.timezone;
  timezoneInfo.innerText = timezone;
  ispInfo.innerText = mapData.isp;

  map.setView([lat, lng]);
  L.marker([lat, lng], { icon: markerIcon }).addTo(map);

  if (matchMedia('(max-width: 1023px)').matches) {
    addOffset(map);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getAddress('102.22.22.1').then(setInfo);
});
