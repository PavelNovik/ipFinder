import L from 'leaflet';

export function addTileLayer(map) {
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnJuMmJlZnJlZSIsImEiOiJja3l6djgwbDAwY3hzMnBvMHUwcmtseWY2In0.vXP_XBFOG-oGROaBrKPJWA',
    {
      attribution:
        'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">PavelNovik</a>.',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        'pk.eyJ1IjoiYnJuMmJlZnJlZSIsImEiOiJja3l6djgwbDAwY3hzMnBvMHUwcmtseWY2In0.vXP_XBFOG-oGROaBrKPJWA',
    }
  ).addTo(map);
}
